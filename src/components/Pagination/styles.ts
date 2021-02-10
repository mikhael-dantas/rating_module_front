import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 700px;

    .pagination {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        align-items: center;
        justify-content: center;
    }

    .pagination h2 {
        padding: .5rem 1.5rem;
        border: 2px solid black;
        margin: .5rem;
        cursor: pointer;
    }
`;
