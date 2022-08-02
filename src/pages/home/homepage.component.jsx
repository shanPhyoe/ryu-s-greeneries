import React from 'react';
import { motion } from 'framer-motion';

import Header from '../../components/header/header.component';
import BestSellers from '../../components/best-sellers/best-sellers.component';
import Advantage from '../../components/advantage/advantage.component';

import './homepage.styles.scss';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const HomePage = () => {
    return (
        <motion.div
            className="homepage"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
            <Header />
            <BestSellers />
            <Advantage />
        </motion.div>
    );
};

export default HomePage;
