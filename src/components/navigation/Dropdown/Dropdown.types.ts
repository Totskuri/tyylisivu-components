import {ComponentProps} from "../../../types/ComponentProps";
import React from "react";

export interface DropdownTypes extends ComponentProps {
    children: React.ReactNode;
    items: React.ReactNode;
}
