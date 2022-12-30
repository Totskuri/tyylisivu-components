import React from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Column from "./Column";
import {ColumnProps} from "./Column.types";

export default {
    title: "layout",
};

export const Default: Story<ColumnProps> = ({
    children,
    size,
    sizeMd,
    sizeSm,
    className,
    style
}) => {
    return (
        <Column
            size={size}
            sizeMd={sizeMd}
            sizeSm={sizeSm}
            className={className}
            style={style}
        >
            {children}
        </Column>
    )
}

Default.storyName = "Column";

Default.args = {
    children: 'Column children',
    size: 12,
    sizeMd: 12,
    sizeSm: 12,
    ...componentDefaults
};
