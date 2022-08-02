import React from 'react';
import { motion } from 'framer-motion';

import AboutUs from '../../components/about-us/aboutus.component';
import Believe from '../../components/believe/believe.component';
import Service from '../../components/service-section/service.component';

import './aboutpage.styles.scss';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const AboutPage = () => {
    return (
        <motion.div
            className="aboutpage"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
            <AboutUs />
            <Believe />
            <Service />
        </motion.div>
    );
};

export default AboutPage;
