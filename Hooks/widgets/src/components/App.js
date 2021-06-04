import React, { useState } from "react";
// import Accordion from "./Accordion";
// import Search from "./Search";
//import Dropdown from "./Dropdown";
import Translate from "./Translate";

// const items = [
//     {
//         title: "What is React?",
//         content: "React is a front end javascript framework",
//     },
//     {
//         title: "Why use React?",
//         content: "React is a favorite among engineers",
//     },
//     {
//         title: "How do you use React?",
//         content: "You use React by creating components",
//     },
// ];

// const options = [
//     {
//         label: "The color red",
//         value: "red",
//     },
//     {
//         label: "The color green",
//         value: "green",
//     },
//     {
//         label: "A shade of blue",
//         value: "blue",
//     },
// ];

const App = () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    label="Select a Color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null} */}
            <Translate />
        </div>
    );
};

export default App;
