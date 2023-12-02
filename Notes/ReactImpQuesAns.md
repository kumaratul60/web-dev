1.  What are React hooks? Explain the difference between useState and useEffect 🔍.

A1: React hooks are functions that allow you to use state and lifecycle features in functional components. useState is used to manage state, while useEffect is used to handle side effects like fetching data or subscribing to events.

```javascript
💡 Code Example:
const [count, setCount] = useState(0);

useEffect(() => {
 document.title = `Count: ${count}`;
}, [count]);

```

2. What is the Context API in React? How can it be used to manage global state 🧩 ?

A2: Context API provides a way to share data between components without passing it through props. It's useful for managing global state. You create a context using createContext and provide it at a higher level. Consumers can access the context using useContext.

```javascript
🌍 Code Example:
const ThemeContext = createContext();

function App() {
 return (
  <ThemeContext.Provider value="dark">
   <Component />
  </ThemeContext.Provider>
 );
}

function Component() {
 const theme = useContext(ThemeContext);
 // Use theme value here
}

```

3.  What are React render props? How do they enable component composition and code reusability ⚛️?

A3: Render props is a pattern where a component accepts a function as a prop and calls it to render content. It enables component composition and code reusability by allowing components to share their internal state or behavior with other components.

```javascript
🔄 Code Example:
function MouseTracker({ render }) {
 const [position, setPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
  const handleMouseMove = (event) => {
   setPosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
   window.removeEventListener('mousemove', handleMouseMove);
  };
 }, []);

 return render(position);
}

```

4. How can you optimize performance in a React application? Discuss techniques like memoization, code splitting, and lazy loading 🖥️.

A4: Performance optimization techniques include memoization with useMemo and useCallback to avoid unnecessary recalculations, code splitting to split the bundle into smaller chunks, and lazy loading to load components or resources only when needed.

```javascript

⚡️ Code Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
// Handle click event
}, []);

```

5. How does React's Virtual DOM work, and what are its advantages over the real DOM?

👉 Answer: React's Virtual DOM is a lightweight copy of the actual DOM. When state changes, React creates a new Virtual DOM representation and compares it with the previous one. Only the differences are updated in the real DOM, reducing the need for expensive DOM manipulations.

--javascript

6. Explain the role of keys in React lists and why they are essential.

👉 Answer: Keys help React identify each list item uniquely and efficiently update and re-render components when the list changes. They improve performance by minimizing re-renders and avoiding issues like incorrect component recycling.

```javascript

⚡️ Code Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
// Handle click event
}, []);

```

--

7. Explain the concept of higher-order components (HOCs) in React.

👉 Answer: Higher-order components are functions that take a component as an input and return an enhanced component with additional props or functionality. They are commonly used for code reuse, logic abstraction, and cross-cutting concerns.

```javascript
const withLogger = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    console.log("Component props:", props);
    return <WrappedComponent {...props} />;
  };

  return EnhancedComponent;
};

// Usage
const MyComponent = (props) => {
  // Component logic here
};

export default withLogger(MyComponent);
```

--

8. What is the significance of React Fragments, and when should you use them?

👉 Answer: React Fragments allow you to group multiple components without introducing an additional parent element in the DOM. They are useful when you need to return multiple elements from a component's render method.

```javascript
import React, { Fragment } from "react";

const MyComponent = () => {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </Fragment>
  );
};
```

9.  What is `Props Drilling` in React? How can you avoid that?

**Props drilling** in React refers to the process of passing props down through multiple levels of nested components. It happens when a component needs to pass data or functions to its child component, and then that child component needs to pass it further down to its own child component, and so on.

As the component hierarchy grows deeper, this can lead to passing props through several intermediate components, making the code less maintainable and potentially causing performance issues.

To avoid props drilling, you can use one of the following techniques:

0. **React Context API**: The Context API allows you to create a context that holds data or functions and make it available to all child components without explicitly passing it down as props. Components can access the context data directly from the provider.

1. **Using State Management Library like Redux**: Redux is a state management library that provides a centralized store accessible from any component. It allows components to retrieve and update data without the need to pass props through the entire component tree.

2. What is React's Context API, and how can you use it to manage global state?

👉 Answer: **React's Context API** provides a way to pass data through the component tree without having to pass props manually at every level. It enables efficient global state management in applications, allowing components to access and update shared data.

```javascript
// Creating a context
const MyContext = React.createContext();

// Using the context provider
const MyProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Consuming the context in a component
const MyComponent = () => {
  const { state, setState } = React.useContext(MyContext);
  // Use state and setState here
};
```

--

11. What are React Hooks, and how do they improve functional component functionality?

👉 Answer: React Hooks are functions that enable functional components to use state and other React features without writing a class. They make it easier to reuse logic and manage component state in functional components.

```javascript
import React, { useState } from "react"; // named import

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

--

12. What are `React's controlled and uncontrolled components`, and when should you use each?

👉 Answer: **Controlled components** have their state controlled by React through props and react to user input via event handlers.
**Uncontrolled components** store their state internally in the DOM and are controlled by the DOM itself.
The key difference between controlled and uncontrolled components in React is whether the form data is handled by React component state or by the DOM itself.

**Some key differences**:

- When to use controlled components:

  - Use controlled components when you need to have more control over the form elements and their behavior.
  - Useful when you want to perform validation or manipulate the input before updating the state.
  - Controlled components are usually preferred for forms because they allow controlling and validating user input.
  - Use controlled components when you need to control input validation and state changes. This is common for forms.

- When to use uncontrolled components:

  - Uncontrolled components can be useful when integrating React with non-React code or when you want to avoid unnecessary re-rendering.
  - They might be suitable for simple scenarios where you don't need to perform extensive validation or manipulation on the input.

  - Uncontrolled components are useful when you don't need to control input state or validation. For example, for file inputs or textarea inputs where it's not necessary to control every keystroke.
  - Use uncontrolled components when you don't need to control every state change and it's simpler not to deal with synthetic events, e.g. for file inputs.
  - Use uncontrolled components in scenarios where you prefer to let the DOM handle the form element's state, and you need to integrate with non-React code more seamlessly.

- Code example of a `controlled component`:

```javascript
import React, { useState } from "react";

const MyInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
```

```jsx
import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
};
```

13. What are different ways to call API?

Answer:

Different Ways to Fetch Data in React Js 🔥

use based on specific situation

- 🎉**Fetch method**

The fetch() method in JS is used to request to the server and load the information in the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

```javascript
function App() {

useEffect(() = {
fetch('https://site.com/"')
.then(response = response. json())
.then(json = console.log(json))
},[])

return (
<div> Different ways to fetch Data </div>
);
}


```

- **🎉Async-Await**

It is the preferred way of fetching the data from an API as it enables us to remove our then() callbacks and return asynchronously resolved data. In the async block, we can use Await function to wait for the promise.

```javascript

function App() {

useEffect(()=>{
dataAsync()
},[])

const dataAsync=  async () => {
try{
<!-- const res = await axios.get('https://site.com/"') -->
const res = await fetch('https://site.com/"')
const resJson = await res.json()
console. log(resJson)
}catch(err){
    console.log({err})
}
}
return <div>Different ways to fetch Data</div>
}


```

or

```javascript
function App() {
useEffect(() = {
(async () = {
try {
const result = await axios.get('https://site.com/"')
console. log(result.data)
} catch (error) {
console.error({error})
}
})()
})

return <div>Different ways to fetch Data</div>
}

```

- **🎉Axios library**

With Axios, we can easily send asynchronous HTTP requests to REST APIs & perform create, read, update and delete operations. Axios can be imported in plain JavaScript or with any library accordingly.

```javascript
function App() {

useEffect(() = {
axios.get("https://site.com")
.then((response) = console.log(response.data));
},[]);

return (
 <div>Different ways to fetch Data</div>
);
}

```

- **🎉Custom Hook**

It is basically a React component whose name will start with “use” like useFetch. It can use one or more React hooks inside them.

```javascript
const useFetch = (url) =>{
const [isLoading, setIsLoading] = useState(false)
const [apiData, setApiData] =  useState(null)
const [serverError, setServerError] = useState(null)

useEffect(() = {

setIsLoading(true)
const fetchData = async () = {

try {
const resp = await axios.get(url)
const data = await resp?.data
setApiData(data)
setIsLoading(false)

} catch (error) {
setServerError(error)
setIsLoading(false)
}
}

fetchData()
}, [url])
return { isLoading,apiData,serverError }

}

```

- **🎉Usages in the component**

Import the useFetch hook and pass the URL of the API endpoint from where you want to fetch data.
Now Just like any React hook we can directly use our custom hook to fetch the data.

```javascript
import useFetch from "./useFetch";

const App = () => {
const { islLoading, serverError, apiData } = useFetch('https://site.com"')

return (

<div>
<h2>API data</h2>
{isLoading && <span>Loading.....</span>}
{!islLoading && serverError ? (
<span>Error in fetching data ... </span
): (
<span>{JSON.stringify(apiData)} </span>
)})
</div>
)
}

```

- **🎉React Query library**

With this we can achieve a lot more than just fetching data. It provides support for caching and refetching, which impacts the overall user experience by preventing irregularities and ensuring our app feels faster.

```javascript
import axios from 'axios'
import { useQuery } from 'react-query'

function App() {
const { isLoading, error, data } =

useQuery('posts', () = axios('https://site.com'))

console. log(data)

return <div>Different ways to fetch data</div>
}

```

14. How can you optimize React performance using code splitting?

👉 Answer: Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand. React.lazy and Suspense are used to achieve code splitting, which can significantly reduce the initial loading time of your application.

```javascript
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
```

--

15. How can you handle side effects in React using useEffect?

👉 Answer: The useEffect hook allows you to perform side effects in functional components. You can use it to handle tasks like data fetching, subscriptions, or manually changing the DOM.

```javascript

import React, { useEffect, useState } from 'react';

const MyComponent = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  // Fetch data from an API
  fetch('https://lnkd.in/d5PWjfXF')
   .then((response) => response.json())
   .then((data) => setData(data));
 }, []);

 return (
  // Display data here
 );
};

```

-- 16. How can you handle form data in React components?

👉 Answer: You can manage form data using controlled components, where form elements are bound to state and updated through event handlers.

- Code example of a controlled input:

```javascript
import React, { useState } from "react";

const MyForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with 'inputValue'
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

17. 🎆 **Difference between Real DOM and Virtual DOM**

🌕 **Real DOM**

- DOM manipulation is very expensive
- There is too much memory wastage
- It updates Slow
- It can directly update HTML
- Creates a new DOM if the element updates.
- It allows us to directly target any specific node
  (HTML element)
- It represents the Ul of your application

🌕 **Virtual DOM**

- DOM manipulation is very easy
- No memory wastage
- It updates fast
- It can’t update HTML directly
- Update the JSX if the element update
- It can produce about ~200,000 Virtual DOM Nodes / Second.
- It is only a virtual representation of the DOM

## [know more about DOM & Virtual-DOM, BOM, CSSOM](https://atulkawasthi.medium.com/what-is-the-dom-virtual-dom-afea2de36a00)
