import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Redirect } from 'react-router-dom';

import api from '../services/api';

export default function NewGenre() {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(false);
    
    async function save() {
        if (name) {
            await api.post('/genres', { name })
            setSuccess(true)
        }
    }
    if (success) {
        return <Redirect to='/genres' />
    }

    return(
        <div className="container">
            <h1>Novo Gênero</h1>
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