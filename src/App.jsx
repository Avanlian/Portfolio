import "./App.module.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { AccountabilityBot } from './pages/projects/AccountabilityBot'
import { TheBoxDimension } from './pages/projects/TheBoxDimension'
import { TheLegendOfZeldaRemake } from './pages/projects/TheLegendOfZeldaRemake'
import { TheTowerOfAlbion } from './pages/projects/TheTowerOfAlbion'
import { WizardWars } from './pages/projects/WizardWars'

function App(){
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AccountabilityBot" element={<AccountabilityBot/>}/>
            <Route path="/TheBoxDimension" element={<TheBoxDimension/>}/>
            <Route path="/TheLegendOfZeldaRemake" element={<TheLegendOfZeldaRemake/>}/>
            <Route path="/TheTowerOfAlbion" element={<TheTowerOfAlbion/>}/>
            <Route path="/WizardWars" element={<WizardWars/>}/>
        </Routes>
    </Router>
  )
}

export default App