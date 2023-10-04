import React from "react"
import style from '../Footer/style.css'
import { BiLogoGithub } from 'react-icons/bi'
import {ImWhatsapp} from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className="rodape">
            <div className="anuncio-container">
                <div>
                    <div className="conteudo-container">
                        <BiLogoGithub size={20} color="#fff" />
                        <p className="anuncio">Github</p>
                    </div>
                    <p className="anuncio-conteudo">github.com/smashcode</p>
                </div>
                <div>
                    <div className="conteudo-container">
                        <AiOutlineMail size={20} color="#fff" />
                        <p className="anuncio">Email</p>
                    </div>
                    <p className="anuncio-conteudo">smashcode2tds@outlook.com</p>
                </div>
                <div>
                    <div className="conteudo-container">
                        <ImWhatsapp size={20} color="#fff" />
                        <p className="anuncio">WhatsApp</p>
                    </div>
                    <p className="anuncio-conteudo">+55 (11) 94318-4728</p>
                </div>

            </div>
        </footer>
    )
}