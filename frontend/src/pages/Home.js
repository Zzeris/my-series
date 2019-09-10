import React, { useEffect, useState } from 'react';
import { Badge } from 'reactstrap';

import './Home.css';

import api from '../services/api';

export default function Home() {
    const [series, setSeries] = useState([]);
    useEffect(()=>{
        async function loadSeries() {
            const response = await api.get('/series')
            setSeries(response.data);
        }
        loadSeries();
    },[]);

    return (
        <div className="main-container">
            {series.length > 0 ? (
                <ul>
                    {series.map(serie => (
                        <li key={serie._id}>
                            <img src={`http://localhost:3333/files/${serie.poster}`} alt={serie.name}/>
                            <footer>
                                <strong>{serie.name}</strong>
                                <p>{serie.genre}</p>
                                <p>{serie.comments}</p>
                                <Badge>{serie.status}</Badge>
                            </footer>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">Você não possuie séries cadastradas.</div>
            )}
        </div>
    );
}