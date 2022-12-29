import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface DropdownProps extends ComponentProps {
    children: React.ReactNode;
    items: React.ReactNode;
    align?: 'center' | 'left' | 'right';
}
