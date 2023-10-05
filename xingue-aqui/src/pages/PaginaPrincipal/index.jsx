import React, { useState } from 'react';
import '../PaginaPrincipal/style.css';
import axios from 'axios';

function PaginaPrincipal() {
    const [swearWord, setSwearWord] = useState('');

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    const swearWordItens = {
        swear_word: swearWord,
        categorie: "VIOLENCIA"
    }

    const enviarXingamento = () => {
        api.post('/swearword/create', swearWordItens)
            .then((res) => alert("Xingamento enviado", res.data))
            .catch((err) => alert(err))        
        setSwearWord('')
    }

    return (
        <main className='main'>
            <section>
                <h1>Xingue <br /> aqui🧨</h1>
                <div className='containerFormulario'>
                    <input type='text' className='inputPrincipal' value={swearWord} onChange={(e) => setSwearWord(e.target.value)} />
                    <button type='submit' className='inputBotao' onClick={enviarXingamento}>Enviar💥</button>
                </div>
            </section>
        </main>
    );
}

export default PaginaPrincipal;