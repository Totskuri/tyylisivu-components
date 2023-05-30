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
 * @param position
 * @param iconClose
 * @param className
 * @param style
 * @constructor
 */
const Drawer = ({
    children,
    isOpen,
    handleClose,
    position = 'left',
    iconClose = undefined,
    className = '',
    style = {},
}: DrawerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, handleClose);
    const getOpenClass = () => isOpen ? styles.open : '';
    const getPositionClass = () => styles[position];
    return (
        <div
            ref={ref}
            className={classNames([
                styles.drawer,
                getOpenClass(),
                getPositionClass(),
                className
            ])}
            style={style}
        >
            <div className={styles.body}>
                {iconClose && (
                    <div className={styles.iconContainer}>
                        <button
                            type="button"
                            onClick={handleClose}
                            className={styles.closeButton}
                            aria-label="Close drawer"
                        >
                            {iconClose}
                        </button>

                    </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default Drawer;
