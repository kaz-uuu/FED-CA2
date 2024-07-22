"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TransitionLink } from "./components/transitionLink";
import { useStateContext } from "./stateContext";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

//image imports
import newSchoolImg from '../public/images/img1.png' 
import oldSchoolImg from '../public/images/img2.png' 
import spSignImg from '../public/images/img3.png' 
import spSign2Img from '../public/images/img4.png' 
import chanChunSingImg from '../public/images/img5.png' 

export default function Home() {
    gsap.registerPlugin(useGSAP)
    const { isFirstVisit } = useStateContext()
    const main = useRef()
    const [SPin70ExitTl, setSPin70ExitTl] = useState(null)

    useGSAP(() => {
        console.log(sessionStorage.getItem('firstVisit'))
        if (isFirstVisit) {
            let tl = gsap.timeline({delay: 0})
            tl.to(".col", {top: 0, duration: 3, ease: "power4.inOut"})
            tl.to('.c-1 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=2')
            tl.to('.c-2 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
            tl.to('.c-3 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
            tl.to('.c-4 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
            tl.to('.c-5 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
            tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
            tl.to('.nav-link, .title h1', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
        } else {
            gsap.to('.nav-link', {top: 0, duration: 0})
            let tl = gsap.timeline({delay: 0})
            tl.to(".col", {top: 0, duration: 0})
            tl.to('.c-3 .item', {top: 0, duration: 0})
            tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
            tl.to('.title h1', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
        }
        let SPin70ExitTl = gsap.timeline({ paused: true })
        SPin70ExitTl.to('.transition-element', {width: '100vw', duration: 1, ease: 'power4.out'})
        SPin70ExitTl.to('.home-link', {opacity: 0.6, duration: 0.1, ease: 'power4.out'}, "<")
        SPin70ExitTl.to('.sp-in-70-link', {opacity: 1, duration: 0.3, ease: 'power4.out'},"<")
        setSPin70ExitTl(SPin70ExitTl)
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
                    <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                    <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                    <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                </div>
                <div className="col c-3">
                    <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                    <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                    <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                    <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                </div>
                <div className="col c-4">
                    <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                    <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                    <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                </div>
                <div className="col c-5">
                    <div className="item"><Image className="intro-img"  src={newSchoolImg} alt="SP Singapore Polytechnic Campus"/></div>
                    <div className="item"><Image className="intro-img" src={oldSchoolImg} alt="SP Singapore Polytechnic Old Campus, Prince Edward Road 1960s "/></div>
                    <div className="item"><Image className="intro-img" src={spSignImg} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={spSign2Img} alt="SP Singapore Polytechnic Student Life"/></div>
                    <div className="item"><Image className="intro-img" src={chanChunSingImg} alt="SP Singapore Polytechnic For All Ages Chan Chun Sing"/></div>
                </div>
            </div>
            <div className="hero">
                <div className="title"><h1 className="display-3">Celebrating 70 Years of <span className="titleSP">Singapore Polytechnic</span></h1></div>
            </div>
            <div className="content"></div>
            <div className="transition-element"></div>
        </main>
    );
}
