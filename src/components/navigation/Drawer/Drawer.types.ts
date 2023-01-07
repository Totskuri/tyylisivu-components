import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface DrawerProps extends ComponentProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}
