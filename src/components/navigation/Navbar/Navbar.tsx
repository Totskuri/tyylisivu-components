import React, {useState} from "react";
import type {NavbarProps} from "./Navbar.types";
import '../../../css/variables.css';
import styles from './Navbar.module.css';
import classNames from "../../../utils/classNames";
import MenuButton from "../../element/MenuButton/MenuButton";

/**
 * @param children
 * @param brand
 * @param className
 * @param style
 * @constructor
 */
const Navbar = ({
    children,
    brand = undefined,
    className = '',
    style = {},
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const getIsOpenClass = () => isOpen ? 'isOpen' : '';
    const getHiddenClass = () => !isOpen ? styles.hidden : '';
    return (
        <div
            className={classNames([
                styles.navbar,
                getIsOpenClass(),
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
