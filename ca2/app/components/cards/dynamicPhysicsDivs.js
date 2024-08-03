import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import './cards.css';

//import components
import CardForm from './cardForm';

// Destructure required components from Matter.js
const { Engine, Render, Runner, World, Bodies, Body, Vector } = Matter;

// Array of wish messages and authors
const wishMessages = [
        { message: "Congratulations on 70 years of excellence!", author: "Kun Ming" },
        { message: "Here's to 70 more years of innovation!", author: "Jane" },
        { message: "SP has shaped generations. Happy 70th!", author: "Alex" },
        { message: "Proud to be part of SP's legacy!", author: "Sarah" },
        { message: "70 years of creating future-ready graduates!", author: "Mike" },
        { message: "SP: Where passion meets purpose for 70 years!", author: "Emily" },
        { message: "Celebrating 70 years of transforming lives!", author: "David" },
        { message: "SP: 70 years young and still innovating!", author: "Rachel" },
        { message: "Happy 70th! Thanks for the memories!", author: "Kevin" },
        { message: "70 years of excellence, community, and growth!", author: "Lisa" },
        { message: "Cheers to SP's platinum anniversary!", author: "Tom" },
        { message: "I hope SP continues to survive!", author: "Irman" },
        { message: "I hope SP will achieve all their goals and renovate SOC block", author: "Oliver" },
        { message: "I wish SP would open an exclusive shuttle bus service for SOC students!", author: "Javier" },
];

// Main component
const DynamicPhysicsDivs = ({ cardCount }) => {
        // Refs for accessing DOM elements and storing state
        const sceneRef = useRef(null);
        const engineRef = useRef(null);
        const renderRef = useRef(null);
        const wishCardsRef = useRef([]);
        const [error, setError] = useState(null);

        useEffect(() => {
                if (typeof window === 'undefined') return; // Guard for SSR

                let engine, render, runner;
                let lastMouseX = -1;
                let lastMouseY = -1;

                // Convert viewport width to pixels, with minimum sizes
                const vwToPixels = (vw, dimension) => {
                        const finalvw = (vw * window.innerWidth) / 100
                        if (dimension == 'width' && finalvw < 160) {
                                return 160
                        } else if (dimension == 'height' && finalvw < 112) {
                                return 112
                        }
                        return finalvw
                };

                const cardWidth = vwToPixels(20, 'width');
                const cardHeight = vwToPixels(14, 'height');

                // Class representing a wish card
                class WishCard {
                        constructor(x, y, content) {
                                let options = {
                                        frictionAir: 0.075,
                                        restitution: 0.25,
                                        density: 0.002,
                                        angle: Math.random() * 0.5 * Math.PI - (0.25* Math.PI), // Make all the cards render in upright
                                        collisionFilter: {
                                                group: -1, // Negative group means it will collide with boundaries but not with other cards
                                        },
                                };

                                // Create the physical body for the card
                                this.body = Bodies.rectangle(x, y, cardWidth, cardHeight, options);
                                World.add(engine.world, this.body);

                                // Create the visual representation of the card
                                this.div = document.createElement("div");
                                this.div.className = "wish-card";
                                this.div.style.width = `${cardWidth}px`;
                                this.div.style.height = `${cardHeight}px`;
                                this.div.style.position = "absolute";
                                this.div.style.boxSizing = "border-box";
                                this.div.style.overflow = "hidden";
                                this.div.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                                this.div.innerHTML = `
                                        <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; gap: 0.5vw;">
                                                <p style="text-align: left; margin: 0;">Dear SP,</p>
                                                <p style="margin: 0; text-align: left; flex-grow: 1; display: flex; align-items: center;">${content.message}</p>
                                                <p style="font-style: italic; text-align: right; margin: 0;">- ${content.author}</p>
                                        </div>
                                `;
                                sceneRef.current.appendChild(this.div);
                        }

                        // Update the position and rotation of the card's visual representation
                        update() {
                                const halfWidth = cardWidth / 2;
                                const halfHeight = cardHeight / 2;
                                this.div.style.left = `${this.body.position.x - halfWidth}px`;
                                this.div.style.top = `${this.body.position.y - halfHeight}px`;
                                this.div.style.transform = `rotate(${this.body.angle}rad)`;
                                this.div.style.zIndex = Math.floor(this.body.position.y);
                        }
                }

                // Create wish cards and add them to the scene
                const createWishCards = () => {
                        wishCardsRef.current = []; // Clear existing cards
                        for (let i = 0; i < cardCount; i++) {
                                let x = Math.random() * (window.innerWidth - cardWidth) + cardWidth / 2;
                                let y = Math.random() * (window.innerHeight - cardHeight) + cardHeight / 2;
                                let content = wishMessages[i % wishMessages.length];
                                wishCardsRef.current.push(new WishCard(x, y, content));
                        }
                };

                // Add boundaries to the physics world
                const addBoundaries = () => {
                        const thickness = 50;
                        World.add(engine.world, [
                                Bodies.rectangle(window.innerWidth / 2, -thickness / 2, window.innerWidth, thickness, { isStatic: true }),
                                Bodies.rectangle(window.innerWidth / 2, window.innerHeight + thickness / 2, window.innerWidth, thickness, { isStatic: true }),
                                Bodies.rectangle(-thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true }),
                                Bodies.rectangle(window.innerWidth + thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true }),
                        ]);
                };

                // Initialize the physics world and rendering
                const init = () => {
                        try {
                                // Create the physics engine
                                engine = Engine.create({
                                        gravity: { x: 0, y: 0 }
                                });
                                engineRef.current = engine;

                                // Create the renderer
                                render = Render.create({
                                        element: sceneRef.current,
                                        engine: engine,
                                        options: {
                                                width: window.innerWidth,
                                                height: window.innerHeight,
                                                wireframes: false,
                                                background: '#141414'
                                        }
                                });
                                renderRef.current = render;

                                runner = Runner.create();

                                addBoundaries();
                                createWishCards();

                                // Update card positions after each physics step
                                Matter.Events.on(engine, 'afterUpdate', () => {
                                        wishCardsRef.current.forEach(card => card.update());
                                });

                                Runner.run(runner, engine);
                                Render.run(render);

                                // Mouse interaction
                                document.addEventListener('mousemove', (event) => {
                                        const mouseX = event.clientX;
                                        const mouseY = event.clientY;

                                        // Only apply force if mouse has moved significantly
                                        if (Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY) > 10) {
                                                lastMouseX = mouseX;
                                                lastMouseY = mouseY;

                                                wishCardsRef.current.forEach((card) => {
                                                        const distance = Vector.magnitude(Vector.sub(card.body.position, { x: mouseX, y: mouseY }));
                                                        if (distance < 150) {
                                                                const forcePoint = { x: mouseX, y: mouseY };
                                                                let magnitude = 1
                                                                if (vwToPixels(20, 'height') > 500) {
                                                                        magnitude = 5
                                                                }
                                                                const forceMagnitude = magnitude; // Strength of force applied by mouse
                                                                const force = Vector.mult(
                                                                        Vector.normalise(Vector.sub(card.body.position, forcePoint)),
                                                                        forceMagnitude * (1 - distance / 150)
                                                                );
                                                                Body.applyForce(card.body, forcePoint, force);
                                                        }
                                                });
                                        }
                                });

                        } catch (err) {
                                console.error("Error in physics simulation setup:", err);
                                setError(err.message);
                        }
                };

                init();

                // Cleanup function
                return () => {
                        if (render) {
                                Render.stop(render);
                                World.clear(engine.world);
                                Engine.clear(engine);
                                render.canvas.remove();
                                document.removeEventListener('mousemove', () => {});
                                wishCardsRef.current.forEach(card => card.div.remove());
                        }
                };
        }, [cardCount]);

        // Error handling
        if (error) {
                return <div>Error: {error}</div>;
        }

        // Render the component
        return (
                <>
                        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                                <div className="header" style={{ position: 'absolute', zIndex: cardCount + 1 }}>
                                        <h1 onClick={() => {}}>Click here to wish SP a happy 70th anniversary!</h1>
                                </div>
                                <div ref={sceneRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
                        </div>
                        {/* <CardForm /> */}
                </>
        );
};

export default DynamicPhysicsDivs;