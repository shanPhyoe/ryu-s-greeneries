import React from 'react';
import { useInView } from 'react-intersection-observer';

import './scroll-to-reveal.styles.scss';

const ScrollToReveal = ({
    threshold,
    triggeredOnce,
    fromTop,
    fromLeft,
    children,
}) => {
    const { ref, inView } = useInView({
        threshold: threshold,
        triggerOnce: triggeredOnce,
    });

    return (
        <div
            className={`scroll-to-reveal ${fromTop ? 'reveal-from-top' : ''} ${
                fromLeft ? 'reveal-from-left' : ''
            } ${inView ? 'reveal' : ''}`}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default ScrollToReveal;
