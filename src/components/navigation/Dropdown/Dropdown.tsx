import React, {useCallback, useRef, useState} from "react";
import type {DropdownTypes} from "./Dropdown.types";
import styles from './Dropdown.module.css';
import classNames from "../../../utils/classNames";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Dropdown = ({
    children,
    items,
    className = '',
    style = {},
}: DropdownTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClickOutside = useCallback(
    () => {
        if (isOpen) {
            setIsOpen(false);
        }
    },
    [isOpen]);
    useOnClickOutside(ref, handleClickOutside);
    const getOpenClass = () => isOpen ? styles.open : '';
    return (
        <div
            ref={ref}
            className={classNames([
                styles.dropdown,
                className
            ])}
            style={style}
        >
            <button
                type="button"
                className={styles.button}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {children}
            </button>
            <div
                className={classNames([
                    styles.content,
                    getOpenClass()
                ])}
            >
                {items}
            </div>
        </div>
    );
};

export default Dropdown;
