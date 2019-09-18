import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import api from '../services/api';

export default function Home() {
    const [status, setStatus] = useState('');
    const [series, setSeries] = useState([]);
    useEffect(()=>{
        async function loadSeries() {
            const response = await api.get('/series')
            setSeries(response.data);
        }
        loadSeries();
    },[status]);

    async function handleStatus(id) {
        const editStatus = await api.post(`/series/${id}/status`);
        setStatus(editStatus.data);
    }

    async function handleRemove(id) {
        await api.delete(`/series/${id}`);
        setSeries(series.filter(serie => serie._id !== id));
    }

    return (
        <div className="main-container">
            {series.length > 0 ? (
                <ul>
                    {series.map(serie => (
                        <li key={serie._id}>
                            <img src={`http://localhost:3333/files/${serie.poster}`} alt={serie.name}/>
                            <footer>
                                <strong>{serie.name}</strong>
                                <p>Gênero: {Object.values(serie.genre.name)}</p>
                                <span>{serie.comments}</span>
                                <div className="buttons">
                                    <button type="button" onClick={() => handleStatus(serie._id)}>
                                        {serie.status}
                                    </button>
                                    <button type="button" >
                                        <Link to={`/series/${serie._id}`} >INFO</Link>
                                    </button>
                                    <button type="button" onClick={() => handleRemove(serie._id)}>
                                        Excluir
                                    </button>
                                </div>
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