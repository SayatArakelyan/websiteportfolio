import "./assets/style/main.css"
import "./assets/style/reset.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <ScrollToTop/>

                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route  path="projects" element={<Projects/>}/>
                    <Route path="project/:id" element={<Project/>}/>
                    <Route path="contacts" element={<Contacts/>}/>

                </Routes>


                <Footer/>

            </BrowserRouter>

        </div>


    );
}

export default App;
