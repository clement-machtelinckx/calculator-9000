import React from 'react';

const Over9000 = ({result}) => {
    if (Number(result) > 9000) {
       return <p>It's Over 9000!!</p>;
    } else {
        return null;
    }
}

export default Over9000;