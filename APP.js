import React, { useState, useEffect } from 'react';

// 1. PROPS Example: A simple child component that receives a name via props
const Greeting = (props) => {
    return <h2 > Welcome to my Assessment, { props.name }! < /h2>;
};

const App = () => {
    // 2 & 3. STATE and useState Example: Creating a counter
    const [count, setCount] = useState(0);

    // 4. useEffect Example: Updating the browser tab title whenever the count changes
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("Count changed to:", count);
    }, [count]); // The [count] array means this effect only runs when 'count' changes

    return ( <
        div style = {
            { padding: '20px', fontFamily: 'Arial' } } >

        { /* Passing "Bro" as a prop to the Greeting component */ } <
        Greeting name = "Bro" / >

        <
        h3 > Counter App to demonstrate State < /h3> <
        p > Current Count: < strong > { count } < /strong></p >

        { /* Updating state when the button is clicked */ } <
        button onClick = {
            () => setCount(count + 1) }
        style = {
            { padding: '10px', fontSize: '16px', cursor: 'pointer' } } >
        Click me to increase count <
        /button>

        <
        p style = {
            { marginTop: '20px', color: 'gray' } } >
        <
        em > Notice the browser tab title changing as you click!That is useEffect in action. < /em> <
        /p> <
        /div>
    );
};

export default App;