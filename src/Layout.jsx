import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx';

export default function Layout() {
    const location = useLocation()

    return (
        <>
            <div className="pt-14">
                <Navbar />
            </div>

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>

            <Footer />
        </>
    )
}
