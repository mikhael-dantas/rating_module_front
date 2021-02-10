import React from 'react';

import { Container } from './styles';

interface PaginationProps {
    pages: number,
    callback: Function,
    currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({pages, callback, currentPage}) => {
    const array = Array.from(Array(pages).keys())
    return <Container>
        <div className='pagination'>
            {
                array.map(page => {
                    let truePage = page + 1
                    return (<h2 key={truePage} onClick={() => callback(truePage)}>{truePage}</h2>)
                })
            }
        </div>
    </Container>;
}

export default Pagination;