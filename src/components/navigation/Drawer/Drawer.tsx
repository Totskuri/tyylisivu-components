import React, {useRef} from "react";
import type {DrawerProps} from "./Drawer.types";
import styles from './Drawer.module.css';
import classNames from "../../../utils/classNames";
import {CloseIcon} from "../../../utils/icons";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

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
            <div className={styles.top}>
                <button
                    type="button"
                    onClick={handleClose}
                    className={styles.close}
                >
                    <CloseIcon />
                </button>
            </div>
            {children}
        </div>
    );
};

export default Drawer;
