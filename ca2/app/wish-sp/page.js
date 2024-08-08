"use client"
import { useRef, useState } from "react";
import { useStateContext } from "../stateContext";
import './wish-sp.css'

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

//component imports
import { TransitionLink } from "../components/transitionLink";
import PhysicsDivs from "../components/cards/physicsItems";

//animation imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function WishSP() {
        const mainRef  = useRef()
        const { isFirstVisit } = useStateContext()
        const [SPin70ExitTl, setSPin70ExitTl] = useState(null)
        const [homeExitTl, setHomeExitTl] = useState(null)

        useGSAP(() => {
                if (isFirstVisit) {
                    gsap.to('.nav-link', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
                } else {
                    gsap.to('.nav-link', {top: 0, duration: 0})
                }

                // Exiting to SP in 70 page animation timeline
                let SPin70ExitTl = gsap.timeline({ paused: true })
                SPin70ExitTl.to('.transition-element', {width: '100vw', duration: 1, ease: 'power4.out'})
                SPin70ExitTl.to('.wish-sp-link', {opacity: 0.6, duration: 0.1, ease: 'power4.out'}, "<")
                SPin70ExitTl.to('.sp-in-70-link', {opacity: 1, duration: 0.3, ease: 'power4.out'},"<")
                setSPin70ExitTl(SPin70ExitTl) // Timeline saved using useState hook to pass to the transition link component
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
                                                <TransitionLink href={'/sp-in-70'}  destination="sp-in-70-link" timeline={SPin70ExitTl}>SP in 70</TransitionLink>
                                        </div>
                                        </Nav>
                                        <Nav>
                                        <div className="nav-item">
                                                <TransitionLink href={'/wish-sp'} id='active'  destination="wish-sp-link">Wish SP</TransitionLink>
                                        </div>
                                </Nav>
                        </Navbar>
                        <PhysicsDivs />
                        {/* <div className="transition-div">
                                <div className="background-white">
                                        <h1>SP 70</h1>
                                        <h1>SP 70</h1>
                                </div>
                                <div className="background-red"></div>
                                <div className="background-gray"></div>
                                
                        </div> */}
                </main>
        )
}