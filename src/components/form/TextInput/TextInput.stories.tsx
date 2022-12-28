import React, {useState} from "react";
import TextInput from './TextInput';

export const Default = () => {
    const [value, setValue] = useState('');
    return (
        <TextInput
            value={value}
            onChange={(val) => setValue(val)}
        />
    )
}
