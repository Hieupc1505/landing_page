"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import { useLayoutEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Translate } from "@mui/icons-material";
gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
    const component = useRef();
    const slider = useRef();
    const slide1 = useRef();
    const slide2 = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".panel2", {
                xPercent: 60,
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    // pin: true,
                    start: "top top",
                    scrub: 1,
                    snap: 0,
                    end: () => "+=" + slide1.current.offsetWidth,
                },
            });
        }, component);

        let ctx2 = gsap.context(() => {
            gsap.to(".panel1", {
                xPercent: -65,
                ease: "none",
                scrollTrigger: {
                    trigger: component.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + slide1.current.offsetWidth,
                    // end: () => "+=" + slide1.current.offsetWidth,
                },
            });
        }, component);

        return () => {
            ctx.revert();
            ctx2.revert();
        };
    });

    return (
        <Box className="Slider" ref={component} sx={{ paddingTop: "120px" }}>
            <Box ref={slider} className="container">
                <Box
                    ref={slide1}
                    className="panel1"
                    sx={{
                        width: "400%",
                        height: "180px",
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center center",
                        backgroundImage:
                            "url(https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/bundle-light-1.webp)",
                    }}
                ></Box>
                <Box
                    ref={slide2}
                    className="panel2"
                    sx={{
                        width: "400%",
                        height: "480px",
                        backgroundSize: "auto 100%",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center center",
                        backgroundImage:
                            "url(https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/home/bundle-light-2.webp)",
                        transform: `translate(calc(-100% + ${1200}px),0px)`,
                    }}
                ></Box>
            </Box>
        </Box>
    );
}
