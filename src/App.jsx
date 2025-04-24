import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-black">
                <Navbar />        
                <Routes>
                <Route path="/" element={<HomePage />} /></Routes>
            </div>
        </Router>
    );
}

export default App;