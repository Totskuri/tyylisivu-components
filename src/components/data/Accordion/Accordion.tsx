import React, {useState} from "react";
import type {AccordionProps} from "./Accordion.types";
import '../../../css/variables.css';
import classNames from "../../../utils/classNames";
import styles from "./Accordion.module.css";

/**
 * @param title
 * @param children
 * @param icon
 * @param iconToggled
 * @param className
 * @param style
 * @constructor
 */
const Accordion = ({
    title,
    children,
    icon,
    iconToggled = undefined,
    className = '',
    style = {},
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const getButtonIsOpenClass = () => isOpen ? styles.isOpen : '';
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
                className={classNames([
                    styles.button,
                    getButtonIsOpenClass()
                ])}
            >
                <h3
                    className={styles.title}
                >
                    {title}
                </h3>
                {isOpen && iconToggled ? iconToggled : icon}
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
