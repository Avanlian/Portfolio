---

## Overview  
**Insta485** is an Instagram clone built across three projects for EECS 485: Web Systems at the University of Michigan. Each project builds on the prior one, introducing new architecture and expanding the application's functionality. The goal of the project was to create the same application using different architectures and approaches to development. 

---

## Project 1 - Insta485 Static
> The first project focuses entirely on a static web app. This version of Insta485 has very limited functionality. Posts can’t be liked, users can’t be followed or unfollowed, and there is no method to log in or sign up as a different user.

> For this project, my partner and I implemented the static site generator used to build the application. Rather than manually creating separate HTML files for every user or post, Jinja templates are populated with data from a JSON file and rendered into complete HTML pages by the static site generator.

>> ![Templates](assets/projects/insta485/templates.png)
>> ![Templates](assets/projects/insta485/generated_html.png)

> The images above show the relationship between the project's templates and the generated pages. The templates define the structure of each page, while the generated HTML contains the completed pages with their corresponding data. This approach allows the same templates to be reused for different users, posts, and feeds without duplicating the HTML.

---

## Project 2 - Insta485 Server-Side
> The second project introduces several significant changes to the application. We continue to use the Jinja templates from Project 1, but instead of generating pages ahead of time, Flask now renders them on demand when a user makes a request. The application also gains a SQLite database and significantly more interactivity. Users can like posts, upload posts from their profile, create and delete comments, and follow or unfollow other users.

### New Users and Authentication
> One major addition was user authentication and session management. Users can now create accounts, log in and out, and manage their profiles. When a user visits the landing page without an active session, Flask redirects them to the login page. Once authenticated, the user's session is used to determine which pages and actions they can access. The GIFs below demonstrate the login and account creation process.

>> ![Templates](assets/projects/insta485/server/login_showcase.gif)
>> ![Templates](assets/projects/insta485/server/signup_showcase.gif)

### Security
> With the addition of user accounts and a database, security became an important consideration. Passwords are never stored directly in the database. Instead, passwords are salted and securely hashed before being stored.

> Database interactions also use parameterized SQL queries. This helps protect the application against SQL injection attacks while allowing users to safely interact with the application.

### Posts and Interactivity 
> Project 2 transforms the static pages from Project 1 into a dynamic application where user actions persist across sessions. Posts can now be liked, commented on, created, and deleted, while following relationships determine which posts appear in a user's feed. These interactions are backed by the SQLite database, allowing the app to update and retrieve data based on the current user.

>> ![Templates](assets/projects/insta485/server/upload_showcase.gif)
>> ![Templates](assets/projects/insta485/server/new_user_post.png)

> The images above demonstrate how users can upload new posts, which are then stored in the database and displayed according to the application's existing feed and following logic.

> Another characteristic of the server-side architecture is that changes aren’t immediately reflected on the page. After an action such as liking a post or posting a comment, the page needs to refresh before the new state is displayed.

>> ![Templates](assets/projects/insta485/server/post_showcase.gif)

> This limitation highlights one of the major differences between server-rendered and client-side applications. While the server-side architecture allows the application to dynamically respond to user actions, every interaction still requires a request to the server and a new page render. Project 3 builds on this architecture by moving more of the application's logic and rendering to the client.

---
## Project 3 - Insta485 Client-Side

### Client-Side Rendering
> The biggest change from Project 2 is how the application responds to user actions. Actions such as liking a post, adding a comment, or loading additional posts can now update the page without requiring a full refresh. React manages the application's state and re-renders the necessary components.

#### Server-Side:
>> ![Templates](assets/projects/insta485/server/post_showcase.gif)

#### Client-Side:
>> ![Templates](assets/projects/insta485/client/post_showcase.gif)

### REST API
> To connect the React client with the existing Flask server, Project 3 introduces a REST API for communicating with application data. The client can send requests to the server to retrieve or modify data, such as loading posts, creating comments, or updating likes. The server handles these requests and returns the appropriate data, which React then uses to update the interface.

#### API Endpoints:
> The REST API exposes endpoints for retrieving and modifying different types of data.
>> ![Templates](assets/projects/insta485/client/rest_api1.png)

#### API Post Feed:
> The post feed endpoint returns the information needed by the client to construct posts in the user's feed.
>> ![Templates](assets/projects/insta485/client/rest_api2.png)

#### API Query:
> Query parameters allow the client to control how many posts are returned in a request, providing the foundation for the application's infinite scroll.
>> ![Templates](assets/projects/insta485/client/rest_api3.png)

### Infinite Scroll
> Project 3 also introduces infinite scrolling to the user feed. Instead of loading the entire feed at once, the client requests additional posts as the user reaches the bottom of the page. React then adds the new posts to the existing feed without needing the page to reload.

>> ![Templates](assets/projects/insta485/client/infinite_scroll.gif)

> This feature demonstrates one of the advantages of moving more of the application's logic to the client. New content can be retrieved and displayed dynamically, creating a more seamless browsing experience.
