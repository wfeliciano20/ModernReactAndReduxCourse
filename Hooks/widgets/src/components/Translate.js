import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "hindi",
        value: "hi",
    },
    {
        label: "English",
        value: "en",
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    return (
        <div>
            <Dropdown
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
        </div>
    );
};
export default Translate;
