import React from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Row from "./Row";
import {RowProps} from "./Row.types";

export default {
    title: "layout",
};

export const Default: Story<RowProps> = ({
    children,
    className,
    style
}) => {
    return (
        <Row
            className={className}
            style={style}
        >
            {children}
        </Row>
    )
}

Default.storyName = "Row";

Default.args = {
    children: 'Row children',
    ...componentDefaults
};
