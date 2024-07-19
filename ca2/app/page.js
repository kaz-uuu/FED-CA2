"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

//image imports
import newSchoolImg from '../public/images/img1.png' 
import oldSchoolImg from '../public/images/img2.png' 
import spSignImg from '../public/images/img3.png' 
import spSign2Img from '../public/images/img4.png' 
import chanChunSingImg from '../public/images/img5.png' 

export default function Home() {
    gsap.registerPlugin(useGSAP)
    const main = useRef()
    useGSAP(() => {
        let tl = gsap.timeline({delay: 0})
        tl.to(".col", {top: 0, duration: 3, ease: "power4.inOut"})
        tl.to('.c-1 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=2')
        tl.to('.c-2 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
        tl.to('.c-3 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
        tl.to('.c-4 .item', {top: 0, stagger: -0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
        tl.to('.c-5 .item', {top: 0, stagger: 0.25, duration: 3, ease: 'power4.inOut'}, '-=4')
        tl.to('.wrapper', {scale: 6, duration: 4, ease: 'power4.inOut'},'-=2')
        tl.to('.nav-item a, .title h1', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'},"-=1.5")
    },{ scope: main })
    
    return (
        <main /*className={styles.main}*/ ref={ main }>
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
            <div className="content">
                <nav>
                    <div className="nav-item">
                        <a href="" id="active">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="SP-in-70" id="active">SP in 70</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" id="active">Wish SP</a>
                    </div>
                </nav>
            </div>
            <div className="hero">
                <div className="title"><h1 className="display-3">Celebrating 70 Years of <span className="titleSP">Singapore Polytechnic</span></h1></div>
            </div>
        </main>
    );
}
