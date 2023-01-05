import React from "react";
import type {ColumnsProps} from "./Columns.types";
import '../../../css/variables.css';
import styles from './Columns.module.css';
import classNames from '../../../utils/classNames';

/**
 * @param children
 * @param className
 * @param style
 * @constructor
 */
const Columns = ({
    children,
    className = '',
    style = {},
}: ColumnsProps) => {
    return (
        <div
            className={classNames([
                styles.columns,
                className
            ])}
            style={style}
        >
            {children}
        </div>
    );
};

export default Columns;
