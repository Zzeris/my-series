import React, { useState, useEffect } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

import api from '../services/api';

export default function NewSerie({history}) {
    const [poster, setPoster] = useState({});
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [genreId, setGenreid] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        async function loadGenres() {
            const response = await api.get('/genres')
            setGenres(response.data);
            setGenreid(response.data[0]._id)
        }
        loadGenres();
    },[]);

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('poster', poster);
        data.append('name', name);
        data.append('genre', genreId);
        data.append('comments', comments);
        data.append('status', 'ASSISTIR');

        await api.post('/series', data)
        history.push('/')
    }

    return(
        <div className="container">
            <h1>Nova Série</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="poster">Poster</Label>
                    <Input
                        type="file"
                        onChange={e => setPoster(e.target.files[0])}
                    />

                    <Label for="name">Nome</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome da série"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <Label for="genres">Gênero</Label>
                    <Input type="select" name="genres" onChange={e => setGenreid(e.target.value)}>
                        {genres.map(genre => <option key={genre._id} value={genre._id}>{genre.name}</option>)}
                    </Input>

                    <Label for="comments">Comentários</Label>
                    <Input
                        type="text"
                        name="comments"
                        placeholder="Comentários da série"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit" color="primary">Salvar</Button>
                <Button tag={Link} to="/" color="danger">Cancelar</Button>
            </form>
        </div>
    );
}