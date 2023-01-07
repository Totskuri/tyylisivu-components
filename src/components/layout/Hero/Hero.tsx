import React from "react";
import type {HeroProps} from "./Hero.types";
import '../../../css/variables.css';
import styles from './Hero.module.css';
import classNames from '../../../utils/classNames';

/**
 * @param children
 * @param backgroundImage
 * @param height
 * @param overlay
 * @param className
 * @param style
 * @constructor
 */
const Hero = ({
    children,
    backgroundImage = 'none',
    height = undefined,
    overlay = undefined,
    className = '',
    style = {},
}: HeroProps) => {
    const getHeightClass = () => height ? styles[height] : '';
    const getOverlayClass = () => overlay ? styles[overlay] : '';
    return (
        <section
            className={classNames([
                styles.hero,
                getHeightClass(),
                className
            ])}
            style={{
                backgroundImage,
                ...style
            }}
        >
            <div
                className={getOverlayClass()}
            >
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Hero;
