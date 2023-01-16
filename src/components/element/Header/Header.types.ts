import React from "react";
import {ComponentProps} from "../../../types/ComponentProps";

export interface HeaderProps extends ComponentProps {
    children: React.ReactNode;
    isFixed?: boolean;
}
