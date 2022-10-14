import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css'

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <h3>AlloMovie</h3>
                <ul>
                    <NavLink to="/"><li>Accueil</li></NavLink>
                    <NavLink to="/details"><li>Details</li></NavLink>
                    <NavLink to="/favoris"><li>Favoris</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;