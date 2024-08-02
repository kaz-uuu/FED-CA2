import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const { Engine, Render, Runner, World, Bodies, Body } = Matter;

const wishMessages = [
        { message: "Congratulations on 70 years of excellence!", author: "John Doe" },
        { message: "Here's to 70 more years of innovation!", author: "Jane Smith" },
        { message: "SP has shaped generations. Happy 70th!", author: "Alex Wong" },
        { message: "Proud to be part of SP's legacy!", author: "Sarah Lee" },
        { message: "70 years of creating future-ready graduates!", author: "Mike Chen" },
        { message: "SP: Where passion meets purpose for 70 years!", author: "Emily Tan" },
        // { message: "Celebrating 70 years of transforming lives!", author: "David Lim" },
        // { message: "SP: 70 years young and still innovating!", author: "Rachel Ng" },
        // { message: "Happy 70th! Thanks for the memories!", author: "Kevin Teo" },
        // { message: "70 years of excellence, community, and growth!", author: "Lisa Goh" },
        // { message: "Cheers to SP's platinum anniversary!", author: "Tom Baker" },
        // { message: "I hope SP continues to survive!", author: "Irman" },
        // { message: "I hope SP will achieve all their goals and renovate SOC block", author: "Oliver" },
        // { message: "I wish SP would open an exclusive shuttle bus service for SOC students!", author: "Javier" },
];

const DynamicPhysicsDivs = ({ cardCount = 6 }) => {
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

                const vwToPixels = (vw) => {
                        return (vw * window.innerWidth) / 100;
                };

                const cardWidth = vwToPixels(20);
                const cardHeight = vwToPixels(14);

                class WishCard {
                        constructor(x, y, content) {
                                let options = {
                                        frictionAir: 0.075,
                                        restitution: 0.25,
                                        density: 0.002,
                                        angle: Math.random() * Math.PI * 2,
                                };

                                this.body = Bodies.rectangle(x, y, cardWidth, cardHeight, options);
                                World.add(engine.world, this.body);

                                this.div = document.createElement("div");
                                this.div.className = "wish-card";
                                this.div.style.width = `${cardWidth}px`;
                                this.div.style.height = `${cardHeight}px`;
                                this.div.style.position = "absolute";
                                this.div.style.backgroundColor = "white";
                                this.div.style.padding = "2.2vw";
                                this.div.style.boxSizing = "border-box";
                                this.div.style.overflow = "hidden";
                                this.div.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                                this.div.innerHTML = `
                                        <div style="display: flex; flex-direction: column; height: 100%; gap: 0.5vw;">
                                                <p style="font-size: 1.2vw; text-align: left;">Dear SP,</p>
                                                <p style="font-size: 1.2vw; margin-bottom: 8px; text-align: left;">${content.message}</p>
                                                <p style="font-size: 1.2vw; font-style: italic; text-align: right; flex: 1 0 0;">- ${content.author}</p>
                                        </div>
                                `;
                                sceneRef.current.appendChild(this.div);
                        }

                        update() {
                                const halfWidth = cardWidth / 2;
                                const halfHeight = cardHeight / 2;
                                this.div.style.left = `${this.body.position.x - halfWidth}px`;
                                this.div.style.top = `${this.body.position.y - halfHeight}px`;
                                this.div.style.transform = `rotate(${this.body.angle}rad)`;
                        }
                }

                const createWishCards = () => {
                        wishCardsRef.current = []; // Clear existing cards
                        for (let i = 0; i < cardCount; i++) {
                                let x = Math.random() * (window.innerWidth - cardWidth) + cardWidth / 2;
                                let y = Math.random() * (window.innerHeight - cardHeight) + cardHeight / 2;
                                let content = wishMessages[i % wishMessages.length];
                                wishCardsRef.current.push(new WishCard(x, y, content));
                        }
                };

                const addBoundaries = () => {
                        const thickness = 50;
                        World.add(engine.world, [
                                Bodies.rectangle(window.innerWidth / 2, -thickness / 2, window.innerWidth, thickness, { isStatic: true }),
                                Bodies.rectangle(window.innerWidth / 2, window.innerHeight + thickness / 2, window.innerWidth, thickness, { isStatic: true }),
                                Bodies.rectangle(-thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true }),
                                Bodies.rectangle(window.innerWidth + thickness / 2, window.innerHeight / 2, thickness, window.innerHeight, { isStatic: true }),
                        ]);
                };

                const init = () => {
                        try {
                                engine = Engine.create({
                                        gravity: { x: 0, y: 0 }
                                });
                                engineRef.current = engine;

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

                                Matter.Events.on(engine, 'afterUpdate', () => {
                                        wishCardsRef.current.forEach(card => card.update());
                                });

                                Runner.run(runner, engine);
                                Render.run(render);

                                // Mouse interaction
                                document.addEventListener('mousemove', (event) => {
                                        const mouseX = event.clientX;
                                        const mouseY = event.clientY;

                                        if (Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY) > 10) {
                                                lastMouseX = mouseX;
                                                lastMouseY = mouseY;

                                                wishCardsRef.current.forEach((card) => {
                                                        if (Math.hypot(mouseX - card.body.position.x, mouseY - card.body.position.y) < 150) {
                                                                const forceMagnitude = 3;
                                                                Body.applyForce(card.body, card.body.position, {
                                                                        x: (Math.random() - 0.5) * forceMagnitude,
                                                                        y: (Math.random() - 0.5) * forceMagnitude,
                                                                });
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

        if (error) {
                return <div>Error: {error}</div>;
        }

        return (
                <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                        <div className="header" style={{ position: 'absolute', zIndex: 1 }}>
                                <h1>SP 70</h1>
                        </div>
                        <div ref={sceneRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
                </div>
        );
};

export default DynamicPhysicsDivs;