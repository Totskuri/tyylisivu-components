import React, {useState} from "react";
import type {NavbarProps} from "./Navbar.types";
import '../../../css/variables.css';
import styles from './Navbar.module.css';
import classNames from "../../../utils/classNames";
import MenuButton from "../../element/MenuButton/MenuButton";

const Navbar = ({
    children,
    brand = undefined,
    className = '',
    style = {},
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const getHiddenClass = () => !isOpen ? styles.hidden : '';
    return (
        <div
            className={classNames([
                styles.navbar,
                className
            ])}
            style={style}
        >
            <div>
                {brand}
            </div>
            <MenuButton
                onToggle={(val) => setIsOpen(val)}
                toggled={isOpen}
                className={styles.menuButton}
            />
            <div
                className={classNames([
                    styles.menu,
                    getHiddenClass()
                ])}
            >
                {children}
            </div>
        </div>
    );
};

export default Navbar;
