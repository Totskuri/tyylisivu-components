import React, {useRef} from "react";
import type {DrawerProps} from "./Drawer.types";
import '../../../css/variables.css';
import styles from './Drawer.module.css';
import classNames from "../../../utils/classNames";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

/**
 * @param children
 * @param isOpen
 * @param handleClose
 * @param className
 * @param style
 * @constructor
 */
const Drawer = ({
    children,
    isOpen,
    handleClose,
    className = '',
    style = {},
}: DrawerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, handleClose);
    const getOpenClass = () => isOpen ? styles.open : '';
    return (
        <div
            ref={ref}
            className={classNames([
                styles.drawer,
                getOpenClass(),
                className
            ])}
            style={style}
        >
            {children}
        </div>
    );
};

export default Drawer;
