import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface NavbarItemProps extends ComponentProps {
    children: React.ReactNode;
    href: string;
}
