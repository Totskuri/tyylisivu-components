import React from "react";
import type {ColumnProps} from "./Column.types";
import '../../../css/variables.css';
import styles from './Column.module.css';
import classNames from '../../../utils/classNames';

const Column = ({
    children,
    size = 12,
    sizeMd = 12,
    sizeSm = 12,
    className = '',
    style = {},
}: ColumnProps) => {
    const getSizeClass = () => styles[`size-${size}`];
    const getSizeMdClass = () => styles[`size-md-${sizeMd}`];
    const getSizeSmClass = () => styles[`size-sm-${sizeSm}`];
    return (
        <div
            className={classNames([
                getSizeClass(),
                getSizeMdClass(),
                getSizeSmClass(),
                className
            ])}
            style={style}
        >
            {children}
        </div>
    );
};

export default Column;
