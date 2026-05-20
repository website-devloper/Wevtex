"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export default function ScrollAnimatedObjects() {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Calculate mouse offset relative to screen center
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax tracking
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <div ref={ref} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>

            {/* Layer 1: Mouse - Interactive Aurora Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute", top: "-10%", left: "-10%", width: "50vw", height: "50vw", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(13,110,253,0.3) 0%, rgba(0,0,0,0) 70%)", filter: "blur(60px)",
                    x: mousePosition.x * 2, y: mousePosition.y * 2
                }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute", bottom: "-20%", right: "-10%", width: "60vw", height: "60vw", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(111,66,193,0.3) 0%, rgba(0,0,0,0) 70%)", filter: "blur(80px)",
                    x: -mousePosition.x * 1.5, y: -mousePosition.y * 1.5
                }}
            />

            {/* Layer 2: Premium Floating Glass Prism */}
            <motion.div
                style={{ y: y1, position: "absolute", top: "25%", right: "15%" }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "160px", height: "160px",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.15)", borderRadius: "24px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 15px 35px 0 rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                </motion.div>
            </motion.div>

            {/* Layer 3: Tech Orbit Ring with Glowing Node */}
            <motion.div
                style={{ y: y2, position: "absolute", top: "50%", left: "8%" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: "280px", height: "280px",
                        border: "1px dashed rgba(255,255,255,0.3)", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "inset 0 0 40px rgba(13,202,240,0.1)"
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: "12px", height: "12px", background: "#0dcaf0", borderRadius: "50%", boxShadow: "0 0 20px #0dcaf0", position: "absolute", top: "-6px" }}
                    />
                </motion.div>
            </motion.div>

            {/* Layer 4: Abstract Animated Geometry */}
            <motion.div
                style={{ y: y3, position: "absolute", bottom: "15%", right: "35%" }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <motion.svg
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    style={{ width: "140px", height: "140px", opacity: 0.4 }}
                    viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="50" cy="50" r="48" stroke="#ffc107" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="38" stroke="#0d6efd" strokeWidth="1" strokeDasharray="5 5" />
                    <circle cx="50" cy="50" r="28" stroke="#20c997" strokeWidth="2" strokeDasharray="1 10" />
                </motion.svg>
            </motion.div>

            {/* Layer 5: Data Particles / Stardust */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: "-50vh", opacity: [0, 0.8, 1, 0] }}
                    transition={{
                        duration: Math.random() * 8 + 6,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                    style={{
                        position: "absolute", left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
                        background: i % 3 === 0 ? "#ffffff" : i % 3 === 1 ? "#0dcaf0" : "#6f42c1",
                        borderRadius: "50%",
                        boxShadow: `0 0 10px ${i % 3 === 0 ? "#ffffff" : i % 3 === 1 ? "#0dcaf0" : "#6f42c1"}`
                    }}
                />
            ))}
        </div>
    );
}
