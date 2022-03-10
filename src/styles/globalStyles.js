import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        transition: all 1s;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.contrast};
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`
