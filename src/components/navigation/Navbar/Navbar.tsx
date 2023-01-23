import React, {useEffect, useState} from "react";
import type {NavbarProps} from "./Navbar.types";
import '../../../css/variables.css';
import styles from './Navbar.module.css';
import classNames from "../../../utils/classNames";
import MenuButton from "../../element/MenuButton/MenuButton";

/**
 * @param children
 * @param brand
 * @param isOpenCallback
 * @param className
 * @param style
 * @constructor
 */
const Navbar = ({
    children,
    brand = undefined,
    isOpenCallback = () => {},
    className = '',
    style = {},
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const getHiddenClass = () => !isOpen ? styles.hidden : '';
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
                <MenuButton
                    onToggle={(val) => setIsOpen(val)}
                    toggled={isOpen}
                    className={styles.menuButton}
                />
                <nav
                    className={classNames([
                        styles.menu,
                        getHiddenClass()
                    ])}
                >
                    {children}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
