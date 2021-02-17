import React from 'react';
import Link from 'next/link'

import { Container } from './styles';

interface PaginationProps {
    pages: number,
    resource: string,
    currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({pages, resource, currentPage}) => {
    const array = Array.from(Array(pages).keys())
    return <Container>
        <div className='pagination'>
            {array.map(page => {
                let truePage = page + 1
                return (
                    <Link key={truePage} href={resource + truePage}>
                        <a style={truePage == currentPage ? {background: 'yellow'} : {}}>
                            {truePage}
                        </a> 
                    </Link>
                )
            })}
        </div>
    </Container>;
}

export default Pagination;