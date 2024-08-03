'use client'
import { useState } from 'react'
import './cards.css'

//animation imports 
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const CardForm = ( trigger ) => {
        const [name, setName] = useState(null)
        const [message, setMessage] = useState(null)
        const saveCard = () => {
        
        }
        
        return (
                <div className='form'>
                        <div className='card-container'>
                               <p>Dear SP,</p>
                               <input></input>
                                -<input></input>
                        </div>
                </div>
        
        )
}

export default CardForm