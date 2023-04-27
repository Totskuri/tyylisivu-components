import React, {useEffect, useState} from "react";
import type {NavbarProps} from "./Navbar.types";
import '../../../css/variables.css';
import styles from './Navbar.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param children
 * @param icon
 * @param iconToggled
 * @param brand
 * @param isOpenCallback
 * @param className
 * @param style
 * @constructor
 */
const Navbar = ({
    children,
    icon,
    iconToggled = undefined,
    brand = undefined,
    isOpenCallback = () => {},
    className = '',
    style = {},
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const getIsOpenClass = () => isOpen ? styles.isOpen : '';
    useEffect(() => {
        isOpenCallback(isOpen);
    }, [isOpen]);
    return (
        <div
            className={classNames([
                styles.navbar,
                className
            ])}
            style={style}
        >
            <div
                className={styles.container}
            >
                <div>
                    {brand}
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                    className={styles.menuButton}
                    aria-label="Toggle navigation"
                >
                    {isOpen && iconToggled ? iconToggled : icon}
                </button>
                <nav
                    className={classNames([
                        styles.menu,
                        getIsOpenClass()
                    ])}
                >
                    {children}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
