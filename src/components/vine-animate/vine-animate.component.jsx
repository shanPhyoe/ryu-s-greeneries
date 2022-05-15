import React from 'react';
import { motion } from 'framer-motion';

import './vine-animate.styles.scss';

const svgVariants = {
    hidden: {
        width: 0,
    },
    visible: {
        width: '100%',
        transition: {
            duration: 5,
            ease: 'easeInOut',
        },
    },
};

const Vine = ({ Svg }) => {
    return (
        <motion.div
            className="vine__container"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
        >
            <Svg className="vine__icon" />
        </motion.div>
    );
};

export default Vine;
