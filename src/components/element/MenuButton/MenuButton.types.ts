import {MouseEventHandler} from "react";
import {ComponentProps} from "../../../types/ComponentProps";

export interface MenuButtonProps extends ComponentProps {
    onToggle: (toggled: boolean) => void;
    toggled?: boolean;
    disabled?: boolean;
}
