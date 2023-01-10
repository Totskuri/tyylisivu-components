import React from "react";
import Badge from './Badge';
import {Story} from "@ladle/react";
import {BadgeProps} from "./Badge.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "data",
};

export const Default: Story<BadgeProps> = ({
    labels,
    className,
    style
}) => {
    return (
        <Badge
            labels={labels}
            className={className}
            style={style}
        />
    )
}

Default.storyName = "Badge";

Default.args = {
    labels: ['label1', 'label2', 'label3'],
    ...componentDefaults
};
