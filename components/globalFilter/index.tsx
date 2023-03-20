import React from 'react'
import { GlobalFilter, InputContainer } from './style'

interface Props {
    filter: string
    setFilter(string: string): void
}

const globalFilter: React.FC<Props> = ({ filter, setFilter }) => {
    return (
        <GlobalFilter>
            <span>Filtrar:</span>
            <InputContainer>
                <input type="text" onChange={e => setFilter(e.target.value)} />
            </InputContainer>
        </GlobalFilter>
    )
}

export default globalFilter
