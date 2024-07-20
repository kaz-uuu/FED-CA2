"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from "lenis/react";
import Minimap from "../components/minimap";
import Timeline from "../components/timeline";
import { TransitionLink } from "../components/transitionLink";
import { useFirstVisit } from "../visitContext";


export default function SPin70() {
    const mainRef = useRef()
    const { isFirstVisit } = useFirstVisit()

    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        if (isFirstVisit == null) {
            gsap.to('.nav-link', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
        } else {
            gsap.to('.nav-link', {top: 0, duration: 0})
        }
        let exitTl = gsap.timeline({delay: 0, paused: true})
    },{ scope: mainRef })
    return (
            <ReactLenis root options={{ lerp: 0., duration: 2, smoothTouch: true }}>
                <main ref={ mainRef }>
                    <nav>
                        <div className="nav-item">
                            <TransitionLink href={'/'} className="nav-link">Home</TransitionLink>
                        </div>
                        <div className="nav-item">
                            <TransitionLink href={'/sp-in-70'}  className="nav-link" id='active'>SP in 70</TransitionLink>
                        </div>
                        <div className="nav-item">
                            <TransitionLink href={'/wish-sp'}  className="nav-link">Wish SP</TransitionLink>
                        </div>
                    </nav>
                    <Minimap>
                        <div className="mini-gallery">
                            <Timeline />
                        </div>
                    </Minimap>
                    <div className="gallery">
                        <Timeline />
                    </div>
                </main>
            </ReactLenis>
    );
}
