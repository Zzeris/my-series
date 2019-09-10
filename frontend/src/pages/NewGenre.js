import React, { useState } from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import api from '../services/api';

export default function NewGenre({history}) {
    const [name, setName] = useState('');
    
    async function save() {
        if (name) {
            await api.post('/genres', { name })
            history.push('/genres')
        }
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