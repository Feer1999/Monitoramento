import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';

export function App() {
    return (
        <BrowserRouter>
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
