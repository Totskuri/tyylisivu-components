import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface NavbarDropdownProps extends ComponentProps {
    children: React.ReactNode;
    text: string;
    href?: string;
    align?: 'center' | 'left' | 'right';
}
