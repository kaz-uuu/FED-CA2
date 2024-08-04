'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { CornerDownRight } from 'lucide-react'
import './cards.css'

import PressedButton from './button'

//animation imports
import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const MAX_NAME_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 100;

const CardForm = ({ state, hook, addNewCard }) => {
        const formRef = useRef(null)
        const containerRef = useRef(null)
        const nameContainerRef = useRef(null)
        const messageContainerRef = useRef(null)
        const successContainerRef = useRef(null)
        const inputRef = useRef(null)
        const textAreaRef = useRef(null)
        const [name, setName] = useState('')
        const [namePressed, setNamePressed] = useState(false)
        const [emptyName, setEmptyName] = useState(false)

        const [message, setMessage] = useState('')
        const [messagePressed, setMessagePressed] = useState(false)
        const [emptyMessage, setEmptyMessage] = useState(false)
        const nameErrorTlRef = useRef(null)
        const messageErrorTlRef = useRef(null)

        useGSAP(() => {
                gsap.registerPlugin(useGSAP);

                // Name error animation
                const splitNameText = new SplitType('#name-error', { types: 'chars' })
                const nameChars = splitNameText.chars

                nameErrorTlRef.current = gsap.timeline({ paused: true })
                        .fromTo(nameChars, 
                                { y: '100%' },
                                { 
                                        y: '0%',
                                        stagger: 0.01, 
                                        duration: 0.4, 
                                        ease: 'power4.out'
                                }
                        )

                // Message error animation
                const splitMessageText = new SplitType('#message-error', { types: 'chars' })
                const messageChars = splitMessageText.chars

                messageErrorTlRef.current = gsap.timeline({ paused: true })
                        .fromTo(messageChars, 
                                { y: '100%' },
                                { 
                                        y: '0%',
                                        stagger: 0.01, 
                                        duration: 0.4, 
                                        ease: 'power4.out'
                                }
                        )

                // Set initial positions
                gsap.set(nameContainerRef.current, { autoAlpha: 1, yPercent: 0 })
                gsap.set(messageContainerRef.current, { autoAlpha: 0, yPercent: 100 })
                gsap.set(successContainerRef.current, { autoAlpha: 0, yPercent: 100 })

                // Entrance animation
                gsap.fromTo(containerRef.current, 
                        { yPercent: 100, autoAlpha: 0 },
                        { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' }
                )
        }, { scope: formRef, dependencies: [state] })

        useEffect(() => {
                if (!state) {
                        // Exit animation
                        gsap.to(containerRef.current, {
                                yPercent: 100,
                                autoAlpha: 0,
                                duration: 0.5,
                                ease: 'power2.in',
                                onComplete: () => {
                                        // Reset form state
                                        setName('')
                                        setMessage('')
                                        setNamePressed(false)
                                        setMessagePressed(false)
                                        setEmptyName(false)
                                        setEmptyMessage(false)
                                        gsap.set(nameContainerRef.current, { autoAlpha: 1, yPercent: 0 })
                                        gsap.set(messageContainerRef.current, { autoAlpha: 0, yPercent: 100 })
                                        gsap.set(successContainerRef.current, { autoAlpha: 0, yPercent: 100 })
                                }
                        })
                }
        }, [state])

        useEffect(() => {
                if (nameErrorTlRef.current) {
                        emptyName ? nameErrorTlRef.current.play() : nameErrorTlRef.current.reverse()
                }
        }, [emptyName])

        useEffect(() => {
                if (messageErrorTlRef.current) {
                        emptyMessage ? messageErrorTlRef.current.play() : messageErrorTlRef.current.reverse()
                }
        }, [emptyMessage])

        useEffect(() => {
                if (name !== '') setEmptyName(false)
        }, [name])

        useEffect(() => {
                if (message !== '') setEmptyMessage(false)
        }, [message])
        
        useEffect(() => {
                const handleKeyDown = (event) => {
                        if (document.activeElement === inputRef.current || document.activeElement === textAreaRef.current) {
                                if (event.key === 'Enter' && namePressed) {
                                        handleMessageEnter()
                                } else if (event.key === 'Enter') {
                                        handleNameEnter()
                                }
                        }
                        if (event.key === 'Enter' && namePressed && messagePressed) {
                                handleReturn()
                        } else if (event.key === 'Escape') {
                                hook(false)
                        }
                };
        
                window.addEventListener('keydown', handleKeyDown);
        
                // Cleanup function to remove the event listener
                return () => {
                        window.removeEventListener('keydown', handleKeyDown);
                };
        }, [namePressed, messagePressed, hook]); 

        const handleNameChange = (e) => {
                const input = e.target.value;
                if (input.length <= MAX_NAME_LENGTH) {
                        setName(input);
                }
        }

        const handleMessageChange = (e) => {
                const input = e.target.value;
                if (input.length <= MAX_MESSAGE_LENGTH) {
                        setMessage(input);
                }
        }

        const handleNameEnter = () => {
                if (name === '') {
                        setEmptyName(true)
                } else {
                        setNamePressed(true)
                        gsap.to(nameContainerRef.current, {
                                autoAlpha: 0,
                                yPercent: -100,
                                duration: 0.5,
                                ease: 'power2.inOut',
                                onComplete: () => {
                                        gsap.to(messageContainerRef.current, {
                                                autoAlpha: 1,
                                                yPercent: 0,
                                                duration: 0.5,
                                                ease: 'power2.inOut'
                                        })
                                }
                        })
                }
        }

        const handleMessageEnter = () => {
                if (message === '') {
                        setEmptyMessage(true)
                } else {
                        setMessagePressed(true)
                        saveCard()
                        gsap.to(messageContainerRef.current, {
                                autoAlpha: 0,
                                yPercent: -100,
                                duration: 0.5,
                                ease: 'power2.inOut',
                                onComplete: () => {
                                        gsap.to(successContainerRef.current, {
                                                autoAlpha: 1,
                                                yPercent: 0,
                                                duration: 0.5,
                                                ease: 'power2.inOut'
                                        })
                                }
                        })
                }
        }

        const saveCard = () => {
                const newCard = { message, name };
                addNewCard(newCard);
                console.log('Card saved:', newCard);
        }

        const handleReturn = () => {
                hook(false)
        }

        if (!state) return null;

        return (
                <div ref={formRef} className='form'>
                        <div ref={containerRef} className='container'>
                                <button className='exit-button' onClick={() => hook(false)}>Esc</button>
                                <div ref={nameContainerRef} className='name-container'>
                                        <div className='grid'>
                                                <h1>1. Enter Name</h1>
                                                <div className='input-wrapper'>
                                                        <input
                                                                ref={inputRef}
                                                                value={name} 
                                                                placeholder='Name here' 
                                                                onChange={handleNameChange}
                                                                disabled={namePressed}
                                                                maxLength={MAX_NAME_LENGTH}
                                                        />
                                                        <span className='letter-count'>{name.length}/{MAX_NAME_LENGTH}</span>
                                                </div>
                                                <PressedButton 
                                                        pressed={namePressed} 
                                                        onClick={handleNameEnter} 
                                                        text='Enter'
                                                        Icon={CornerDownRight}
                                                />
                                                <div className='label-wrapper'>
                                                        <label id='name-error' className='error'>Name can't be empty!</label>
                                                </div>
                                        </div>
                                </div>

                                <div ref={messageContainerRef} className='message-container'>
                                        <div className='grid'>
                                                <h1>2. Enter Message</h1>
                                                <div className='input-wrapper'>
                                                        <textarea
                                                                ref={textAreaRef}
                                                                value={message} 
                                                                placeholder='Message here' 
                                                                onChange={handleMessageChange}
                                                                disabled={messagePressed}
                                                                maxLength={MAX_MESSAGE_LENGTH}
                                                        />
                                                        <span className='letter-count'>{message.length}/{MAX_MESSAGE_LENGTH}</span>
                                                </div>
                                                <PressedButton 
                                                        pressed={messagePressed} 
                                                        onClick={handleMessageEnter} 
                                                        text='Enter' 
                                                        Icon={CornerDownRight}
                                                />
                                                <div className='label-wrapper'>
                                                        <label id='message-error' className='error'>Message can't be empty!</label>
                                                </div>
                                        </div>
                                </div>

                                <div ref={successContainerRef} className='success-container'>
                                        <h1>Success!</h1>
                                        <p>Your message has been saved.</p>
                                        <PressedButton 
                                                onClick={handleReturn} 
                                                text='Return'
                                                Icon={CornerDownRight}
                                        />
                                </div>
                        </div>
                </div>
        )
}

export default CardForm