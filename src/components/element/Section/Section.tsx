import React from "react";
import type {SectionProps} from "./Section.types";
import '../../../css/variables.css';
import styles from './Section.module.css';
import classNames from '../../../utils/classNames';

/**
 * @param children
 * @param className
 * @param style
 * @constructor
 */
const Section = ({
    children,
    className = '',
    style = {},
}: SectionProps) => {
    return (
        <section
            className={classNames([
                styles.section,
                className
            ])}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;
