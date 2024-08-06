"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useStateContext } from "./stateContext";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import './index.css'

// component imports
import BookSequence from "./components/booksequence";
import { TransitionLink } from "./components/transitionLink";
import Marquee from "./components/marquee/marquee";

// animation related imports
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
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

        // const { isFirstVisit } = useStateContext()
        const mainRef = useRef()
        const horizontalContainer = useRef()
        const title = useRef() // create a reference to manipulate title in animations hook
        
        const [SPin70ExitTl, setSPin70ExitTl] = useState(null)
        const [mobileLanding, setMobileLanding] = useState(false)

        useEffect(() => {
                const handleResize = () => {
                        setMobileLanding(window.innerWidth < 800)
                }
        
                // Set initial value
                handleResize()
        
                // Add event listener
                window.addEventListener('resize', handleResize)
        
                // Clean up
                return () => window.removeEventListener('resize', handleResize)
            }, [])



        useGSAP(() => {
                // if (isFirstVisit) {
                        let tl = gsap.timeline({delay: 0})
                        tl.to(".col", {top: 0, duration: 3, ease: "power4.inOut"})
                        tl.to('.c-1 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=2')
                        tl.to('.c-2 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-3 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-4 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.c-5 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
                        tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
                        tl.to('.nav-link, .title', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
                // } else {
                //         gsap.to('.nav-link', {top: 0, duration: 0})
                //         let tl = gsap.timeline({delay: 0})
                //         tl.to(".col", {top: 0, duration: 0})
                //         tl.to('.c-3 .item', {top: 0, duration: 0})
                //         tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
                //         tl.to('.title', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
                // }
                let temp = 95 - 100*(window.innerWidth / horizontalContainer.current.offsetWidth)
                let scrollTween = gsap.to('.horizontal-container', {
                        xPercent: `-${temp}`, // Move the single section to the left by 100%
                        ease: "none", // Important as it keeps the scrolling motion linear
                        scrollTrigger: {
                                trigger: ".horizontal-container",
                                pin: true,
                                scrub: 0.1,
                                end: "+=3000"
                        }
                });

                // Exiting to SP in 70 page animation timeline
                let SPin70ExitTl = gsap.timeline({ paused: true })
                SPin70ExitTl.to('.transition-element', {width: '100vw', duration: 1, ease: 'power4.out'})
                SPin70ExitTl.to('.home-link', {opacity: 0.6, duration: 0.1, ease: 'power4.out'}, "<")
                SPin70ExitTl.to('.sp-in-70-link', {opacity: 1, duration: 0.3, ease: 'power4.out'},"<")
                setSPin70ExitTl(SPin70ExitTl) // Timeline saved using useState hook to pass to the transition link component
        },{ scope: mainRef })

        
        return (
                <main /*className={styles.main}*/ ref={ mainRef }>
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
                        <div className="item"><Image className="intro-img" src={chanChunSingImg} priority={true} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                        </div>
                        <div className="col c-2">
                        <div className="item"><Image className="intro-img"  src={spCampusImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={princeEdwardRoadCampusImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spStudentsImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spBusinessStudentsImg} priority={true} alt="SP Singapore Polytechnic School of Business Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spGradStudentsImg} priority={true} alt="SP Singapore Polytechnic Students Graduation"/></div>
                        </div>
                        <div className="col c-3">
                        <div className="item"><Image className="intro-img"  src={spStudents2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img"  src={newSchoolImg} priority={true} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item">{mobileLanding ? <Image className="intro-img" src={spStudentsImg} alt="SP Singapore Polytechnic Student Life"/>  : <Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/>}</div>
                        <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        </div>
                        <div className="col c-4">
                        <div className="item"><Image className="intro-img"  src={spCampusImg} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={princeEdwardRoadCampusImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spStudentsImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img" src={spBusinessStudentsImg} priority={true} alt="SP Singapore Polytechnic School of Business Student Life"/></div>
                        </div>
                        <div className="col c-5">
                        <div className="item"><Image className="intro-img" src={spGradStudentsImg} priority={true} alt="SP Singapore Polytechnic Students Graduation"/></div>
                        <div className="item"><Image className="intro-img"  src={spStudents2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                        <div className="item"><Image className="intro-img"  src={newSchoolImg} priority={true} alt="SP Singapore Polytechnic Campus"/></div>
                        <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                        <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                        </div>
                </div>
                <div className="title-wrapper"><h1 className="title" ref={title}>Celebrating 70 Years of <span className="titleSP">Singapore Polytechnic</span></h1></div>
                <div className="hero">
                </div>
                        <div ref={horizontalContainer} className="horizontal-container">
                                <div className="panel center-y">
                                        <div className="grid">
                                                <h2 className="description">What began in a humble five-storey building on Prince Edward Road grew into Singapore's largest polytechnic—a sprawling campus spanning 38 hectares of lush greenery and over 230,000 esteemed alumni. Our 70-year milestone in 2024 is a moment of reflection and celebration, but also the beginning of our next era, with more to discover and more to accomplish. This is SP at 70.</h2>
                                                <div className="img-column">
                                                        <div className="img-wrapper-1">
                                                               <Image className="school-img" fill src={princeEdwardRoadCampusImg} objectFit="cover" alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/>
                                                        </div>
                                                        <div className="img-wrapper-2">
                                                                <Image className="school-img" fill src={spCampusImg} objectFit="cover" alt="SP Singapore Polytechnic Campus"/>
                                                        </div>
                                                </div>
                                                <h1 className="rotated book-title">FOR ALL AGES</h1>
                                        </div>
                                        <BookSequence />

                                        <div className="grid-2">
                                                <h1 className="book-desc">In celebration of SP's 70th anniversary, we have launched a commemorative book titled ‘For All Ages, Singapore Polytechnic At Seventy’, featuring some of the people and moments that have shaped us through the years.</h1>
                                                <h1 className="rotated">FUTURE READY  SP</h1>
                                                <div className="section">
                                                        <h1>Personal/Work Life</h1>
                                                        {/* <div className="img-wrapper-3">
                                                               <Image className="school-img" fill src={princeEdwardRoadCampusImg} objectFit="cover"/>
                                                        </div> */}
                                                        <p>
                                                                Personal and work life are undergoing fundamental change. Being globally connected is a key aspect of SP's “future-ready” DNA. This includes fostering curiosity about the rest of the world, in all its diversity. Such an international outlook also builds empathy with people of other cultures, which is a vital ingredient in most fields of work, along with the capacity to understand the needs of users and consumers, markets and audiences.
                                                        </p>
                                                </div>
                                                <div className="section">
                                                        <h1>Industry Disruptions</h1>
                                                        {/* <div className="img-wrapper-3">
                                                               <Image className="school-img" fill src={princeEdwardRoadCampusImg} objectFit="cover"/>
                                                        </div> */}
                                                        <p>
                                                                The whole universe of industry has become much more disruptive, with game-changing developments in areas such as artificial intelligence (AI), machine learning, the Internet of Things (IoT), and robotics. To be future-ready, SP will need to embrace, and adapt to, change in industry – whether from technological advances or other shifts in the workplace. Anticipating the future is the only safeguard against the worst of disruption and displacement.
                                                        </p>
                                                </div>
                                                <div className="section">
                                                        <h1>Global Shifts</h1>
                                                        {/* <div className="img-wrapper-3">
                                                               <Image className="school-img" fill src={princeEdwardRoadCampusImg} objectFit="cover"/>
                                                        </div> */}
                                                        <p>
                                                                Of all the global issues facing the world, for most people, climate change tops the list. This subject is huge too, at Singapore Polytechnic, as efforts to help students become more “future-ready” focus on addressing sustainability, always from a holistic, big-picture perspective. This commitment is most concrete in the Polytechnic’s Sustainable Innovation Project (SIP), one of the 10 modules of the Common Core Curriculum. This is a learning experience that culminates in a capstone project that students work on in their second year of study.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                <div className="transition-element"></div>
                </main>
        );
}