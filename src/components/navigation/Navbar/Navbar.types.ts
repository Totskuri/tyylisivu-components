import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface NavbarProps extends ComponentProps {
    children: React.ReactNode;
    brand?: React.ReactNode;
    isOpenCallback?: (isOpen: boolean) => void
}
