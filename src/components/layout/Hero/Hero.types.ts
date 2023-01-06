import React from "react";
import {ComponentProps} from "../../../types/ComponentProps";

export interface HeroProps extends ComponentProps {
    children: React.ReactNode;
    backgroundImage?: string;
    height?: undefined | 'default' | 'half' | 'full';
    overlay?: undefined | 'dark';
}
