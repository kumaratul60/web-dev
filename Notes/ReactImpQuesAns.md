1.  What are React hooks? Explain the difference between useState and useEffect 🔍.

A1: React hooks are functions that allow you to use state and lifecycle features in functional components. useState is used to manage state, while useEffect is used to handle side effects like fetching data or subscribing to events.

```
💡 Code Example:
const [count, setCount] = useState(0);

useEffect(() => {
 document.title = `Count: ${count}`;
}, [count]);

```

2. What is the Context API in React? How can it be used to manage global state 🧩 ?

A2: Context API provides a way to share data between components without passing it through props. It's useful for managing global state. You create a context using createContext and provide it at a higher level. Consumers can access the context using useContext.

```
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

```
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

```

⚡️ Code Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
// Handle click event
}, []);

```

5. How does React's Virtual DOM work, and what are its advantages over the real DOM?

👉 Answer: React's Virtual DOM is a lightweight copy of the actual DOM. When state changes, React creates a new Virtual DOM representation and compares it with the previous one. Only the differences are updated in the real DOM, reducing the need for expensive DOM manipulations.

--

6. Explain the role of keys in React lists and why they are essential.

👉 Answer: Keys help React identify each list item uniquely and efficiently update and re-render components when the list changes. They improve performance by minimizing re-renders and avoiding issues like incorrect component recycling.

```

⚡️ Code Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
// Handle click event
}, []);

```

--

7. Explain the concept of higher-order components (HOCs) in React.

👉 Answer: Higher-order components are functions that take a component as an input and return an enhanced component with additional props or functionality. They are commonly used for code reuse, logic abstraction, and cross-cutting concerns.

```

const withLogger = (WrappedComponent) => {
const EnhancedComponent = (props) => {
console.log('Component props:', props);
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

```

import React, { Fragment } from 'react';

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

```

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

```

import React, { useState } from 'react'; // named import

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

👉 Answer: **Controlled components** have their state controlled by React through props and react to user input via event handlers. Uncontrolled components store their state internally in the DOM and are controlled by the DOM itself.

```

Code example of a controlled component:

import React, { useState } from 'react';

const MyInput = () => {
const [value, setValue] = useState('');

const handleChange = (event) => {
setValue(event.target.value);
};

return (
<input type="text" value={value} onChange={handleChange} />
);
};

```

13. What are different ways to call API?

Answer:

Different Ways to Fetch Data in React Js 🔥

use based on specific situation

- 🎉**Fetch method**

The fetch() method in JS is used to request to the server and load the information in the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

```
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

```

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

```
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

```
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

```
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

```
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
})
</div>
)
}

```

- **🎉React Query library**

With this we can achieve a lot more than just fetching data. It provides support for caching and refetching, which impacts the overall user experience by preventing irregularities and ensuring our app feels faster.

```
import axios from 'axios'
import { useQuery } from 'react-query'

function App() {
const { isLoading, error, data } =

useQuery('posts', () = axios('https://site.com'))

console. log(data)

return <div>Different ways to fetch data</div>
}

```

--
