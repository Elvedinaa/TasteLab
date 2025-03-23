import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you’re using React Router
import '../styles/Home.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to TasteLab</h1>
            </header>

            <button 
                className="cta-button" 
                onClick={() => navigate('/login')}
            >
                Login/Sign Up
            </button>
        </div>
    );
}

export default Home;
