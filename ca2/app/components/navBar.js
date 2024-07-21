"use client"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { TransitionLink } from "./transitionLink"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useStateContext } from "../stateContext"

const NavBar = () => {
        const pathname = usePathname()
        const { setNavBarTimeline } = useStateContext()
        useGSAP(() => {
                let tl = gsap.timeline({paused: true})
                tl.to('.nav-link', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
                setNavBarTimeline(tl)
        })
        return (
                <Navbar>
                        <Nav>
                                <div className="nav-item">
                                        <TransitionLink href={'/'} className="nav-link" id={pathname === '/' ? 'active' : ''}>Home</TransitionLink>
                                </div>
                        </Nav>
                        <Nav>
                                <div className="nav-item">
                                        <TransitionLink href={'/sp-in-70'}  className="nav-link" id={pathname === '/sp-in-70' ? 'active' : ''}>SP in 70</TransitionLink>
                                </div>
                        </Nav>
                        <Nav>
                                <div className="nav-item">
                                        <TransitionLink href={'/wish-sp'}  className="nav-link" id={pathname === '/wish-sp' ? 'active' : ''}>Wish SP</TransitionLink>
                                </div>
                        </Nav>
                </Navbar>
        )
} 

export default NavBar