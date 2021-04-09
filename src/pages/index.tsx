import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/emotion">emotion demo</Link>
                </li>
                <li>
                    <Link to="/styled-components">styled-components demo</Link>
                </li>
            </ul>
        </>
    )
}
