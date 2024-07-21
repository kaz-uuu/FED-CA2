"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export const TransitionLink = ({ children, href, timeline, destination, ...props }) => {
        const router = useRouter();

        const handleTransition = async (e) => {
                e.preventDefault();

                // Run the GSAP timeline animation
                if (timeline) {
                        await timeline.play().then(() => {
                                router.push(href);
                        });
                } else {
                        router.push(href);
                }
        };

        return (
                <Link {...props} href={href} onClick={handleTransition} className={`nav-link ${destination}`}>
                {children}
        </Link>
        );
};
