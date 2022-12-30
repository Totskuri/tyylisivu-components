import React from "react";
import type {RowProps} from "./Row.types";
import '../../../css/variables.css';
import styles from './Row.module.css';
import classNames from '../../../utils/classNames';

const Row = ({
    children,
    className = '',
    style = {},
}: RowProps) => {
    return (
        <div
            className={classNames([
                styles.row,
                className
            ])}
            style={style}
        >
            {children}
        </div>
    );
};

export default Row;
