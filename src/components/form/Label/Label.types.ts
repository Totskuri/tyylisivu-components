import React from "react";
import {ComponentProps} from "../../../types/ComponentProps";

export interface LabelProps extends ComponentProps {
    children: React.ReactNode;
    text?: string,
    disabled?: boolean;
}
