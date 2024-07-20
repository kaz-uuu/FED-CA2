"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from "lenis/react";
import Minimap from "../components/minimap";
import Timeline from "../components/timeline";


export default function SPin70() {
    const mainRef = useRef()


    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        let tl = gsap.timeline({delay: 0})
        tl.to('.nav-item a, .title h1', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
    },{ scope: mainRef })
    return (
            <ReactLenis root options={{ lerp: 0., duration: 2, smoothTouch: true }}>
                <main ref={ mainRef }>
                    <Minimap>
                        <div className="mini-gallery">
                            <Timeline />
                        </div>
                    </Minimap>
                    <nav>
                        <div className="nav-item">
                            <a href="/" id="active">Home</a>
                        </div>
                        <div className="nav-item">
                            <a href="SP-in-70.html" id="active">SP in 70</a>
                        </div>
                        <div className="nav-item">
                            <a href="#" id="active">Wish SP</a>
                        </div>
                    </nav>
                    <div className="gallery">
                        <Timeline />
                    </div>
                </main>
            </ReactLenis>
    );
}
