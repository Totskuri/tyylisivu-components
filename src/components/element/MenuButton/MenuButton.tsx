import React from "react";
import type {MenuButtonProps} from "./MenuButton.types";
import '../../../css/variables.css';
import styles from './MenuButton.module.css';
import classNames from "../../../utils/classNames";

const MenuButton = ({
    onToggle,
    toggled = false,
    disabled = false,
    className = '',
    style = {},
}: MenuButtonProps) => {
    const getMenuBarToggledClass = (className: string) => toggled ? styles[className] : '';
    return (
        <button
            type="button"
            onClick={() => onToggle(!toggled)}
            className={classNames([
                styles.menuButton,
                className
            ])}
            style={style}
            disabled={disabled}
        >
            <div
                className={classNames([
                    styles.menuBar1,
                    getMenuBarToggledClass('menuBar1Toggled')
                ])}
            />
            <div
                className={classNames([
                    styles.menuBar2,
                    getMenuBarToggledClass('menuBar2Toggled')
                ])}
            />
            <div
                className={classNames([
                    styles.menuBar3,
                    getMenuBarToggledClass('menuBar3Toggled')
                ])}
            />
        </button>
    );
};

export default MenuButton;
