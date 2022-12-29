import React from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Container from "./Container";
import {ContainerProps} from "./Container.types";

export default {
    title: "layout",
};

export const Default: Story<ContainerProps> = ({
    children,
    className,
    style
}) => {
    return (
        <Container
            className={className}
            style={style}
        >
            {children}
        </Container>
    )
}

Default.storyName = "Container";

Default.args = {
    children: 'Container children',
    ...componentDefaults
};
