import React from "react";
import type {ColumnProps} from "./Column.types";
import '../../../css/variables.css';
import styles from './Column.module.css';
import classNames from '../../../utils/classNames';

/**
 * @param children
 * @param size
 * @param sizeMd
 * @param sizeSm
 * @param className
 * @param style
 * @constructor
 */
const Column = ({
    children,
    size = undefined,
    sizeMd = undefined,
    sizeSm = undefined,
    className = '',
    style = {},
}: ColumnProps) => {
    const getSizeClass = () => size ? styles[`size-${size}`] : '';
    const getSizeMdClass = () => sizeMd ? styles[`size-md-${sizeMd}`] : '';
    const getSizeSmClass = () => sizeSm ? styles[`size-sm-${sizeSm}`] : '';
    return (
        <div
            className={classNames([
                styles.column,
                getSizeClass(),
                getSizeMdClass(),
                getSizeSmClass(),
                className
            ])}
            style={style}
        >
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Column;
