import React from "react";
import type {ContainerProps} from "./Container.types";
import styles from './Container.module.css';
import classNames from '../../../utils/classNames';

const Container = ({
    children,
    className = '',
    style = {},
 }: ContainerProps) => {
    return (
        <div
            className={classNames([
                styles.container,
                className
            ])}
            style={style}
        >
            {children}
        </div>
    );
};

export default Container;
