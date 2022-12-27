import React from "react";
import type {SectionProps} from "./Section.types";
import styles from './Section.module.css';
import classNames from '../../../utils/classNames';

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
