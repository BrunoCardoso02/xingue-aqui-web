import React, { useState } from 'react';
import '../PaginaPrincipal/style.css';
import axios from 'axios';

function PaginaPrincipal() {
    const [swearWord, setSwearWord] = useState('');

    const swearWordItens = {
        swear_word: swearWord,
        categorie: "VIOLENCIA"
    }

    const enviarXingamento = () => {
        const url = 'http://localhost:8080/swearword/create'
        axios.post(url, swearWordItens)
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