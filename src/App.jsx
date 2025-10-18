import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import About from './Routes/About.jsx';
import Pricing from './Routes/Pricing.jsx';
import Features from './Routes/Features.jsx';
import Testimonials from './Routes/Testimonials.jsx';
import Help from './Routes/Help.jsx';
import SignIn from './Routes/SignIn.jsx';
import SignUp from './Routes/SignUp.jsx';

function App() { 
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/help" element={<Help />} />
                    <Route path='/SignIn' element={<SignIn/>}/>
                    <Route path='/SignUp' element={<SignUp/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
