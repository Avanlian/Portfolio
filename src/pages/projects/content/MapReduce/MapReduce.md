---

## Overview  

MapReduce is a distributed systems model originally developed by Google for processing large datasets across clusters of computers. It divides the task into two primary stages: mapping, which processes input data into key-value pairs, and reducing, which aggregates those results into a final output.

This project implements a simplified MapReduce framework for EECS 485: Web Systems at the University of Michigan. Using a Manager/Worker architecture, the framework distributes map and reduce tasks across multiple processes.

---

## Architecture
>> The implemented MapReduce program was designed around a manager and a collection of worker processes to simulate distributed systems. Instead of having a single process perform a job, the manager breaks the work into smaller tasks and distributes them across available workers. Managers and workers communicate over network sockets using JSON messages.

### Manager
>> The manager functions as the central coordinator for all MapReduce tasks. It listens for any new submissions, registers workers, assigns tasks, and tracks the state of each job. 

>> When a job is submitted, the manager creates a new output directory and breaks the input dataset into map tasks. Each map task is paired with one or more input files and assigned to an available worker through a TCP message. The worker then runs the executable on the assigned input files, partitions the output, and writes the key-value pairs to temporary files in the shared directory. The manager tracks each task as pending, assigned, or completed.

>> Once the map stage has completed, the manager begins the reducer phase. It creates one reduce task for each reducer partition and assigns those tasks to available workers. Each worker reads the intermediate files for its partition, merges the records by key, runs the reducer executable, and writes the results to the output directory. The manager does not begin the reduce phase until all map tasks have been completed.

>> The manager also monitors fault tolerance. Workers send heartbeat signals over UDP to the manager every few seconds, allowing the manager to monitor a worker’s availability. If a worker misses more than five consecutive heartbeats, the manager marks it as dead and reassigns any unfinished tasks to a new worker. 

### Workers
>> Workers are the processes responsible for executing MapReduce tasks. In a real distributed system, a worker would typically run on a separate computer, virtual machine, or processor node connected to the manager over a network connection. 

>> When a worker starts, it opens a TCP socket, registers itself with the manager, and begins sending heartbeat signals once a registration acknowledgement is received. The manager tracks each worker as ready, busy, or dead, assigning new work only when ready.

>> During the map stage, a worker runs the mapper executable on its assigned input files and prepares the mapper's output for the reducers. It partitions and sorts the intermediate data before placing it in the shared temporary directory

>> During the reduce stage, the worker receives the intermediate files for a single reducer partition and merges their sorted contents into one stream without loading all of the data into memory. This stream is passed to the reducer executable, whose output is written to a temporary file before being moved into the final output directory. Once the task finishes, the worker sends a finished message to the manager.

## MapReduce in Practice
>> The MapReduce framework can be a fairly complex process to explain, so this section walks through a MapReduce task from start to finish. 

>> Let’s say that we wanted to count the number of times each word appears across multiple files.

### File1 says:
>> hello world  
>> hello eecs485  
>> hello grass  
>> Hello trees  
>> Goodbye grass  

### File2 says:
>> goodbye autograder  
>> hello autograder  
>> goodbye trees  
>> hello stars  

### Mapping
>> The manager begins by dividing the input files into map tasks and assigning those tasks to available workers. Each worker runs the mapper executable against its assigned files. For this example, the mapper reads each file line by line and converts every word into a (word, 1) key-value pair, where each 1 represents a singular occurrence.

### File1 says:
>> hello 1  
>> world 1  
>> hello 1  
>> eecs485 1  
>> hello 1  
>> grass 1  
>> hello 1  
>> trees 1  
>> goodbye 1  
>> grass 1  

### File2 says:
>> goodbye 1  
>> autograder 1  
>> hello 1  
>> autograder 1  
>> goodbye 1  
>> trees 1  
>> hello 1  
>> stars 1  

>> At this point, the workers have converted the inputs into key-value pairs that can be easily counted and processed during the reduce stage. Each Worker hashes each key to assign its records to a reducer partition, ensuring that all occurrences of the same word go to the same reducer. The Worker then sorts each partition by key.

### Reducing
>> The Worker merges the sorted intermediate files and passes the grouped key-value pairs to the reducer. For example, all occurrences of hello might arrive together as:

>> hello   1  
>> hello   1  
>> hello   1  
>> hello   1  
>> hello   1  

>> The reducer then combines those values to produce:

>> hello   5

>> The same process is repeated for every word in the partition.

### Final Output
>> Once the reducers finish, the manager's output directory contains one output file for each reducer. Together, these files contain the final word counts:

>> autograder  2  
>> eecs485     1  
>> goodbye     2  
>> grass       2  
>> hello       6  
>> stars       1  
>> trees       2  
>> world       1  

>> This example demonstrates the full flow of the framework: the Manager divides the work, Workers transform the input during the map stage, partition and sort the intermediate data, and then reduce those partitions into the final result.


