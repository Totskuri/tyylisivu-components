import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface AccordionProps extends ComponentProps {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    iconToggled?: React.ReactNode;
}
