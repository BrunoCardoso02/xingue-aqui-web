import React, { useState } from 'react';
import '../PaginaPrincipal/style.css';
import axios from 'axios';

function PaginaPrincipal() {
    const [swearWord, setSwearWord] = useState('');
    const [categorie, setCategorie] = useState('VIOLENCIA')

    const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    const swearWordItens = {
        swear_word: swearWord,
        categorie: categorie
    }

    const enviarXingamento = () => {
        api.post('swearword/create', swearWordItens)
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
                    <select value={categorie} onChange={(e) => setCategorie(e.target.value)} className='menu-opcoes'>
                        <option value="VIOLENCIA">Violência</option>
                        <option value="ETARISMO">Etarismo</option>
                        <option value="ANTISSEMITISMO">Antissemitismo</option>
                        <option value="RACISMO">Racismo</option>
                        <option value="MACHISMO">Machismo</option>
                        <option value="FEMINISMO">Feminismo</option>
                        <option value="GORDOFOBIA">Gordofobia</option>
                        <option value="XENOFOBIA">Xenofobia</option>
                        <option value="HOMOFOBIA">Homofobia</option>
                        
                    </select>
                    <button type='submit' className='inputBotao' onClick={enviarXingamento}>Enviar💥</button>
                </div>
            </section>
        </main>
    );
}

export default PaginaPrincipal;