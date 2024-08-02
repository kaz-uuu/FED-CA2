"use client"
import { useRef, useState } from "react";
import { useStateContext } from "../stateContext";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

//component imports
import { TransitionLink } from "../components/transitionLink";
import PhysicsDivs from "../components/physicsItems";

//animation imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function WishSP() {
        const mainRef  = useRef()
        const { isFirstVisit } = useStateContext()

        useGSAP(() => {
                if (isFirstVisit) {
                    gsap.to('.nav-link', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
                } else {
                    gsap.to('.nav-link', {top: 0, duration: 0})
                }
                let exitTl = gsap.timeline({delay: 0, paused: true})
            },{ scope: mainRef })

        return (
                <main ref={mainRef}>
                        <Navbar>
                                <Nav>
                                        <div className="nav-item">
                                                <TransitionLink href={'/'} destination='home-link'>Home</TransitionLink>
                                        </div>
                                        </Nav>
                                        <Nav>
                                        <div className="nav-item">
                                                <TransitionLink href={'/sp-in-70'}  destination="sp-in-70-link">SP in 70</TransitionLink>
                                        </div>
                                        </Nav>
                                        <Nav>
                                        <div className="nav-item">
                                                <TransitionLink href={'/wish-sp'} id='active'  destination="wish-sp-link">Wish SP</TransitionLink>
                                        </div>
                                </Nav> 
                        </Navbar>
                        <PhysicsDivs />
                </main>
        )
}