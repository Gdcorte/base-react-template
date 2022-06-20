import { ThemeProvider } from 'styled-components'
import {useSelector} from 'react-redux'
import {storeType} from '../redux/store'

import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { getTheme } from '@gdcorte/react-core-components'

interface ThemeProps {
    children: ReactNode
}

const ThemedApp: FunctionComponent<ThemeProps> = ({ 
    children,
}) => {

    const settings = useSelector( (state: storeType)  => state.settings )
    const [currentTheme, setcurrentTheme] = useState(getTheme())
    
    // Ensures our theme will update accordingly
    useEffect(() => {
        setcurrentTheme(
            getTheme(
                settings.theme + settings.color
            )
        )
    }, [settings.color, settings.theme])
    
    return (
        <ThemeProvider theme={ currentTheme }>
            {children}
        </ThemeProvider>
    )
}

export default ThemedApp


