import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

import api from '../services/api';

export default function NewSerie({ history, match }) {
    const [poster, setPoster] = useState({});
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('poster', poster);
        data.append('name', name);
        data.append('comments', comments);

        await api.put(`/series/${match.params.id}`, data)
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

                    <Label for="name">Comentários</Label>
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