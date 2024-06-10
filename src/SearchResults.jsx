import React from 'react';
import { useState } from 'react';
import { Card } from 'reactstrap';

const SearchResults = () => {
    const [count, setCount] = useState(0);

    return (
        <Card>
            <h3>Click to log your visit</h3>
            <button onClick={() => setCount((count) => count + 1)}>
                visit # {count}
            </button>
        </Card>
    )
}

export default SearchResults;