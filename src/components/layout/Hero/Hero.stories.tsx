import React from "react";
import {Story} from "@ladle/react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import Hero from "./Hero";
import {HeroProps} from "./Hero.types";

export default {
    title: "layout",
};

export const Default: Story<HeroProps> = ({
    children,
    backgroundImage,
    height,
    overlay,
    className,
    style
}) => {
    return (
        <Hero
            backgroundImage={backgroundImage}
            height={height}
            overlay={overlay}
            className={className}
            style={style}
        >
            {children}
        </Hero>
    )
}

Default.storyName = "Hero";

Default.args = {
    children: 'Hero children',
    backgroundImage: 'none',
    height: undefined,
    overlay: undefined,
    ...componentDefaults
};

Default.argTypes = {
    height: {
        options: ['', 'default', 'half', 'full'],
        control: {type: "select"},
        defaultValue: undefined,
    },
    overlay: {
        options: ['', 'dark'],
        control: {type: "select"},
        defaultValue: undefined,
    },
};
