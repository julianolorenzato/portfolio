import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "top top"
        "bottom bottom";
    align-items: center;
    grid-gap: 30px;
    color: ${props => props.theme.colors.contrast};
    margin-bottom: 30px;
`

export const Top = styled.div`
    grid-area: top;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 30px;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 20px;

        li {
            margin-right: 20px;
            padding: 10px;
            border-radius: 10px;
            background: ${props => props.theme.colors.gradient};
        }
    }
`

export const Bottom = styled.div`
    grid-area: bottom;
    display: flex;
    justify-content: center;
`