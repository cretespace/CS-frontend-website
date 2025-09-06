'use client';

import { useEffect, useRef, useState } from "react";

export default function FadeInSection ({children, direction= 'left'}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver (
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current)
                }
            },
            {threshold: 0.2}
        )
            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) observer.unobserve(ref.current);
            }
        
    }, []);

    const hiddenClass = 
    direction === 'left'
    ? 'opacity-0 -translate-x-10'
    : 'opacity-0 translate-x-10'; 

    return (
        <div ref={ref} className={`transform transition-all duration-3000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : hiddenClass
        }`}>
            {children}

        </div>
    )
}