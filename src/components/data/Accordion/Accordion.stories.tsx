import React from "react";
import {Story} from "@ladle/react";
import {AccordionProps} from "./Accordion.types";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Accordion from "./Accordion";

export default {
    title: "data",
};

export const Default: Story<AccordionProps> = ({
    title,
    children,
    className,
    style
}) => {
    return (
        <Accordion
            title={title}
            className={className}
            style={style}
        >
            {children}
        </Accordion>
    )
}

Default.storyName = "Accordion";

Default.args = {
    title: 'Click me!',
    children: 'children',
    ...componentDefaults
};
