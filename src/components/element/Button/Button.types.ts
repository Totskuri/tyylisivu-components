import React, {MouseEventHandler} from "react";
import {ComponentProps} from "../../../types/ComponentProps";

export interface ButtonProps extends ComponentProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    variation?: 'default' | 'primary' | 'secondary' | 'transparentDark'
        | 'transparentLight' | 'textDark' | 'textLight';
    disabled?: boolean;
}
