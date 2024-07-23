import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import Image from 'next/image';
import img19541 from '../../public/images/timeline images/1954-1.jpg';
import img19551 from '../../public/images/timeline images/1955-1.jpg';
import img19561 from '../../public/images/timeline images/1956-1.jpg';
import img19581 from '../../public/images/timeline images/1958-1.jpg';
import img19591 from '../../public/images/timeline images/1959-1.jpg';
import img19593 from '../../public/images/timeline images/1959-3.jpg';
import img19594 from '../../public/images/timeline images/1959-4.jpg';
import img19601 from '../../public/images/timeline images/1960-1.jpg';
import img19611 from '../../public/images/timeline images/1961-1.jpg';
import img19631 from '../../public/images/timeline images/1963-1.jpg';
import img19632 from '../../public/images/timeline images/1963-2.jpg';
import img19691 from '../../public/images/timeline images/1969-1.jpg';
import img19692 from '../../public/images/timeline images/1969-2.jpg';
import img19711 from '../../public/images/timeline images/1971-1.jpg';
import img19712 from '../../public/images/timeline images/1971-2.jpg';
import img19721 from '../../public/images/timeline images/1972-1.jpg';
import img19731 from '../../public/images/timeline images/1973-1.jpg';
import img19732 from '../../public/images/timeline images/1973-2.jpg';
import img19741 from '../../public/images/timeline images/1974-1.jpg';
import img19751 from '../../public/images/timeline images/1975-1.jpg';
import img19781 from '../../public/images/timeline images/1978-1.jpg';
import img19782 from '../../public/images/timeline images/1978-2.jpg';
import img19791 from '../../public/images/timeline images/1979-1.jpg';
import img19801 from '../../public/images/timeline images/1980-1.jpg';
import img19821 from '../../public/images/timeline images/1982-1.jpg';
import img19861 from '../../public/images/timeline images/1986-1.jpg';
import img19862 from '../../public/images/timeline images/1986-2.jpg';
import img19863 from '../../public/images/timeline images/1986-3.jpg';
import img19881 from '../../public/images/timeline images/1988-1.jpg';
import img19901 from '../../public/images/timeline images/1990-1.jpg';
import img19902 from '../../public/images/timeline images/1990-2.jpg';
import img19903 from '../../public/images/timeline images/1990-3.jpg';
import img19911 from '../../public/images/timeline images/1991-1.jpg';
import img19912 from '../../public/images/timeline images/1991-2.jpg';
import img19921 from '../../public/images/timeline images/1992-1.jpg';
import img19931 from '../../public/images/timeline images/1993-1.jpg';
import img19941 from '../../public/images/timeline images/1994-1.jpg';
import img19951 from '../../public/images/timeline images/1995-1.jpg';
import img19971 from '../../public/images/timeline images/1997-1.jpg';
import img19981 from '../../public/images/timeline images/1998-1.jpg';
import img19991 from '../../public/images/timeline images/1999-1.jpg';
import img19992 from '../../public/images/timeline images/1999-2.jpg';
import img19993 from '../../public/images/timeline images/1999-3.jpg';
import img20001 from '../../public/images/timeline images/2000-1.jpg';
import img20002 from '../../public/images/timeline images/2000-2.jpg';
import img20003 from '../../public/images/timeline images/2000-3.jpg';
import img20004 from '../../public/images/timeline images/2000-4.jpg';
import img20011 from '../../public/images/timeline images/2001-1.jpg';
import img20021 from '../../public/images/timeline images/2002-1.jpg';
import img20031 from '../../public/images/timeline images/2003-1.jpg';
import img20032 from '../../public/images/timeline images/2003-2.jpg';
import img20035 from '../../public/images/timeline images/2003-5.jpg';
import img20042 from '../../public/images/timeline images/2004-2.jpg';
import img20043 from '../../public/images/timeline images/2004-3.jpg';
import img20051 from '../../public/images/timeline images/2005-1.jpg';
import img20061 from '../../public/images/timeline images/2006-1.jpg';
import img20071 from '../../public/images/timeline images/2007-1.jpg';
import img20072 from '../../public/images/timeline images/2007-2.jpg';
import img20073 from '../../public/images/timeline images/2007-3.jpg';
import img20081 from '../../public/images/timeline images/2008-1.jpg';
import img20082 from '../../public/images/timeline images/2008-2.jpg';
import img20083 from '../../public/images/timeline images/2008-3.jpg';
import img20091 from '../../public/images/timeline images/2009-1.jpg';
import img20092 from '../../public/images/timeline images/2009-2.jpg';
import img20093 from '../../public/images/timeline images/2009-3.jpg';
import img20101 from '../../public/images/timeline images/2010-1.jpg';
import img20102 from '../../public/images/timeline images/2010-2.jpg';
import img20103 from '../../public/images/timeline images/2010-3.jpg';
import img20111 from '../../public/images/timeline images/2011-1.jpg';
import img20112 from '../../public/images/timeline images/2011-2.jpg';
import img20121 from '../../public/images/timeline images/2012-1.jpg';
import img20122 from '../../public/images/timeline images/2012-2.jpg';
import img20131 from '../../public/images/timeline images/2013-1.jpg';
import img20161 from '../../public/images/timeline images/2016-1.jpg';
import img20201 from '../../public/images/timeline images/2020-1.jpg';
import img20231 from '../../public/images/timeline images/2023-1.jpg';
import img20232 from '../../public/images/timeline images/2023-2.jpg';

export default function Timeline() {
    gsap.registerPlugin(ScrollTrigger);
    const data =  {
        "1951": [
            ["Local businessmen met at Adelphi Hotel's roof garden to discuss the idea of a polytechnic."],
            {}
        ],
        "1952": [
            ["Legislative assemblyman, Mr. Thio Chan Bee, submitted a proposal to the Governor."],
            {}
        ],
        "1954": [
            ["Dobby Committee's recommendation accepted.",
                "Mr. A W Gibson, Principal of the Dudley and Staffordshire Technical College in England, was invited and commissioned to work on the details of building the polytechnic.",
                "On 27 October 1954, the Legislative Council passed the Singapore Ordinance, which led to the establishment of Singapore’s first polytechnic."
            ],
            {
                "1": "1954-1.jpg"
            }
        ],
        "1955": [
            ["First Board of Governors appointed, chaired by Mr. L Cresson."],
            {
                "1": "1955-1.jpg"
            }
        ],
        "1956": [
            ["Mr. D J Williams appointed first Principal."],
            {
                "1": "1956-1.jpg"
            }
        ],
        "1957": [
            ["Construction of campus at Prince Edward Road began with classes conducted in borrowed premises in the meantime."],
            {}
        ],
        "1958": [
            ["Completion of Prince Edward Road campus with an enrolment of 2,800 students registered for 58 courses to prepare them for external examinations."],
            {
                "1": "1958-1.jpg"
            }
        ],
        "1959": [
            ["Official opening of Singapore Polytechnic at Prince Edward Road by Prince Philip, the Duke of Edinburgh on 24 February 1959.",
                "Dr. Toh Chin Chye, Deputy Prime Minister, took over chairmanship of Board of Governors and oriented Singapore Polytechnic towards meeting manpower needs of Singapore's industrialisation programme.",
                "Mr. C I C Scollay appointed Principal.",
                "Internal system of examinations instituted, leading to the Polytechnic's awards at professional, technician and craft levels."
            ],
            {
                "1": "1959-1.jpg",
                "3": "1959-3.jpg",
                "4": "1959-4.jpg"
            }
        ],
        "1960": [
            ["Chan Chieu Kiat Commission set up to review vocational and technical education in Singapore.",
                "The Singapore Polytechnic emblem was adopted. The Malay phrase, Berkhidmat Dengan Keahlian means To Serve With Skill. It is the Polytechnic’s educational mission."
            ],
            {
                "1": "1960-1.jpg"
            }
        ],
        "1961": [
            ["The first Graduation Ceremony on 26 August 1961 was held at Victoria Theatre."],
            {
                "1": "1961-1.jpg"
            }
        ],
        "1963": [
            ["Craft courses transferred to Singapore Vocational Institute to make way for expansion and upgrading of professional and technician courses.",
                "Mr. A R Edis appointed Principal."
            ],
            {
                "1": "1963-1.jpg",
                "2": "1963-2.jpg"
            }
        ],
        "1964": [
            ["Dr. C A Hart led Colombo Plan team to study development of advanced courses.",
                "University of Singapore looked into feasibility of a faculty of technology and granting university degrees to Polytechnic graduates."
            ],
            {}
        ],
        "1965": [
            ["Professional diploma courses gradually replaced by degree courses."],
            {}
        ],
        "1967": [
            ["First batch of degree graduates produced."],
            {}
        ],
        "1968": [
            ["Decision taken to transfer degree courses to University of Singapore, giving rise to the Faculties of Architecture and Engineering.",
                "Prime Minister Lee Kuan Yew visits SP's Nautical School."
            ],
            {}
        ],
        "1969": [
            ["Polytechnic restructured into School of Industrial Technology and School of Nautical Studies.",
                "Two-year Industrial Technician Certificate (ITC) programme introduced."
            ],
            {
                "1": "1969-1.jpg",
                "2": "1969-2.jpg"
            }
        ],
        "1970": [
            ["Temporary additional campus site at Ayer Rajah Road acquired.",
                "Industrial and Business Orientation Programme launched by Dr. Toh Chin Chye, Minister for Science and Technology."
            ],
            {}
        ],
        "1971": [
            ["Nautical Studies, Civil Engineering and Building students housed in Princess Mary Barracks.",
                "Present campus site at Dover Road chosen as permanent home of the Polytechnic.",
                "By the end of 1971, Princess Mary Barracks at Dover Road was converted into Princess Mary Campus - SP’s second campus."
            ],
            {
                "1": "1971-1.jpg",
                "2": "1971-2.jpg"
            }
        ],
        "1972": [
            ["Ayer Rajah Road campus completed. Polytechnic began functioning on three campuses."],
            {
                "1": "1972-1.jpg"
            }
        ],
        "1973": [
            ["New Boat and Radar Station at Pasir Panjang completed.",
                "Mr. V P W Ager appointed Principal."
            ],
            {
                "1": "1973-1.jpg",
                "2": "1973-2.jpg"
            }
        ],
        "1974": [
            ["Construction of Dover Road campus began."],
            {
                "1": "1974-1.jpg"
            }
        ],
        "1975": [
            ["Foundation stone for new campus laid by Dr. Toh Chin Chye on 12 April.",
                "Mr. Low Guan Onn appointed Chairman of the Board of Governors.",
                "ITC courses transferred to Industrial Training Board."
            ],
            {
                "1": "1975-1.jpg"
            }
        ],
        "1976": [
            ["Polytechnic restructured into nine academic departments and divisions."],
            {}
        ],
        "1978": [
            ["Dover Road campus completed.",
                "Mr. Khoo Kay Chai confirmed first local Principal after two years in acting capacity."
            ],
            {
                "1": "1978-1.jpg",
                "2": "1978-2.jpg"
            }
        ],
        "1979": [
            ["Dover Road campus officially opened by Prime Minister Lee Kuan Yew on 7 July. The ceremony was held at the Quadrangle between the Admin Building and the Library."],
            {
                "1": "1979-1.jpg"
            }
        ],
        "1980": [
            ["Singapore Polytechnic (Amendment) Act passed in Parliament on 26 February, reconstituting the Board of Governors and reorganising student bodies.",
                "Mr. Chua Chor Teck appointed Chairman of the Board of Governors."
            ],
            {
                "1": "1980-1.jpg"
            }
        ],
        "1982": [
            ["Five-year Expansion Plan (1982-86) approved, detailing new targets for student enrolment and staffing, as well as new courses.",
                "Industrial and Business Orientation Programme for students replaced by Vacation Training Programme with support from Skills Development Fund."
            ],
            {
                "1": "1982-1.jpg"
            }
        ],
        "1984": [
            ["All full-time Technician Diploma courses restructured and revised to cater for high technology needs."],
            {}
        ],
        "1986": [
            ["Prof. George Fong Wah took over as Chairman of the Board of Governors.",
                "Completion of Second Phase campus development programme which took five years.",
                "Visit by His Excellency, Mr. Wee Kim Wee, President of the Republic of Singapore."
            ],
            {
                "1": "1986-1.jpg",
                "2": "1986-2.jpg",
                "3": "1986-3.jpg"
            }
        ],
        "1987": [
            ["Japan-Singapore Institute of Software Technology (JSIST) transferred to Singapore Polytechnic."],
            {}
        ],
        "1988": [
            ["Graduates' Guild's clubhouse officially opened by Senior Minister of State for Education Dr. Tay Eng Soon."],
            {
                "1": "1988-1.jpg"
            }
        ],
        "1990": [
            ["New $3.3 million Sports Complex completed.",
                "50,000th graduate received his diploma at the 30th Graduation Ceremony.",
                "In line with government's effort to assist local companies, the Polytechnic took on second mission of providing expertise and resources to these enterprises.",
                "Move made towards Swiss-German model of technical education."
            ],
            {
                "1": "1990-1.jpg",
                "2": "1990-2.jpg",
                "3": "1990-3.jpg"
            }
        ],
        "1991": [
            ["Three term academic calendar changed to one with four terms.",
                "Dual Training Scheme for workers to study part-time at the Polytechnic and receive on-the-job training at their companies introduced.",
                "Foreign language programme offered for the first time.",
                "Vacation Training Programme replaced by a longer and more structured Industrial Training Programme.",
                "SP became the first poly to offer a professional Diploma in Accountancy."
            ],
            {
                "1": "1991-1.jpg",
                "2": "1991-2.jpg"
            }
        ],
        "1992": [
            ["Deputy Prime Minister Lee Hsien Loong officially opened the Third Phase campus development project.",
                "Modular system adopted for courses offered by the Polytechnic and at the same time, the credit accumulation and credit transfer systems were also introduced."
            ],
            {
                "1": "1992-1.jpg"
            }
        ],
        "1993": [
            ["Launch of Singapore Polytechnic Entrepreneurs' Club for graduates who had become successful entrepreneurs."],
            {
                "1": "1993-1.jpg"
            }
        ],
        "1994": [
            ["SP became the first poly to introduce the Diploma in Optometry.",
                "Official opening of Fourth Phase campus development project by Minister for Education Lee Yock Suan."
            ],
            {
                "1": "1994-1.jpg"
            }
        ],
        "1995": [
            ["Mr. Lim Yong Wah appointed Chairman of the Board of Governors.",
                "Principal Khoo Kay Chai retired after 19 years at the helm.",
                "SP was the first poly to sign a Memorandum of Understanding with Pokka Corporation (Singapore) to market the 'Lemonsi Delight' drink that was formulated by 20 students and 5 lecturers from the Chemical Process & Biotechnology Department.",
                "In September 1996, Pokka Corporation launched full-scale production and marketing of 'Lemonsi Delight', which is still available in major supermarkets today (2014)."
            ],
            {
                "1": "1995-1.jpg"
            }
        ],
        "1996": [
            ["Mr. Low Wong Fook took over as new Principal."],
            {}
        ],
        "1997": [
            ["Virtual College launched, offering online courses including part-time programmes and various modules."],
            {
                "1": "1997-1.jpg"
            }
        ],
        "1998": [
            ["Clementi Student Service Centre, a joint project with the Tanjong Pagar Community Development Council and Clementi Citizen's Consultative Committee, opened its doors as part of the institution's effort to reach out to the community."],
            {
                "1": "1998-1.jpg"
            }
        ],
        "1999": [
            ["In recognition of its attainment of a commendable level of performance in its journey to excellence, the institution was made member of Singapore Quality Class.",
                "Singapore Polytechnic received People Developer Standard Award which recognises organisations that invested in its people and had a comprehensive system for developing employees.",
                "For its many initiatives to protect and preserve the environment, SP was awarded the Singapore Green Plan Award."
            ],
            {
                "1": "1999-1.jpg",
                "2": "1999-2.jpg",
                "3": "1999-3.jpg"
            }
        ],
        "2000": [
            ["Singapore Maritime Academy was formed with the merger of the Polytechnic's Department of Maritime Technology & Transportation and the Maritime & Port Authority of Singapore's National Maritime Academy",
                "100,000th graduate received his diploma at the 40th Graduation Ceremony",
                "Electronics & Communication Engineering Department merged with Electrical Engineering Department to form the Electrical & Electronic Engineering Department",
                "Mr Tan Kay Yong (left) appointed Chairman of Board of Governors",
                "Principal lecturer, MR> Loh Peng Chum invented the world’s first purple gold after 23 years of research. Purple gold is traditionally known to be porous and brittle, but Mr Loh made it malleable enough to be fashioned into rings and pendants. Not only has his formula been patented, an agreement has also been reached with Aspial to market the product globally."
            ],
            {
                "1": "2000-1.jpg",
                "2": "2000-2.jpg",
                "3": "2000-3.jpg",
                "4": "2000-4.jpg"
            }
        ],
    
            "2001": [
                ["Deputy Prime Minister and Minister for Defence Dr Tony Tan (extreme left) officially opened the Singapore Polytechnic Graduates' Guild's new clubhouse",
                    "The Polytechnic satisfied requirements for ISO 9000 and ISO 14000 certifications", "Academic departments renamed as schools to better reflect their central role in offering programmes to prepare students for work and life", "Industrial Training Programme commemorated its 30th anniversary"
                ], {
                    "1": "2001-1.jpg"
                }
            ],
            "2002": [
                ["The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic.", "Ms Teng Li Yeng, graduate in Diploma in Banking and Financial Services, was the first poly graduate to be awarded the Public Service Commission Overseas Merit scholarship."
                ], {
                    "1": "2002-1.jpg"
                }
            ],
            "2003": [
                ["New Convention Centre and Plaza project completed",
                    "Re-branding of the Polytechnic initiated with a new Education Model of the Future, and with programmes to unleash creativity, innovation and enterprise, to create a unique SP experience for students and to make SP a great place to work",
                    "Principal lecturer, Mr Loh Peng Chum created the world’s first titanium-gold and five-coloured multi-layered gold", "SP is the first and only poly to introduce the Diploma in Architecture. The Diploma has its roots back in the 1950s when it started out as a Part-time Technician Diploma in Architectural Draughtsmanship.", "Opening of fifth-phase campus expansion by Minister for Education RADM Teo Chee Hean."
                ], {
                    "1": "2003-1.jpg",
                    "2": "2003-2.jpg",
                    "5": "2003-5.jpg"
                }
            ],
            "2004": [
                ["General Elective, Creative Reasoning Skills and Innovation, Design and Enterprise in Action modules introduced",
                    "Singapore Polytechnic turned 50. His Excellency, Mr S R Nathan, President of the Republic of Singapore (second from right), launched the yearlong celebrations on 13 February at the official opening of the new Convention Centre and Plaza", "Grand Climax to the 50th Anniversary Celebrations - Prime Minister Lee Hsien Loong joined staff, alumni and overseas partners to celebrate the 50th anniversary at a gala dinner.", "SP became the first poly to produce a perfume – Romancing Singapore with all 3000 bottles selling out within 9 days in local departmental stores"
                ], {
                    "2": "2004-2.jpg",
                    "3": "2004-3.jpg"
                }
            ],
            "2005": [
                ["Singapore Polytechnic (SP) buried a time capsule to signify the close of the year long celebrations and the opening of a new chapter in the SP story. The event took a retrospective look at SP's achievements and thanked staff for their support in making the anniversary celebrations a success. The finale saw the unveiling of SP's 50th Anniversary Commemorative Book which highlights amongst others, the contribution of Singapore's pioneer polytechnic to the development of the nation and how its success spawned the establishment of other polytechnics here", "The Public Service Award for Organisational Excellence, one of the most prestigious service wide awards, was presented to the Polytechnic."
                ], {
                    "1": "2005-1.jpg"
                }
            ],
            "2006": [
                ["Singapore Polytechnic awarded the Best Environmental Report for 2005 by the Association of Chartered Certified Accountants", "As part of its efforts to give back to the community, the SP Optometry Centre was set at West Coast Community Centre to provide public with affordable eye care. The centre also offers Optometry students an authentic learning environment under their lecturers’ supervision.", "A full-length musical “Superstar” written and produced by SP staff and starring SP students and graduates was produced to raise funds for President’s Challenge."
                ], {
                    "1": "2006-1.jpg"
                }
            ],
            "2007": [
                ["The SP Scholarship Programme was launched in March 2007 with first batch of 40 SP Scholars receiving their scholarships.",
                    "Food Innovation and Resource Centre, a one-stop consultancy centre to assist Small and Medium-sized Enterprises (SMEs), is officially opened by Minister of State for Trade and Industry, Mr Lee Yi Shyan.", "Singapore Maritime Academy celebrates 50 years as a leading provider of maritime education and training.", "SP Design School was launched on 29 January."
                ], {
                    "1": "2007-1.jpg",
                    "2": "2007-2.jpg",
                    "3": "2007-3.jpg"
                }
            ],
            "2008": [
                ["Mr Tan Hang Cheong took over as the new Principal at the start of 2008.", "Singapore Polytechnic opens new School of Communication, Arts and Social Sciences (CASS) on 1 February 2008.", "A remnant of Singapore’s colonial past – Moberly Block was a British army barrack before it was converted to form part of the Dover Road campus. The block was refurbished and transformed into a new hub for student activities. It was officially opened by HE Paul Madden, the British High Commissioner to Singapore, on 9 May 2008."
                ], {
                    "1": "2008-1.jpg",
                    "2": "2008-2.jpg",
                    "3": "2008-3.jpg"
                }
            ],
            "2009": [
                ["Singapore Polytechnic (SP) and Epic Games China launched Unreal Technology Lab, the first Games Resource Centre in Southeast Asia.", "Chua Koon Ting became the first polytechnic student to read Dentistry at the National University of Singapore.", "Kuriakin made history by becoming the first student to score distinctions for all his subjects."
                ], {
                    "1": "2009-1.jpg",
                    "2": "2009-2.jpg",
                    "3": "2009-3.jpg"
                }
            ],
            "2010": [
                ["The Professional and Adult Continuing Education (PACE) Academy was officially launched on 20 April by Mr Lee Yi Shyan, Minister of State for Manpower, Trade and Industry.", "Kenneth Chen Yi Xin became SP’s 150,000th graduate and received his Diploma at the 50th Graduation Ceremony. He was also presented with a special memento by Mr Lim Chin Aik, the first registered student of SP.", "Desmond Thiam became the first SP graduate to be admitted into the Yong Loo Lin School of Medicine at the National University of Singapore.", "Alex Chua Koon Ting, who graduated with Diploma in Biomedical Science in 2007, made history by becoming the first poly student to be accepted by National University of Singapore to read Dentistry.", "SP receives the Public Service Milestone Award. Formerly it was known as the Public Service Award for Organisational Excellence.", "SP won the President’s Award for the Environment – the highest accolade to recognise organisations and companies for their green efforts.", "SP organised RoboCup 2010, a world-class event dubbed the Olympics of the Robotics world. It was the first time the event was held in Singapore."
                ], {
                    "1": "2010-1.jpg",
                    "2": "2010-2.jpg",
                    "3": "2010-3.jpg"
                }
            ],
            "2011": [
                ["Singapore Polytechnic received the President’s Social Service Award 2011 for the voluntary contributions made to the social service sector.",
                    "Singapore Polytechnic launched SPELL, an off-campus retail store at Changi Airport’s Terminal 3 run by SP Business School students.", "Food Innovation Resource Centre was set up to cater to the needs of local food enterprises."
                ], {
                    "1": "2011-1.jpg",
                    "2": "2011-2.jpg"
                }
            ],
            "2012": [
                ["A new Board of Board Governors was appointed. Outgoing chairman Mr Tan Kay Yong, who dedicated 12 years of distinguished service, was replaced by Mr Bill Chang. Six new members also came on board.", "SP Principal Mr Tan Hang Cheong received the National Environment Agency's EcoFriend Awards 2012 in recognition of his leadership in inspiring the campus to support the green cause."
                ], {
                    "1": "2012-1.jpg",
                    "2": "2012-2.jpg"
                }
            ],
            "2013": [
                ["Mr Tan Choon Shian took over as the new Principal at the start of 2013.", "SP was awarded the Public Service Milestone Award at this year’s Excellence in Public Service Awards."
                ], {
                    "1": "2013-1.jpg"
                }
            ],
            "2014": [
                ["SP celebrates its 60th anniversary.", "SP’s new vision – A caring community of inspired learners committed to serve with mastery was announced.", "Launch of the Perfumery and Cosmetic Science Centre to support students studying the Diploma in Perfumery and Cosmetic Science.", "A new five-storey Design School building was unveiled."
                ], {}
            ],
            "2015": [
                ["SP reaches a key milestone with graduation of close to 5,900 students."
                ], {}
            ],
            "2016": [
                ["Mr Soh Wai Wah took over as the new Principal and CEO in October 2016."
                ], {
                    "1": "2016-1.jpg"
                }
            ],
            "2018": [
                ["SP achieved our 200,000th graduate milestone!"
                ], {}
            ],
            "2020": [
                ["Ms Janet Ang appointed as the new chairman on 16 September 2020."
                ], {
                    "1": "2020-1.jpg"
                }
            ],
            "2023": [
                ["SP launched first decarbonization playbook, paving the way for Institute of Higher Learning.",
                    "Launch of the SP’s 70th anniversary commemorative book “For All Ages, Singapore Polytechnic At Seventy” at the third Polytechnic-ITE (POLITE) Staff Appreciation Day on 31 October 2023, where Minister of Education Mr Chan Chun Sing officiated and marked the commencement of SP’s 70th anniversary celebrations."
                ], {
                    "1": "2023-1.jpg",
                    "2": "2023-2.jpg"
                }
            ],
            "2024": [
                ["SP celebrates its 70th anniversary!"
                ], {}
            ]
        }
        
        const timelineRef = useRef()
        const hoverImage = useRef()
        const [imageSource, setImageSource] = useState(img19541)
        const [imageWidth, setImageWidth] = useState(200)
        const [imageHeight, setImageHeight] = useState(130)
        const [hoveringImage, setHoveringImage] = useState(false)

        const moveHoverImage = (event) => {
                if (hoverImage.current) {
                        hoverImage.current.style.left = `${event.clientX}px`;
                        hoverImage.current.style.top = `${event.clientY}px`;
                }
        }

        useGSAP(() => {
                
                const timelineTexts = document.querySelectorAll('.timeline-text')
                timelineTexts.forEach((timelineText) => {
                        gsap.to(timelineText, {
                        scrollTrigger: {
                                trigger: timelineText,
                                start: "top bottom", // When the top of the trigger hits the bottom of the viewport
                                pinSpacing: true,
                        },
                        top: 0,
                        stagger: 0.05,
                        duration: 1,
                        ease: 'power4.out'
                        })
                        console.log('fetching')
                        console.log(timelineText.getAttribute('image-url'))

                        const imageURL = timelineText.getAttribute('image-url')
                        // if (imageURL) {
                        //         console.log('attribute fetched')
                        //         timelineText.addEventListener('mouseenter', (event) => {
                        //                 console.log('hover')
                        //                 const imageURL = timelineText.getAttribute('image-url')
                        //                 console.log(hoveringImage)
                        //                 if (!hoveringImage) {
                        //                         setHoveringImage(true)
                        //                         setImageSource(`/images/timeline images/${imageURL}`)
                        //                         gsap.to('.hover-image', {scale: 1, duration: 0, ease: 'power4.out'})
                        //                 }
                        //         }) 
                        //         timelineText.addEventListener('mouseleave', (event) => {
                        //                 setHoveringImage(false)
                        //                 console.log("hovering image when mouse leave triggered ",hoveringImage)
                        //                 gsap.to('.hover-image', {scale: 0, duration: 0, ease: 'power4.out'})
                        //         }) 

                        //         timelineText.addEventListener('mousemove', (event) => {
                        //                 if (hoverImage.current) {
                        //                         hoverImage.current.style.left = `${event.clientX}px`
                        //                         hoverImage.current.style.top = `${event.clientY}px`
                        //                 }
                        //         })

                        // }
                })

                const textWrappers = document.querySelectorAll('.timeline-text-wrapper')
                textWrappers.forEach((textWrapper) => {
                        console.log(textWrapper.getAttribute('image-url'))
                        if (textWrapper.getAttribute('image-url')) {
                                console.log('attribute fetched')
                                textWrapper.addEventListener('mouseenter', (event) => {
                                        console.log('hover')
                                        const imageURL = textWrapper.getAttribute('image-url')
                                        setImageSource(`/images/timeline images/${imageURL}`)
                                        gsap.to('.hover-image', {scale: 1, duration: 0.5, ease: 'power4.out'})
                                }) 
                                textWrapper.addEventListener('mouseleave', (event) => {
                                        console.log('leave')
                                        const imageURL = event.target.getAttribute('image-url')
                                        gsap.to('.hover-image', {scale: 0, duration: 0.5, ease: 'power4.out'})
                                }) 
                        }
                        textWrapper.addEventListener('mousemove', (event) => {
                                if (hoverImage.current) {
                                        hoverImage.current.style.left = `${event.clientX + 5}px`;
                                        hoverImage.current.style.top = `${event.clientY + 5}px`;
                                }
                        })
                })


                
                const lines = gsap.utils.toArray('.line')
                lines.forEach((line) => {
                        gsap.to(line, {
                        scrollTrigger: {
                                trigger: line,
                                start: "top bottom", // When the top of the trigger hits the bottom of the viewport
                                pinSpacing: true,
                        },
                        height: '100%',
                        duration: 2.5,
                        ease: 'power4.out'
                        })
                })
                const headings = gsap.utils.toArray('.timeline-heading')
                headings.forEach((heading) => {
                        gsap.to(heading, {
                        scrollTrigger: {
                                trigger: heading,
                                start: "top bottom+=200px", // When the top of the trigger hits the bottom of the viewport
                                pinSpacing: true,
                        },
                        bottom: 0,
                        duration: 2,
                        ease: 'power4.out'
                        })
                })
                
        },{ scope: timelineRef })

        return (
                <>
                        <Image className='hover-image' ref={hoverImage} width={200} height={195} src={imageSource} alt='SP Singapore Polytechnic Timeline Image'/>
                        <div className="timeline" ref={ timelineRef }>
                                {Object.keys(data).map((key) => ( // Using Javascript .map to loop through the object keys
                                        <Fragment key={key}>
                                                <div className='line-wrapper'>
                                                        <div className="timeline-text-wrapper">
                                                                <h1 className="timeline-heading">{key}</h1> 
                                                        </div>
                                                        <span className='line'></span>
                                                </div>
                                                <div>
                                                        {data[key][0].map((item, index) => ( // Using .map to loop through each year's text arrays
                                                                <div key={index} className="timeline-text-wrapper" image-url={data[key][1][index+1] ? `${data[key][1][index+1]}` : ""}>
                                                                        <p className="timeline-text" image-url={data[key][1][index+1] ? `${data[key][1][index+1]}` : ""}>
                                                                                {item}
                                                                                {index !== data[key][0].length - 1 && <br />}
                                                                                {index !== data[key][0].length - 1 && <br />}
                                                                        </p>
                                                                </div>
                                                        ))}
                                                </div>
                                        </Fragment>
                                ))}
                        </div>
                </>
        )
}
