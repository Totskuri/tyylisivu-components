import React, {useState} from "react";
import type {AccordionProps} from "./Accordion.types";
import '../../../css/variables.css';
import classNames from "../../../utils/classNames";
import styles from "./Accordion.module.css";

/**
 * @param title
 * @param children
 * @param className
 * @param style
 * @constructor
 */
const Accordion = ({
    title,
    children,
    className = '',
    style = {},
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const getChevronAdditionalClass = () => isOpen ? styles.top : '';
    return (
        <div
            className={classNames([
                styles.accordion,
                className
            ])}
            style={style}
        >
            <button
                type="button"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                aria-label="Toggle accordion"
                className={styles.button}
            >
                <h3
                    className={styles.title}
                >
                    {title}
                </h3>
                <i className={classNames([
                    styles.chevron,
                    getChevronAdditionalClass()
                ])} />
            </button>
            {isOpen && (
                <div
                    className={styles.content}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
