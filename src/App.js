import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './pages/Form';
import Table from './pages/Table';
import Edit from './pages/Edit';
import './bootstrap.min.css';

function App() {
    const [entries, setEntries] = useState([]);

    const handleAddEntry = (entry) => {
        const newEntry = {
            id: entries.length,
            date: new Date().toLocaleDateString('ru-RU'),
            status: 'new',
            ...entry,
        };
        setEntries((prev) => [...prev, newEntry]);
    };



    return (
        <Router>
            <Navbar />
                    <Routes>
                        <Route path='/' element={<Form onSubmit={handleAddEntry} />} />
                        <Route path='/table' element={<Table data={entries} />} />
                        <Route path='/edit/:id' element={<Edit data={entries} setData={setEntries} />} />
                    </Routes>
        </Router>
    );
}

export default App;
