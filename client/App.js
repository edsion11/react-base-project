import React from 'react';

const App = () => {
    const handleOnClick = () => {
        console.log('hello', window);
    };
    return (
        <div>
            Hello
            <button onClick={handleOnClick}>hello</button>
        </div>
    );
};

export default App;
