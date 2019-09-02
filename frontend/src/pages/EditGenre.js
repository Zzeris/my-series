import React, { useState, useEffect } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Redirect } from 'react-router-dom';

import api from '../services/api';

export default function EditGenre({ match }) {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function loadGenre() {
            const response = await api.get(`/genres/${match.params.id}`)
            setName(response.data.name);
        }
        loadGenre();
    }, [match.params.id]);
    
    async function save() {
        if (name) {
            await api.put(`/genres/${match.params.id}`, { name })
            setSuccess(true)
        }
    }
    if (success) {
        return <Redirect to='/genres' />
    }

    return(
        <div className="container">
            <h1>Editar Gênero</h1>
            <form>
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Nome do gênero"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>
                <Button onClick={save}>Salvar</Button>
            </form>
        </div>
    );
}