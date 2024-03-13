import React,{useState,useEffect,useRef} from 'react'
//useState() => re-renders the component when the state vlue changes

//useRef() => "use Reference" Does not cause re-renders when its value changes.When u want a comp to "remember" some info,but u dont want that info to trigger new renders

// 1.Accessing/Interacting with DOM elements
// 2.Handling Focus,Animations and Transition
// 3.managing Timers and Intervals
function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("Component Rendered");
        
    },[])

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor ="yellow";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor ="";
        inputRef2.current.style.backgroundColor ="yellow";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor ="";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="yellow";
    }


  return (
    <>
    <div>
    <button onClick={handleClick1}>
        Click Me 1
    </button>
    <input ref={inputRef1} /><br />

    <button onClick={handleClick2}>
        Click Me 2
    </button>
    <input ref={inputRef2} /><br />

    <button onClick={handleClick3}>
        Click Me 3
    </button>
    <input ref={inputRef3} /><br />
    </div>
    </>
  )
}

export default MyComponent