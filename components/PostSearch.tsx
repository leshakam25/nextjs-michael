'use client'
import React, {useState} from 'react';

type Props = {
    onSearch: (value: any[])=> void
}

const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState('')

    return (
        <form>
            <input
                type="search"
                placeholder={'search'}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">
                search
            </button>
        </form>
    );
};

export {PostSearch};