import styled from "styled-components";

export const Container = styled.div`
    .poke-form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
    }
    label + label {
        margin-top: .9rem;
    }
    .description textarea {
        width: 20rem;
    }
    .submit-button {
        margin-top: 1.5rem;
    }
`