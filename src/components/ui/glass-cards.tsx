import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
    id: number;
    title: string;
    description: string;
    tools?: string;
    image?: string;
    index: number;
    totalCards: number;
    color: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, tools, image, index, totalCards, color }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const content = contentRef.current;
        if (!card || !content) return;

        // Pin the card container
        const st = ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            end: "bottom top",
            id: `card-pin-${index}`
        });

        const targetScale = 1 - (totalCards - index) * 0.05;
        
        const scaleST = ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: () => `+=${window.innerHeight}`, 
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);
                gsap.set(content, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: "center top",
                    opacity: 1 - progress, // Fade out completely as it's covered
                    filter: `blur(${progress * 10}px)` // Add blur as it recedes
                });
            }
        });

        return () => {
            st.kill();
            scaleST.kill();
        };
    }, [index, totalCards]);

    return (
        <div
            ref={cardRef}
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: index + 1 
            }}
        >
            <div
                ref={contentRef}
                style={{
                    position: 'relative',
                    width: '90%',
                    maxWidth: '1100px',
                    height: '550px',
                    borderRadius: '28px',
                    isolation: 'isolate',
                }}
                className="card-content"
            >
                {/* Electric Border Effect */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '30px',
                        padding: '2px',
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            ${color} 60deg,
                            ${color.replace('0.8', '0.6')} 120deg,
                            transparent 180deg,
                            ${color.replace('0.8', '0.4')} 240deg,
                            transparent 360deg
                        )`,
                        zIndex: -1,
                        opacity: 0.6
                    }}
                />

                {/* Main Card Content */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: '28px',
                    background: `
                        linear-gradient(145deg, 
                            rgba(15, 23, 42, 0.9), 
                            rgba(30, 41, 59, 0.8)
                        )
                    `, // Darker, more solid background to prevent see-through overlap
                    backdropFilter: 'blur(50px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: `
                        0 30px 60px rgba(0, 0, 0, 0.6),
                        inset 0 1px 1px rgba(255, 255, 255, 0.1)
                    `,
                    overflow: 'hidden'
                }}>
                    {/* Content Section */}
                    <div style={{
                        flex: 1.2,
                        padding: '4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 2,
                        color: 'white'
                    }}>
                        <span style={{ 
                            fontSize: '1rem', 
                            color: color, 
                            fontWeight: '700', 
                            textTransform: 'uppercase', 
                            letterSpacing: '3px',
                            marginBottom: '1rem'
                        }}>Project 0{id}</span>
                        <h2 style={{ 
                            fontSize: '3.5rem', 
                            fontWeight: '800', 
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            background: 'linear-gradient(to right, #ffffff, #a1a1aa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>{title}</h2>
                        <p style={{ 
                            fontSize: '1.25rem', 
                            lineHeight: '1.6', 
                            color: 'rgba(255, 255, 255, 0.8)',
                            marginBottom: '2.5rem',
                            maxWidth: '550px'
                        }}>{description}</p>
                        
                        {tools && (
                            <div style={{ marginTop: 'auto' }}>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '1px' }}>Tools & Features</p>
                                <div style={{ 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    gap: '0.75rem' 
                                }}>
                                    {tools.split(',').map((tool, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.9rem',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '100px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'rgba(255, 255, 255, 0.9)'
                                        }}>{tool.trim()}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image Section */}
                    {image && (
                        <div style={{
                            flex: 1,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                             <img 
                                src={image} 
                                alt={title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.5,
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.5s ease'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(to right, rgba(15, 23, 42, 1), transparent 70%)`
                            }} />
                        </div>
                    )}

                    {/* Shine Effect */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        zIndex: 3
                    }} />
                </div>
            </div>
        </div>
    );
};

export const StackedCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <section ref={containerRef} style={{ background: 'transparent', position: 'relative' }}>
            <div style={{
                color: '#ffffff',
                width: '100%'
            }}>
                {cardData.map((card, index) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        tools={card.tools}
                        image={card.image}
                        index={index}
                        totalCards={cardData.length}
                        color={card.color}
                    />
                ))}
            </div>
            <div style={{ height: '50vh' }} /> 
        </section>
    );
};
