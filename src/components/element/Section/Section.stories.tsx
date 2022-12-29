import React from "react";
import Section from './Section';
import {Story} from "@ladle/react";
import {SectionProps} from "./Section.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "element",
};

export const Default: Story<SectionProps> = ({
    children,
    className,
    style
}) => {
    return (
        <Section
            className={className}
            style={style}
        >
            {children}
        </Section>
    )
}

Default.storyName = "Section";

Default.args = {
    children: 'Section children',
    ...componentDefaults
};
