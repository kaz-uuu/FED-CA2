"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from "lenis/react";
import Minimap from "../components/minimap";
import Timeline from "../components/timeline/timeline";
import { useStateContext } from "../stateContext";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { TransitionLink } from "../components/transitionLink";


export default function SPin70() {
    const mainRef = useRef()
    const { isFirstVisit } = useStateContext()

    gsap.registerPlugin(useGSAP)
    useGSAP(() => {
        if (isFirstVisit) {
            gsap.to('.nav-link', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
        } else {
            gsap.to('.nav-link', {top: 0, duration: 0})
        }
        let exitTl = gsap.timeline({delay: 0, paused: true})
    },{ scope: mainRef })
    return (
            <ReactLenis root options={{ lerp: 0., duration: 2, smoothTouch: true }}>
                <main ref={ mainRef }>
                    <Navbar>
                        <Nav>
                            <div className="nav-item">
                                <TransitionLink href={'/'} destination='home-link'>Home</TransitionLink>
                            </div>
                        </Nav>
                        <Nav>
                            <div className="nav-item">
                                <TransitionLink href={'/sp-in-70'}  id='active'  destination="sp-in-70-link">SP in 70</TransitionLink>
                            </div>
                        </Nav>
                        <Nav>
                            <div className="nav-item">
                                <TransitionLink href={'/wish-sp'}  destination="wish-sp-link">Wish SP</TransitionLink>
                            </div>
                        </Nav>
                    </Navbar>
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
