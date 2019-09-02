import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import api from '../services/api';

export default function Genre() {
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
        async function loadGenres() {
            const response = await api.get('/genres')
            setGenres(response.data);
        }
        loadGenres();
    }, []);

    async function removeGenre(id) {
        await api.delete(`/genres/${id}`);
        setGenres(genres.filter(genre => genre._id !== id));
    }

    return(
        <div className="container">
            <h1>Gêneros</h1>
            <div>
                <Link to="/genres/new" className="btn btn-primary">Novo gênero</Link>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.map(genre => (
                        <tr key={genre._id}>
                            <td>{genre.name}</td>
                            <td>
                            <Button
                                color="danger"
                                onClick={() => {removeGenre(genre._id)}}>
                                Excluir
                            </Button>
                            <Link to={`/genres/${genre._id}`} className="btn btn-warning">Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}