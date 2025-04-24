import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router basename="/Portfolio3.0">
            <div className="min-h-screen bg-black">
                <Navbar />        
                <Routes>
                <Route path="/" element={<HomePage />} /></Routes>
            </div>
        </Router>
    );
}

export default App;