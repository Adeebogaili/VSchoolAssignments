import React, {useState} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider (props) {
    const [color, setColor] = useState("Light")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "Light" ? "Dark" : "Light")
    }

    return (
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>        
    )
}

export {ThemeContext, ThemeContextProvider}