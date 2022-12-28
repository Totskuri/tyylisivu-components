import React, {useState} from "react";
import NumberInput from './NumberInput';

export const Default = () => {
    const [value, setValue] = useState(0);
    return (
        <NumberInput
            value={value}
            onChange={(val) => setValue(val)}
        />
    )
}
