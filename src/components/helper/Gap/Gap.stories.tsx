import React from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Gap from "./Gap";
import {GapProps} from "./Gap.types";

export default {
    title: "helper",
};

export const Default: Story<GapProps> = ({
    width,
    height,
    className,
    style
}) => {
    return (
        <Gap
            width={width}
            height={height}
            className={className}
            style={style}
        />
    )
}

Default.storyName = "Gap";

Default.args = {
    width: 5,
    height: 5,
    ...componentDefaults
};
