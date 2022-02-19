import { useTheme as useThemeOriginal } from "styled-components"
import { ThemeInterface } from "../themes/tecredi-blue"


const useTheme = () => {
    const theme = useThemeOriginal()
    return theme as ThemeInterface
}

export default useTheme