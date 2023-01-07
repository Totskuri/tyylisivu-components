import React, {useState} from "react";
import {Story} from "@ladle/react";
import {TextareaProps} from "./Textarea.types";
import Textarea from "./Textarea";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "form",
};

export const Default: Story<TextareaProps> = ({
    placeholder,
    readOnly,
    autoFocus,
    maxLength,
    rows,
    className,
    style,
}) => {
    const [value, setValue] = useState('');
    return (
        <Textarea
            value={value}
            onChange={(val) => setValue(val)}
            onSubmit={() => alert('onSubmit')}
            placeholder={placeholder}
            readOnly={readOnly}
            autoFocus={autoFocus}
            maxLength={maxLength}
            rows={rows}
            className={className}
            style={style}
        />
    )
}

Default.storyName = "Textarea";

Default.args = {
    placeholder: '',
    readOnly: false,
    autoFocus: false,
    maxLength: 524288,
    rows: 4,
    ...componentDefaults
};
