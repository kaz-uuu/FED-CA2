"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Minimap from "../components/minimap";
import { ReactLenis } from "lenis/react";

export default function SPin70() {
    const headingRef = useRef()
    const mainRef = useRef()
    
    useEffect(() => {
        const heading = headingRef.current;
        if (heading) {
            const headingHeight = heading.offsetHeight;
            document.documentElement.style.setProperty('--heading-height', `${headingHeight}px`);
        }
    }, []);

    gsap.registerPlugin(useGSAP)
    const main = useRef()
    useGSAP(() => {
        let tl = gsap.timeline({delay: 0})
        tl.to('.nav-item a, .title h1', {top: 0, stagger: 0.075, duration: 1, ease: 'power3.out'})
    },{ scope: mainRef })
    return (
            <ReactLenis root options={{ lerp: 0.5, duration: 1.5, smoothTouch: true }}>
                <main ref={ mainRef }>
                    <Minimap>
                        <div className="mini-gallery">
                            <div className="timeline">
                                <h1 className="timeline-text" ref={ headingRef }>1951</h1>
                                <p className="timeline-text">Local businessmen met at Adelphi Hotel's roof garden to discuss idea of a polytechnic</p>

                                <h1 className="timeline-text">1952</h1>
                                <p className="timeline-text">Legislative assemblyman, Mr Thio Chan Bee, submitted proposal to Governor</p>

                                <h1 className="timeline-text">1954</h1>
                                <p className="timeline-text">Dobby Committee's recommendation accepted <br /><br /> A W Gibson, Principal of the Dudley and Staffordshire Technical College in England, was invited and commissioned to work on the details on building the polytechnic. <br /><br />
                                On 27 October 1954, the Legislative Council passed the Singapore Ordinance, which led to the establishment of Singapore’s first polytechnic.</p>

                                <h1 className="timeline-text">1955</h1>
                                <p className="timeline-text">First Board of Governors appointed, chaired by Mr L Cresson</p>

                                <h1 className="timeline-text">1956</h1>
                                <p className="timeline-text">Mr D J Williams appointed first Principal</p>

                                <h1 className="timeline-text">1957</h1>
                                <p className="timeline-text">Construction of campus at Prince Edward Road began with classes conducted in borrowed premises in the meantime</p>

                                <h1 className="timeline-text">1958</h1>
                                <p className="timeline-text">Completion of Prince Edward Road campus with an enrolment of 2,800 students registered for 58 courses to prepare them for external examinations</p>

                                <h1 className="timeline-text">1959</h1>
                                <p className="timeline-text">Official opening of Singapore Polytechnic at Prince Edward Road by Prince Philip, the Duke of Edinburgh on 24 February 1959.
                                Dr Toh Chin Chye, Deputy Prime Minister, took over chairmanship of Board of Governors and oriented Singapore Polytechnic towards meeting manpower needs of Singapore's industrialisation programme
                                Mr C I C Scollay appointed Principal
                                Internal system of examinations instituted, leading to the Polytechnic's awards at professional, technician and craft levels</p>

                                <h1 className="timeline-text">1960</h1>
                                <p className="timeline-text">Chan Chieu Kiat Commission set up to review vocational and technical education in Singapore
                                The Singapore Polytechnic emblem was adopted. The Malay phrase, Berkhidmat Dengan Keahlian means To Serve With Skill. It is the Polytechnic’s educational mission.</p>

                                <h1 className="timeline-text">1961</h1>
                                <p className="timeline-text">The first Graduation Ceremony on 26 August 1961 was held at Victoria Theatre.</p>

                                <h1 className="timeline-text">1963</h1>
                                <p className="timeline-text">Craft courses transferred to Singapore Vocational Institute to make way for expansion and upgrading of professional and technician courses
                                Mr A R Edis appointed Principal</p>

                                <h1 className="timeline-text">1964</h1>
                                <p className="timeline-text">Dr C A Hart led Colombo Plan team to study development of advanced courses. University of Singapore looked into feasibility of a faculty of technology and granting university degrees to Polytechnic graduates</p>

                                <h1 className="timeline-text">1965</h1>
                                <p className="timeline-text">Professional diploma courses gradually replaced by degree courses</p>

                                <h1 className="timeline-text">1967</h1>
                                <p className="timeline-text">First batch of degree graduates produced</p>

                                <h1 className="timeline-text">1968</h1>
                                <p className="timeline-text">Decision taken to transfer degree courses to University of Singapore, giving rise to the Faculties of Architecture and Engineering.
                                Prime Minister Lee Kuan Yew visits SP's Nautical School.</p>

                                <h1 className="timeline-text">1969</h1>
                                <p className="timeline-text">Polytechnic restructured into School of Industrial Technology and School of Nautical Studies
                                Two-year Industrial Technician Certificate (ITC) programme introduced</p>

                                <h1 className="timeline-text">1970</h1>
                                <p className="timeline-text">Temporary additional campus site at Ayer Rajah Road acquired
                                Industrial and Business Orientation Programme launched by Dr Toh Chin Chye, Minister for Science and Technology</p>

                                <h1 className="timeline-text">1971</h1>
                                <p className="timeline-text">Nautical Studies, Civil Engineering and Building students housed in Princess Mary Barracks
                                Present campus site at Dover Road chosen as permanent home of the Polytechnic
                                By the end of 1971, Princess Mary Barracks at Dover Road was converted into Princess Mary Campus - SP’s second campus.</p>

                                <h1 className="timeline-text">1972</h1>
                                <p className="timeline-text">Ayer Rajah Road campus completed. Polytechnic began functioning on three campuses</p>

                                <h1 className="timeline-text">1973</h1>
                                <p className="timeline-text">New Boat and Radar Station at Pasir Panjang completed
                                Mr V P W Ager appointed Principal</p>

                                <h1 className="timeline-text">1974</h1>
                                <p className="timeline-text">Construction of Dover Road campus began</p>

                                <h1 className="timeline-text">1975</h1>
                                <p className="timeline-text">Foundation stone for new campus laid by Dr Toh Chin Chye on 12 April
                                Mr Low Guan Onn appointed Chairman of the Board of Governors
                                ITC courses transferred to Industrial Training Board</p>

                                <h1 className="timeline-text">1976</h1>
                                <p className="timeline-text">Polytechnic restructured into nine academic departments and divisions</p>

                                <h1 className="timeline-text">1978</h1>
                                <p className="timeline-text">Dover Road campus completed
                                Mr Khoo Kay Chai confirmed first local Principal after two years in acting capacity.</p>

                                <h1 className="timeline-text">1979</h1>
                                <p className="timeline-text">Dover Road campus officially opened by Prime Minister Lee Kuan Yew on 7 July. The ceremony was held at the Quadrangle between the Admin Building and the Library.</p>

                                <h1 className="timeline-text">1980</h1>
                                <p className="timeline-text">Singapore Polytechnic (Amendment) Act passed in Parliament on 26 February, reconstituting the Board of Governors and reorganising student bodies
                                Mr Chua Chor Teck appointed Chairman of the Board of Governors</p>

                                <h1 className="timeline-text">1982</h1>
                                <p className="timeline-text">Five-year Expansion Plan (1982-86) approved, detailing new targets for student enrolment and staffing, as well as new courses
                                Industrial and Business Orientation Programme for students replaced by Vacation Training Programme with support from Skills Development Fund</p>

                                <h1 className="timeline-text">1984</h1>
                                <p className="timeline-text">All full-time Technician Diploma courses restructured and revised to cater for high technology needs</p>

                                <h1 className="timeline-text">1986</h1>
                                <p className="timeline-text">Prof George Fong Wah took over as Chairman of the Board of Governors
                                Completion of Second Phase campus development programme which took five years
                                Visit by His Excellency, Mr Wee Kim Wee, President of the Republic of Singapore</p>

                                <h1 className="timeline-text">1987</h1>
                                <p className="timeline-text">Japan-Singapore Institute of Software Technology (JSIST) transferred to Singapore Polytechnic</p>

                                <h1 className="timeline-text">1988</h1>
                                <p className="timeline-text">Graduates' Guild's clubhouse officially opened by Senior Minister of State for Education Dr Tay Eng Soon</p>

                                <h1 className="timeline-text">1990</h1>
                                <p className="timeline-text">New $3.3 million Sports Complex completed
                                50,000th graduate received his diploma at the 30th Graduation Ceremony
                                In line with government's effort to assist local companies, the Polytechnic took on second mission of providing expertise and resources to these enterprises
                                Move made towards Swiss- German model of technical education</p>

                                <h1 className="timeline-text">1991</h1>
                                <p className="timeline-text">Three term academic calendar changed to one with four terms
                                Dual Training Scheme for workers to study part-time at the Polytechnic and receive on-the-job training at their companies introduced
                                Foreign language programme offered for the first time
                                Vacation Training Programme replaced by a longer and more structured Industrial Training Programme
                                SP became the first poly to offer a professional Diploma in Accountancy</p>

                                <h1 className="timeline-text">1992</h1>
                                <p className="timeline-text">Deputy Prime Minister Lee Hsien Loong officially opened the Third Phase campus development project
                                Modular system adopted for courses offered by the Polytechnic and at the same time, the credit accumulation and credit transfer systems were also introduced</p>

                                <h1 className="timeline-text">1993</h1>
                                <p className="timeline-text">Launch of Singapore Polytechnic Entrepreneurs' Club for graduates who had become successful entrepreneurs</p>

                                <h1 className="timeline-text">1994</h1>
                                <p className="timeline-text">SP became the first poly to introduce the Diploma in Optometry.
                                Official opening of Fourth Phase campus development project by Minister for Education Lee Yock Suan.</p>

                                <h1 className="timeline-text">1995</h1>
                                <p className="timeline-text">Mr Lim Yong Wah appointed Chairman of the Board of Governors
                                Principal Khoo Kay Chai retired after 19 years at the helm
                                SP was the first poly to sign a Memorandum of Understanding with Pokka Corporation (Singapore) to market the ‘Lemonsi Delight’ drink that was formulated by 20 students and 5 lecturers from the Chemical Process & Biotechnology Department.
                                In September 1996, Pokka Corporation launched full-scale production and marketing of "Lemonsi Delight’, which is still available in major supermarkets today (2014).</p>

                                <h1 className="timeline-text">1996</h1>
                                <p className="timeline-text">Mr Low Wong Fook took over as new Principal</p>

                                <h1 className="timeline-text">1997</h1>
                                <p className="timeline-text">Virtual College launched, offering online courses including part-time programmes and various modules</p>

                                <h1 className="timeline-text">1998</h1>
                                <p className="timeline-text">Clementi Student Service Centre, a joint project with the Tanjong Pagar Community Development Council and Clementi Citizen's Consultative Committee, opened its doors as part of the institution's effort to reach out to the community</p>

                                <h1 className="timeline-text">1999</h1>
                                <p className="timeline-text">In recognition of its attainment of a commendable level of performance in its journey to excellence, the institution was made member of Singapore Quality Class
                                Singapore Polytechnic received People Developer Standard Award which recognises organisations that invested in its people and had a comprehensive system for developing employees
                                For its many initiatives to protect and preserve the environment, the Polytechnic was picked for Green Leaf Award (Organisations Category)</p>

                                <h1 className="timeline-text">2000</h1>
                                <p className="timeline-text">Singapore Maritime Academy was formed with the merger of the Polytechnic's Department of Maritime Technology & Transportation and the Maritime & Port Authority of Singapore's National Maritime Academy
                                100,000th graduate received his diploma at the 40th Graduation Ceremony
                                Electronics & Communication Engineering Department merged with Electrical Engineering Department to form the Electrical & Electronic Engineering Department
                                Mr Tan Kay Yong (left) appointed Chairman of Board of Governors
                                Principal lecturer, Mr Loh Peng Chum invented the world’s first purple gold after 23 years of research. Purple gold is traditionally known to be porous and brittle, but Mr Loh made it malleable enough to be fashioned into rings and pendants. Not only has his formula been patented, an agreement has also been reached with Aspial to market the product globally.</p>

                                <h1 className="timeline-text">2001</h1>
                                <p className="timeline-text">Deputy Prime Minister and Minister for Defence Dr Tony Tan (extreme left) officially opened the Singapore Polytechnic Graduates' Guild's new clubhouse
                                The Polytechnic satisfied requirements for ISO 9000 and ISO 14000 certifications
                                Academic departments renamed as schools to better reflect their central role in offering programmes to prepare students for work and life
                                Industrial Training Programme commemorated its 30th anniversary</p>

                                <h1 className="timeline-text">2002</h1>
                                <p className="timeline-text">The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic
                                Ms Teng Li Yeng, graduate in Diploma in Banking and Financial Services, was the first poly graduate to be awarded the Public Service Commission Overseas Merit scholarship.</p>

                                <h1 className="timeline-text">2003</h1>
                                <p className="timeline-text">New Convention Centre and Plaza project completed
                                Re-branding of the Polytechnic initiated with a new Education Model of the Future, and with programmes to unleash creativity, innovation and enterprise, to create a unique SP experience for students and to make SP a great place to work
                                Principal lecturer, Mr Loh Peng Chum created the world’s first titanium-gold and five-coloured multi-layered gold
                                SP is the first and only poly to introduce the Diploma in Architecture. The Diploma has its roots back in the 1950s when it started out as a Part-time Technician Diploma in Architectural Draughtsmanship.
                                Opening of fifth-phase campus expansion by Minister for Education RADM Teo Chee Hean.</p>

                                <h1 className="timeline-text">2004</h1>
                                <p className="timeline-text">General Elective, Creative Reasoning Skills and Innovation, Design and Enterprise in Action modules introduced
                                Singapore Polytechnic turned 50. His Excellency, Mr S R Nathan, President of the Republic of Singapore (second from right), launched the yearlong celebrations on 13 February at the official opening of the new Convention Centre and Plaza
                                Grand Climax to the 50th Anniversary Celebrations - Prime Minister Lee Hsien Loong joined staff, alumni and overseas partners to celebrate the 50th anniversary at a gala dinner.
                                SP became the first poly to produce a perfume – Romancing Singapore with all 3000 bottles selling out within 9 days in local departmental stores</p>

                                <h1 className="timeline-text">2005</h1>
                                <p className="timeline-text">Singapore Polytechnic (SP) buried a time capsule to signify the close of the year long celebrations and the opening of a new chapter in the SP story. The event took a retrospective look at SP's achievements and thanked staff for their support in making the anniversary celebrations a success. The finale saw the unveiling of SP's 50th Anniversary Commemorative Book which highlights amongst others, the contribution of Singapore's pioneer polytechnic to the development of the nation and how its success spawned the establishment of other polytechnics here
                                The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic</p>

                                <h1 className="timeline-text">2006</h1>
                                <p className="timeline-text">Singapore Polytechnic awarded the Best Environmental Report for 2005 by the Association of Chartered Certified Accountants
                                As part of its efforts to give back to the community, the SP Optometry Centre was set at West Coast Community Centre to provide public with affordable eye care. The centre also offers Optometry students an authentic learning environment under their lecturers’ supervision.
                                A full-length musical “Superstar” written and produced by SP staff and starring SP students and graduates was produced to raise funds for President’s Challenge.</p>

                                <h1 className="timeline-text">2007</h1>
                                <p className="timeline-text">The SP Scholarship Programme was launched in March 2007 with first batch of 40 SP Scholars receiving their scholarships.
                                Food Innovation and Resource Centre, a one-stop consultancy centre to assist Small and Medium-sized Enterprises (SMEs), is officially opened by Minister of State for Trade and Industry, Mr Lee Yi Shyan.
                                Singapore Maritime Academy celebrates 50 years as a leading provider of maritime education and training.
                                SP Design School was launched on 29 January.</p>

                                <h1 className="timeline-text">2008</h1>
                                <p className="timeline-text">Mr Tan Hang Cheong took over as the new Principal at the start of 2008.
                                Singapore Polytechnic opens new School of Communication, Arts and Social Sciences (CASS) on 1 February 2008.
                                A remnant of Singapore’s colonial past – Moberly Block was a British army barrack before it was converted to form part of the Dover Road campus. The block was refurbished and transformed into a new hub for student activities. It was officially opened by HE Paul Madden, the British High Commissioner to Singapore, on 9 May 2008.</p>

                                <h1 className="timeline-text">2009</h1>
                                <p className="timeline-text">Singapore Polytechnic (SP) and Epic Games China launched Unreal Technology Lab, the first Games Resource Centre in Southeast Asia.
                                Chua Koon Ting became the first polytechnic student to read Dentistry at the National University of Singapore.
                                Kuriakin made history by becoming the first student to score distinctions for all his subjects.</p>

                                <h1 className="timeline-text">2010</h1>
                                <p className="timeline-text">The Professional and Adult Continuing Education (PACE) Academy was officially launched on 20 April by Mr Lee Yi Shyan, Minister of State for Manpower, Trade and Industry.
                                Kenneth Chen Yi Xin became SP’s 150,000th graduate and received his Diploma at the 50th Graduation Ceremony. He was also presented with a special memento by Mr Lim Chin Aik, the first registered student of SP.
                                Desmond Thiam became the first SP graduate to be admitted into the Yong Loo Lin School of Medicine at the National University of Singapore.
                                Alex Chua Koon Ting, who graduated with Diploma in Biomedical Science in 2007, made history by becoming the first poly student to be accepted by National University of Singapore to read Dentistry.
                                SP receives the Public Service Milestone Award. Formerly it was known as the Public Service Award for Organisational Excellence.
                                SP won the President’s Award for the Environment – the highest accolade to recognise organisations and companies for their green efforts.
                                SP organised RoboCup 2010, a world-class event dubbed the Olympics of the Robotics world. It was the first time the event was held in Singapore.</p>

                                <h1 className="timeline-text">2011</h1>
                                <p className="timeline-text">Singapore Polytechnic received the President’s Social Service Award 2011 for the voluntary contributions made to the social service sector.
                                Singapore Polytechnic launched SPELL, an off-campus retail store at Changi Airport’s Terminal 3 run by SP Business School students.
                                Food Innovation Resource Centre was set up to cater to the needs of local food enterprises.</p>

                                <h1 className="timeline-text">2012</h1>
                                <p className="timeline-text">A new Board of Board Governors was appointed. Outgoing chairman Mr Tan Kay Yong, who dedicated 12 years of distinguished service, was replaced by Mr Bill Chang. Six new members also came on board.
                                SP Principal Mr Tan Hang Cheong received the National Environment Agency's EcoFriend Awards 2012 in recognition of his leadership in inspiring the campus to support the green cause.</p>

                                <h1 className="timeline-text">2013</h1>
                                <p className="timeline-text">Mr Tan Choon Shian took over as the new Principal at the start of 2013.
                                SP was awarded the Public Service Milestone Award at this year’s Excellence in Public Service Awards.</p>

                                <h1 className="timeline-text">2014</h1>
                                <p className="timeline-text">SP celebrates its 60th anniversary.
                                SP’s new vision – A caring community of inspired learners committed to serve with mastery was announced.
                                Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science, the first such course in Asia.</p>
                                
                                <h1 className="timeline-text">2014</h1>
                                <p className="timeline-text">SP celebrates its 60th anniversary. <br /><br />
                                SP’s new vision – A caring community of inspired learners committed to serve with mastery was announced.<br /><br />
                                Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science.<br /><br />A new five-storey Design School building was unveiled.
                                </p>

                                <h1 className="timeline-text">2015</h1>
                                <p className="timeline-text">SP reaches a key milestone with graduation of close to 5,900 students. </p>

                                <h1 className="timeline-text">2016</h1>
                                <p className="timeline-text">Mr Soh Wai Wah took over as the new Principal and CEO in October 2016.</p>

                                <h1 className="timeline-text">2018</h1>
                                <p className="timeline-text">SP achieved our 200,000th graduate milestone!</p>

                                <h1 className="timeline-text">2020</h1>
                                <p className="timeline-text">                    Ms Janet Ang appointed as the new chairman on 16 September 2020.
                                </p>

                                <h1 className="timeline-text">2023</h1>
                                <p className="timeline-text">SP launched first decarbonization playbook, paving the way for Institute of Higher Learning.<br /><br />Launch of the SP’s 70th anniversary commemorative book “For All Ages, Singapore Polytechnic At Seventy” at the third Polytechnic-ITE (POLITE) Staff Appreciation Day on 31 October 2023, where Minister of Education Mr Chan Chun Sing officiated and marked the commencement of SP’s 70th anniversary celebrations.</p>
                                <h1 className="timeline-text">2024</h1>
                                <p className="timeline-text">SP celebrates its 70th anniversary!
                                </p>
                            </div>
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
                        <div className="content">
                            <div className="timeline">
                                <h1 className="timeline-text" ref={ headingRef }>1951</h1>
                                <p className="timeline-text">Local businessmen met at Adelphi Hotel's roof garden to discuss idea of a polytechnic</p>

                                <h1 className="timeline-text">1952</h1>
                                <p className="timeline-text">Legislative assemblyman, Mr Thio Chan Bee, submitted proposal to Governor</p>

                                <h1 className="timeline-text">1954</h1>
                                <p className="timeline-text">Dobby Committee's recommendation accepted <br /><br /> A W Gibson, Principal of the Dudley and Staffordshire Technical College in England, was invited and commissioned to work on the details on building the polytechnic. <br /><br />
                                On 27 October 1954, the Legislative Council passed the Singapore Ordinance, which led to the establishment of Singapore’s first polytechnic.</p>

                                <h1 className="timeline-text">1955</h1>
                                <p className="timeline-text">First Board of Governors appointed, chaired by Mr L Cresson</p>

                                <h1 className="timeline-text">1956</h1>
                                <p className="timeline-text">Mr D J Williams appointed first Principal</p>

                                <h1 className="timeline-text">1957</h1>
                                <p className="timeline-text">Construction of campus at Prince Edward Road began with classes conducted in borrowed premises in the meantime</p>

                                <h1 className="timeline-text">1958</h1>
                                <p className="timeline-text">Completion of Prince Edward Road campus with an enrolment of 2,800 students registered for 58 courses to prepare them for external examinations</p>

                                <h1 className="timeline-text">1959</h1>
                                <p className="timeline-text">Official opening of Singapore Polytechnic at Prince Edward Road by Prince Philip, the Duke of Edinburgh on 24 February 1959.
                                Dr Toh Chin Chye, Deputy Prime Minister, took over chairmanship of Board of Governors and oriented Singapore Polytechnic towards meeting manpower needs of Singapore's industrialisation programme
                                Mr C I C Scollay appointed Principal
                                Internal system of examinations instituted, leading to the Polytechnic's awards at professional, technician and craft levels</p>

                                <h1 className="timeline-text">1960</h1>
                                <p className="timeline-text">Chan Chieu Kiat Commission set up to review vocational and technical education in Singapore
                                The Singapore Polytechnic emblem was adopted. The Malay phrase, Berkhidmat Dengan Keahlian means To Serve With Skill. It is the Polytechnic’s educational mission.</p>

                                <h1 className="timeline-text">1961</h1>
                                <p className="timeline-text">The first Graduation Ceremony on 26 August 1961 was held at Victoria Theatre.</p>

                                <h1 className="timeline-text">1963</h1>
                                <p className="timeline-text">Craft courses transferred to Singapore Vocational Institute to make way for expansion and upgrading of professional and technician courses
                                Mr A R Edis appointed Principal</p>

                                <h1 className="timeline-text">1964</h1>
                                <p className="timeline-text">Dr C A Hart led Colombo Plan team to study development of advanced courses. University of Singapore looked into feasibility of a faculty of technology and granting university degrees to Polytechnic graduates</p>

                                <h1 className="timeline-text">1965</h1>
                                <p className="timeline-text">Professional diploma courses gradually replaced by degree courses</p>

                                <h1 className="timeline-text">1967</h1>
                                <p className="timeline-text">First batch of degree graduates produced</p>

                                <h1 className="timeline-text">1968</h1>
                                <p className="timeline-text">Decision taken to transfer degree courses to University of Singapore, giving rise to the Faculties of Architecture and Engineering.
                                Prime Minister Lee Kuan Yew visits SP's Nautical School.</p>

                                <h1 className="timeline-text">1969</h1>
                                <p className="timeline-text">Polytechnic restructured into School of Industrial Technology and School of Nautical Studies
                                Two-year Industrial Technician Certificate (ITC) programme introduced</p>

                                <h1 className="timeline-text">1970</h1>
                                <p className="timeline-text">Temporary additional campus site at Ayer Rajah Road acquired
                                Industrial and Business Orientation Programme launched by Dr Toh Chin Chye, Minister for Science and Technology</p>

                                <h1 className="timeline-text">1971</h1>
                                <p className="timeline-text">Nautical Studies, Civil Engineering and Building students housed in Princess Mary Barracks
                                Present campus site at Dover Road chosen as permanent home of the Polytechnic
                                By the end of 1971, Princess Mary Barracks at Dover Road was converted into Princess Mary Campus - SP’s second campus.</p>

                                <h1 className="timeline-text">1972</h1>
                                <p className="timeline-text">Ayer Rajah Road campus completed. Polytechnic began functioning on three campuses</p>

                                <h1 className="timeline-text">1973</h1>
                                <p className="timeline-text">New Boat and Radar Station at Pasir Panjang completed
                                Mr V P W Ager appointed Principal</p>

                                <h1 className="timeline-text">1974</h1>
                                <p className="timeline-text">Construction of Dover Road campus began</p>

                                <h1 className="timeline-text">1975</h1>
                                <p className="timeline-text">Foundation stone for new campus laid by Dr Toh Chin Chye on 12 April
                                Mr Low Guan Onn appointed Chairman of the Board of Governors
                                ITC courses transferred to Industrial Training Board</p>

                                <h1 className="timeline-text">1976</h1>
                                <p className="timeline-text">Polytechnic restructured into nine academic departments and divisions</p>

                                <h1 className="timeline-text">1978</h1>
                                <p className="timeline-text">Dover Road campus completed
                                Mr Khoo Kay Chai confirmed first local Principal after two years in acting capacity.</p>

                                <h1 className="timeline-text">1979</h1>
                                <p className="timeline-text">Dover Road campus officially opened by Prime Minister Lee Kuan Yew on 7 July. The ceremony was held at the Quadrangle between the Admin Building and the Library.</p>

                                <h1 className="timeline-text">1980</h1>
                                <p className="timeline-text">Singapore Polytechnic (Amendment) Act passed in Parliament on 26 February, reconstituting the Board of Governors and reorganising student bodies
                                Mr Chua Chor Teck appointed Chairman of the Board of Governors</p>

                                <h1 className="timeline-text">1982</h1>
                                <p className="timeline-text">Five-year Expansion Plan (1982-86) approved, detailing new targets for student enrolment and staffing, as well as new courses
                                Industrial and Business Orientation Programme for students replaced by Vacation Training Programme with support from Skills Development Fund</p>

                                <h1 className="timeline-text">1984</h1>
                                <p className="timeline-text">All full-time Technician Diploma courses restructured and revised to cater for high technology needs</p>

                                <h1 className="timeline-text">1986</h1>
                                <p className="timeline-text">Prof George Fong Wah took over as Chairman of the Board of Governors
                                Completion of Second Phase campus development programme which took five years
                                Visit by His Excellency, Mr Wee Kim Wee, President of the Republic of Singapore</p>

                                <h1 className="timeline-text">1987</h1>
                                <p className="timeline-text">Japan-Singapore Institute of Software Technology (JSIST) transferred to Singapore Polytechnic</p>

                                <h1 className="timeline-text">1988</h1>
                                <p className="timeline-text">Graduates' Guild's clubhouse officially opened by Senior Minister of State for Education Dr Tay Eng Soon</p>

                                <h1 className="timeline-text">1990</h1>
                                <p className="timeline-text">New $3.3 million Sports Complex completed
                                50,000th graduate received his diploma at the 30th Graduation Ceremony
                                In line with government's effort to assist local companies, the Polytechnic took on second mission of providing expertise and resources to these enterprises
                                Move made towards Swiss- German model of technical education</p>

                                <h1 className="timeline-text">1991</h1>
                                <p className="timeline-text">Three term academic calendar changed to one with four terms
                                Dual Training Scheme for workers to study part-time at the Polytechnic and receive on-the-job training at their companies introduced
                                Foreign language programme offered for the first time
                                Vacation Training Programme replaced by a longer and more structured Industrial Training Programme
                                SP became the first poly to offer a professional Diploma in Accountancy</p>

                                <h1 className="timeline-text">1992</h1>
                                <p className="timeline-text">Deputy Prime Minister Lee Hsien Loong officially opened the Third Phase campus development project
                                Modular system adopted for courses offered by the Polytechnic and at the same time, the credit accumulation and credit transfer systems were also introduced</p>

                                <h1 className="timeline-text">1993</h1>
                                <p className="timeline-text">Launch of Singapore Polytechnic Entrepreneurs' Club for graduates who had become successful entrepreneurs</p>

                                <h1 className="timeline-text">1994</h1>
                                <p className="timeline-text">SP became the first poly to introduce the Diploma in Optometry.
                                Official opening of Fourth Phase campus development project by Minister for Education Lee Yock Suan.</p>

                                <h1 className="timeline-text">1995</h1>
                                <p className="timeline-text">Mr Lim Yong Wah appointed Chairman of the Board of Governors
                                Principal Khoo Kay Chai retired after 19 years at the helm
                                SP was the first poly to sign a Memorandum of Understanding with Pokka Corporation (Singapore) to market the ‘Lemonsi Delight’ drink that was formulated by 20 students and 5 lecturers from the Chemical Process & Biotechnology Department.
                                In September 1996, Pokka Corporation launched full-scale production and marketing of "Lemonsi Delight’, which is still available in major supermarkets today (2014).</p>

                                <h1 className="timeline-text">1996</h1>
                                <p className="timeline-text">Mr Low Wong Fook took over as new Principal</p>

                                <h1 className="timeline-text">1997</h1>
                                <p className="timeline-text">Virtual College launched, offering online courses including part-time programmes and various modules</p>

                                <h1 className="timeline-text">1998</h1>
                                <p className="timeline-text">Clementi Student Service Centre, a joint project with the Tanjong Pagar Community Development Council and Clementi Citizen's Consultative Committee, opened its doors as part of the institution's effort to reach out to the community</p>

                                <h1 className="timeline-text">1999</h1>
                                <p className="timeline-text">In recognition of its attainment of a commendable level of performance in its journey to excellence, the institution was made member of Singapore Quality Class
                                Singapore Polytechnic received People Developer Standard Award which recognises organisations that invested in its people and had a comprehensive system for developing employees
                                For its many initiatives to protect and preserve the environment, the Polytechnic was picked for Green Leaf Award (Organisations Category)</p>

                                <h1 className="timeline-text">2000</h1>
                                <p className="timeline-text">Singapore Maritime Academy was formed with the merger of the Polytechnic's Department of Maritime Technology & Transportation and the Maritime & Port Authority of Singapore's National Maritime Academy
                                100,000th graduate received his diploma at the 40th Graduation Ceremony
                                Electronics & Communication Engineering Department merged with Electrical Engineering Department to form the Electrical & Electronic Engineering Department
                                Mr Tan Kay Yong (left) appointed Chairman of Board of Governors
                                Principal lecturer, Mr Loh Peng Chum invented the world’s first purple gold after 23 years of research. Purple gold is traditionally known to be porous and brittle, but Mr Loh made it malleable enough to be fashioned into rings and pendants. Not only has his formula been patented, an agreement has also been reached with Aspial to market the product globally.</p>

                                <h1 className="timeline-text">2001</h1>
                                <p className="timeline-text">Deputy Prime Minister and Minister for Defence Dr Tony Tan (extreme left) officially opened the Singapore Polytechnic Graduates' Guild's new clubhouse
                                The Polytechnic satisfied requirements for ISO 9000 and ISO 14000 certifications
                                Academic departments renamed as schools to better reflect their central role in offering programmes to prepare students for work and life
                                Industrial Training Programme commemorated its 30th anniversary</p>

                                <h1 className="timeline-text">2002</h1>
                                <p className="timeline-text">The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic
                                Ms Teng Li Yeng, graduate in Diploma in Banking and Financial Services, was the first poly graduate to be awarded the Public Service Commission Overseas Merit scholarship.</p>

                                <h1 className="timeline-text">2003</h1>
                                <p className="timeline-text">New Convention Centre and Plaza project completed
                                Re-branding of the Polytechnic initiated with a new Education Model of the Future, and with programmes to unleash creativity, innovation and enterprise, to create a unique SP experience for students and to make SP a great place to work
                                Principal lecturer, Mr Loh Peng Chum created the world’s first titanium-gold and five-coloured multi-layered gold
                                SP is the first and only poly to introduce the Diploma in Architecture. The Diploma has its roots back in the 1950s when it started out as a Part-time Technician Diploma in Architectural Draughtsmanship.
                                Opening of fifth-phase campus expansion by Minister for Education RADM Teo Chee Hean.</p>

                                <h1 className="timeline-text">2004</h1>
                                <p className="timeline-text">General Elective, Creative Reasoning Skills and Innovation, Design and Enterprise in Action modules introduced
                                Singapore Polytechnic turned 50. His Excellency, Mr S R Nathan, President of the Republic of Singapore (second from right), launched the yearlong celebrations on 13 February at the official opening of the new Convention Centre and Plaza
                                Grand Climax to the 50th Anniversary Celebrations - Prime Minister Lee Hsien Loong joined staff, alumni and overseas partners to celebrate the 50th anniversary at a gala dinner.
                                SP became the first poly to produce a perfume – Romancing Singapore with all 3000 bottles selling out within 9 days in local departmental stores</p>

                                <h1 className="timeline-text">2005</h1>
                                <p className="timeline-text">Singapore Polytechnic (SP) buried a time capsule to signify the close of the year long celebrations and the opening of a new chapter in the SP story. The event took a retrospective look at SP's achievements and thanked staff for their support in making the anniversary celebrations a success. The finale saw the unveiling of SP's 50th Anniversary Commemorative Book which highlights amongst others, the contribution of Singapore's pioneer polytechnic to the development of the nation and how its success spawned the establishment of other polytechnics here
                                The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic</p>

                                <h1 className="timeline-text">2006</h1>
                                <p className="timeline-text">Singapore Polytechnic awarded the Best Environmental Report for 2005 by the Association of Chartered Certified Accountants
                                As part of its efforts to give back to the community, the SP Optometry Centre was set at West Coast Community Centre to provide public with affordable eye care. The centre also offers Optometry students an authentic learning environment under their lecturers’ supervision.
                                A full-length musical “Superstar” written and produced by SP staff and starring SP students and graduates was produced to raise funds for President’s Challenge.</p>

                                <h1 className="timeline-text">2007</h1>
                                <p className="timeline-text">The SP Scholarship Programme was launched in March 2007 with first batch of 40 SP Scholars receiving their scholarships.
                                Food Innovation and Resource Centre, a one-stop consultancy centre to assist Small and Medium-sized Enterprises (SMEs), is officially opened by Minister of State for Trade and Industry, Mr Lee Yi Shyan.
                                Singapore Maritime Academy celebrates 50 years as a leading provider of maritime education and training.
                                SP Design School was launched on 29 January.</p>

                                <h1 className="timeline-text">2008</h1>
                                <p className="timeline-text">Mr Tan Hang Cheong took over as the new Principal at the start of 2008.
                                Singapore Polytechnic opens new School of Communication, Arts and Social Sciences (CASS) on 1 February 2008.
                                A remnant of Singapore’s colonial past – Moberly Block was a British army barrack before it was converted to form part of the Dover Road campus. The block was refurbished and transformed into a new hub for student activities. It was officially opened by HE Paul Madden, the British High Commissioner to Singapore, on 9 May 2008.</p>

                                <h1 className="timeline-text">2009</h1>
                                <p className="timeline-text">Singapore Polytechnic (SP) and Epic Games China launched Unreal Technology Lab, the first Games Resource Centre in Southeast Asia.
                                Chua Koon Ting became the first polytechnic student to read Dentistry at the National University of Singapore.
                                Kuriakin made history by becoming the first student to score distinctions for all his subjects.</p>

                                <h1 className="timeline-text">2010</h1>
                                <p className="timeline-text">The Professional and Adult Continuing Education (PACE) Academy was officially launched on 20 April by Mr Lee Yi Shyan, Minister of State for Manpower, Trade and Industry.
                                Kenneth Chen Yi Xin became SP’s 150,000th graduate and received his Diploma at the 50th Graduation Ceremony. He was also presented with a special memento by Mr Lim Chin Aik, the first registered student of SP.
                                Desmond Thiam became the first SP graduate to be admitted into the Yong Loo Lin School of Medicine at the National University of Singapore.
                                Alex Chua Koon Ting, who graduated with Diploma in Biomedical Science in 2007, made history by becoming the first poly student to be accepted by National University of Singapore to read Dentistry.
                                SP receives the Public Service Milestone Award. Formerly it was known as the Public Service Award for Organisational Excellence.
                                SP won the President’s Award for the Environment – the highest accolade to recognise organisations and companies for their green efforts.
                                SP organised RoboCup 2010, a world-class event dubbed the Olympics of the Robotics world. It was the first time the event was held in Singapore.</p>

                                <h1 className="timeline-text">2011</h1>
                                <p className="timeline-text">Singapore Polytechnic received the President’s Social Service Award 2011 for the voluntary contributions made to the social service sector.
                                Singapore Polytechnic launched SPELL, an off-campus retail store at Changi Airport’s Terminal 3 run by SP Business School students.
                                Food Innovation Resource Centre was set up to cater to the needs of local food enterprises.</p>

                                <h1 className="timeline-text">2012</h1>
                                <p className="timeline-text">A new Board of Board Governors was appointed. Outgoing chairman Mr Tan Kay Yong, who dedicated 12 years of distinguished service, was replaced by Mr Bill Chang. Six new members also came on board.
                                SP Principal Mr Tan Hang Cheong received the National Environment Agency's EcoFriend Awards 2012 in recognition of his leadership in inspiring the campus to support the green cause.</p>

                                <h1 className="timeline-text">2013</h1>
                                <p className="timeline-text">Mr Tan Choon Shian took over as the new Principal at the start of 2013.
                                SP was awarded the Public Service Milestone Award at this year’s Excellence in Public Service Awards.</p>

                                <h1 className="timeline-text">2014</h1>
                                <p className="timeline-text">SP celebrates its 60th anniversary.
                                SP’s new vision – A caring community of inspired learners committed to serve with mastery was announced.
                                Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science, the first such course in Asia.</p>
                                
                                <h1 className="timeline-text">2014</h1>
                                <p className="timeline-text">SP celebrates its 60th anniversary. <br /><br />
                                SP’s new vision – A caring community of inspired learners committed to serve with mastery was announced.<br /><br />
                                Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science.<br /><br />A new five-storey Design School building was unveiled.
                                </p>

                                <h1 className="timeline-text">2015</h1>
                                <p className="timeline-text">SP reaches a key milestone with graduation of close to 5,900 students. </p>

                                <h1 className="timeline-text">2016</h1>
                                <p className="timeline-text">Mr Soh Wai Wah took over as the new Principal and CEO in October 2016.</p>

                                <h1 className="timeline-text">2018</h1>
                                <p className="timeline-text">SP achieved our 200,000th graduate milestone!</p>

                                <h1 className="timeline-text">2020</h1>
                                <p className="timeline-text">                    Ms Janet Ang appointed as the new chairman on 16 September 2020.
                                </p>

                                <h1 className="timeline-text">2023</h1>
                                <p className="timeline-text">SP launched first decarbonization playbook, paving the way for Institute of Higher Learning.<br /><br />Launch of the SP’s 70th anniversary commemorative book “For All Ages, Singapore Polytechnic At Seventy” at the third Polytechnic-ITE (POLITE) Staff Appreciation Day on 31 October 2023, where Minister of Education Mr Chan Chun Sing officiated and marked the commencement of SP’s 70th anniversary celebrations.</p>
                                <h1 className="timeline-text">2024</h1>
                                <p className="timeline-text">SP celebrates its 70th anniversary!
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </ReactLenis>
    );
}
