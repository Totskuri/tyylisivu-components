import React from "react";
import type {GapProps} from "./Gap.types";

/**
 * @param width
 * @param height
 * @param className
 * @param style
 * @constructor
 */
const Gap = ({
    width = 5,
    height = 5,
    className = '',
    style = {},
}: GapProps) => {
    return (
        <div
            className={className}
            style={{
                paddingLeft: width,
                paddingTop: height,
                ...style
            }}
        />
    );
};

export default Gap;
