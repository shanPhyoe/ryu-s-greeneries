import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { motion, AnimatePresence } from 'framer-motion';

import { selectPopupText } from '../../redux/popup/popup.selector';

import './popup.styles.scss';

const containerVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: {
            type: 'dumping',
        },
    },
};

const Popup = ({ popupText }) => {
    return (
        <AnimatePresence>
            {popupText ? (
                <motion.div
                    className="popup"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ y: '100vh' }}
                >
                    {popupText}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

const mapStateToProps = createStructuredSelector({
    popupText: selectPopupText,
});

export default connect(mapStateToProps)(Popup);
