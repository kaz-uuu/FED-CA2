"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useStateContext } from "./stateContext";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


// animation related imports
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { TransitionLink } from "./components/transitionLink";
import SplitType from "split-type";

//image imports
import newSchoolImg from '../public/images/img1.png' 
import oldSchoolImg from '../public/images/img2.png' 
import spSignImg from '../public/images/img3.png' 
import spSign2Img from '../public/images/img4.png' 
import chanChunSingImg from '../public/images/img5.png'
import spCampusImg from '../public/images/img6.png'
import princeEdwardRoadCampusImg from '../public/images/img7.png'
import spStudentsImg from '../public/images/img8.png'
import spBusinessStudentsImg from '../public/images/img9.png'
import spGradStudentsImg from '../public/images/img10.png'
import spStudents2Img from '../public/images/img11.png'
 
export default function Home() {
        gsap.registerPlugin(useGSAP)
        gsap.registerPlugin(ScrollTrigger)

        const { isFirstVisit } = useStateContext()
        const main = useRef()
        const [SPin70ExitTl, setSPin70ExitTl] = useState(null)
        const title = useRef() // create a reference to manipulate title in animations hook
                
        useGSAP(() => {
                if (isFirstVisit) {
                        let tl = gsap.timeline({delay: 0})
                        tl.to(".col", {top: 0, duration: 3, ease: "power4.inOut"})
                        tl.to('.c-1 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=2')
                        tl.to('.c-2 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-3 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-4 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-5 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
                        tl.to('.nav-link, .title', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
                        tl.to('.landing', {transform: 'scaleY(1)', duration: 0},'<')
                } else {
                        gsap.to('.nav-link', {top: 0, duration: 0})
                        let tl = gsap.timeline({delay: 0})
                        tl.to(".col", {top: 0, duration: 0})
                        tl.to('.c-3 .item', {top: 0, duration: 0})
                        tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
                        tl.to('.title', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
                        tl.to('.landing', {transform: 'scaleY(1)', duration: 0},'<')
                }

                // const splitText = new SplitType('.title', { types: 'chars'})
                // gsap.to(splitTitle, {
                //         scrollTrigger: {
                //                 trigger: splitTitle,
                //                 start: "top bottom", // When the top of the trigger hits the bottom of the viewport
                //         }
                // })       

                // gsap.to('.clip-overlay', {
                //         scrollTrigger: {
                //                 trigger: '.clip-overlay',
                //                 start: 'top top',
                //                 scrub: true,
                //                 pin: '.landing'
                //         },
                //         duration: 1,
                //         "--vert1": "0vw",
                //         "--vert2": "0vh",
                //         "--vert3": "100vw",
                //         "--vert4": "0vh",
                //         "--vert5": "100vw",
                //         "--vert6": "100vh",
                //         "--vert7": "0vw",
                //         "--vert8": "100vh",

                // })

                // Exiting to SP in 70 page animation timeline
                let SPin70ExitTl = gsap.timeline({ paused: true })
                SPin70ExitTl.to('.transition-element', {width: '100vw', duration: 1, ease: 'power4.out'})
                SPin70ExitTl.to('.home-link', {opacity: 0.6, duration: 0.1, ease: 'power4.out'}, "<")
                SPin70ExitTl.to('.sp-in-70-link', {opacity: 1, duration: 0.3, ease: 'power4.out'},"<")
                setSPin70ExitTl(SPin70ExitTl) // Timeline saved using useState hook to pass to the transition link component
        },{ scope: main })


        return (
                <main /*className={styles.main}*/ ref={ main }>
                <Navbar>
                        <Nav>
                        <div className="nav-item">
                                <TransitionLink href={'/'} id='active' destination='home-link'>Home</TransitionLink>
                        </div>
                        </Nav>
                        <Nav>
                        <div className="nav-item">
                                <TransitionLink href={'/sp-in-70'}  destination="sp-in-70-link" timeline={SPin70ExitTl}>SP in 70</TransitionLink>
                        </div>
                        </Nav>
                        <Nav>
                        <div className="nav-item">
                                <TransitionLink href={'/wish-sp'}  destination="wish-sp-link">Wish SP</TransitionLink>
                        </div>
                        </Nav>
                </Navbar>
                <div className="wrapper">
                        <div className="col c-1">
                        <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                        </div>
                        <div className="col c-2">
                        <div className="item"><Image className="intro-img"  src={spCampusImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={princeEdwardRoadCampusImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spStudentsImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spBusinessStudentsImg} alt="SP Singapore Polytechnic School of Business Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spGradStudentsImg} alt="SP Singapore Polytechnic Students Graduation"/></div>
                        <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        </div>
                        <div className="col c-3">
                        <div className="item"><Image className="intro-img"  src={spStudents2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                        <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        </div>
                        <div className="col c-4">
                        <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                        <div className="item"><Image className="intro-img"  src={spCampusImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={princeEdwardRoadCampusImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spStudentsImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spBusinessStudentsImg} alt="SP Singapore Polytechnic School of Business Student Life"/></div>
                        </div>
                        <div className="col c-5">
                        <div className="item"><Image className="intro-img" src={spGradStudentsImg} alt="SP Singapore Polytechnic Students Graduation"/></div>
                        <div className="item"><Image className="intro-img"  src={spStudents2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        </div>
                </div>
                <div className="landing">
                        <div className="title-wrapper"><h1 className="title" ref={title}>Celebrating 70 Years of <span className="titleSP">Singapore Polytechnic</span></h1></div>
                        <div className="hero">
                        </div>
                        <div className="clip-overlay">
                                <div className="content is-loading">
                                        
                                <h2 className="description">What began in a humble five-storey building on Prince Edward Road grew into Singapore's largest polytechnic—a sprawling campus spanning 38 hectares of lush greenery and over 230,000 esteemed alumni. Our 70-year milestone in 2024 is a moment of reflection and celebration, but also the beginning of our next era, with more to discover and more to accomplish. This is SP at 70.</h2>
                                <div className="image-container">
                                        <Image src={spCampusImg} width={1720} height={1146} alt="SP Singapore Polytechnic Campus"/>
                                </div>
                                </div>
                        </div>
                </div>
                <div className="transition-element"></div>
                </main>
        );
}
