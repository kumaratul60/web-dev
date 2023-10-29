💡🔥 Top REACT Interview questions 💼🎯

DO NOT go to Interview without preparing for them !!

1. How does React Fiber improve performance in React applications?

   => React Fiber is the new reconciler/renderer layer introduced in React 16. It rewrites the fundamental algorithm used to reconcile DOM elements and virtual DOM nodes in React. Fiber allows splitting rendering work into chunks using fibers which makes rendering incremental.

2. Explain the concept of code splitting and its benefits in React.

   => Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand. This can significantly improve the initial load time of your application. Code splitting is achieved using React.lazy and Suspense. The key benefits are:

- It improves the initial load time of the app since the app loads faster by splitting code bundles.

3. What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?

- Server side Rendering is a process where we render our application on the server, then send it back as HTML markup which can be rendered into DOM.
- Client side Rendering renders the application entirely on the client side using JavaScript. The initial load is faster as we don't need to wait for server response. SEO is not good as bots can't render JS.
  Some key differences include:
- Server side rendering generates HTML on the server and sends it to the client. Client side rendering relies on the client to generate HTML using JS after page load.
- With server side rendering, the initial response contains fully rendered and hydrated HTML, resulting in faster perceived page loads. However, subsequent navigation will not be as fast as content needs to be rendered on each request.
- Server side rendering allows for better SEO as search engines can render the HTML output. Client side rendering results may not be indexed by search engines initially.
- Server side rendering requires more development effort since you need to render pages on the server as well as the client. It also requires additional server infrastructure.
- With server side rendering, subsequent navigations are slower than client side rendering because the server has to generate the HTML on every request rather than the client generating it instantly.

4. Describe the concept of render props and its use cases in React.

   Render props is a technique for sharing code between React components using a prop whose value is a function. It is also called a "children as a function" component.
   A common use case is to create reusable components that abstract common patterns and behaviors behind an API.

5. How can you optimize the rendering of large lists in React?

   Some techniques to optimize rendering of large lists in React include:

- Using the key prop on list items to help React identify which items have changed, been added or removed. This avoids unnecessary re-renders.
- Virtualizing the list using libraries like react-window or react-virtualized so that only elements that are visible on screen are rendered.

```javascript
import { FixedSizeList } from "react-window";
```

6. Explain the concept of memoization and its importance in React.

   Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
   Memoization is important in React because it helps prevent expensive re-renders by returning cached values when the inputs haven't changed. This can improve performance in React applications, especially for pure components that are expensive to re-render unnecessarily.

7. What is the purpose of the useEffect() hook in React and how does it work?

   The useEffect hook allows you to perform side effects in your components. It works similarly to componentDidMount, componentDidUpdate and componentWillUnmount combined.

8. How does React handle routing and navigation?

   React handles routing and navigation using third-party libraries like React Router. React Router allows you to map routes to your React components and handle navigation between views in a React application.
   `import { BrowserRouter as Router, Routes, Route,Link, useNavigation } from 'react-router-dom';`

9. How can you handle asynchronous operations in React using async/await?

   You can handle asynchronous operations in React using async/await which makes asynchronous code look synchronous.

10. Explain the concept of the Context API in React and its benefits?

    The Context API is a way to share values like state, functions between components without having to explicitly pass props down through multiple levels of the component tree. It allows components to access data stored in the context from anywhere within the component tree without passing props.

11. What is the role of higher-order components (HOC) in React and how can you implement them?

    Higher-order components (HOCs) are a pattern in React for reusing component logic. HOCs are functions that take a component as an argument and return a new component.
    A HOC accepts a component and returns a new component with additional functionality.

12. Describe the concept of controlled and uncontrolled components in React forms.

    Controlled components are form elements whose values are controlled by React components using state. For example, a text input whose value is stored in state. Uncontrolled components are form elements whose values are not controlled by React components.

13. How does React handle state management in large-scale applications?

    React supports several patterns for state management in large applications:

- React Context API: Allows passing data through the component tree without having to pass props down manually at every level. Useful for global state that needs to be accessed throughout the app.
- React Redux: A predictable state container for JavaScript apps. Allows managing global state in a central Redux store that React components can subscribe to.
- MobX: A state management library that makes it easier to observe and respond to state changes in React applications. Uses observables and reactions to manage state.
- React Query: A library for fetching, caching and updating asynchronous data in React applications. Handles caching, refetching on interval and updating UI as data changes.

14. Explain the concept of suspense in React and its use cases.

    Suspense in React allows components to specify that they need something before they can render. This allows React to render a loading state until the needed data is available. Some common use cases include:

- Data fetching: A component can specify that it needs data from an asynchronous API call before rendering. This prevents the component from rendering until the data is available.
- Code-splitting: A component can specify that it needs code chunks from dynamic imports to be resolved before rendering. This allows React to show a loading state for code-split bundles.
  The Suspense component allows specifying loading UI.

15. What are the different ways to handle side effects in React using hooks?

16. Explain the concept of reconciliation in React.

    Reconciliation is the process React uses to sync the UI with the data. When the component re-renders, React compares the new element tree with the previous one and determines the minimum set of operations needed to transform one tree into another to bring.

17. How can you prevent unnecessary re-renders in React?

    Some ways to prevent unnecessary re-renders in React include:

- Using React.memo on function components to prevent re-rendering if props haven't changed
- Using shouldComponentUpdate lifecycle method in class components to do a shallow comparison of props and state and prevent re-rendering if they haven't changed
- Implementing useMemo hook to memoize expensive calculations

18. What are the different ways to style components in React?

    The main ways to style components in React are:

- Inline styles: Passing a style object to the style prop.
- CSS Modules: Allow local scoped CSS by automatically creating unique class names.
- Styled Components: Allow writing actual CSS code to style components by using template literals to style the component.
- Sass/Less
- CSS Frameworks (e.g., Tailwind CSS)

19. What are the key considerations when implementing a scalable React application?

    Some key considerations include:

- Code modularity through separation of concerns and single responsibility components
- Scalable data fetching and caching strategies using libraries like React Query
- Implementing reusable React components that encapsulate data and behavior
- Normalizing data shape across components to avoid duplication
- Creating common base/abstract components to share logic and enforce consistency
- Defining interfaces for data and request shape

20. Describe the concept of reusability, modularity, and testability in React components?

- Reusability in React refers to the ability to reuse component logic by building reusable components that are modular and can be used throughout the application. This reduces duplication and makes the code more maintainable.
- Reusability refers to code reuse within an app or between apps.

- Modularity in React refers to separating components into discrete, independent pieces responsible for well-defined sections of UI and logic. This makes components highly cohesive yet loosely coupled, which improves reusability, maintainability and testability.
- Modularity is about separating parts into smaller pieces so they're easier to work with and maintain.
- Modular components are isolated and encapsulated, making them highly reusable.
  Their implementation details are abstracted away, allowing them to be reused without dependencies on the rest of the application.
  This modularity also improves testability since components can be tested independently without needing to test the entire application.
- Modularity promotes separation of concerns which makes components highly cohesive yet loosely coupled. This loose coupling enables independent development, testing and reuse of components.

- Testability means being able to write tests against your components without having to mock out all their dependencies.
- Testability relates to how easy it is to verify that a module works as expected.
  Some key aspects of testability in React components include:

React components should be designed to be modular, reusable and testable. This can be achieved by:

- Encapsulating data and behavior into the component to make it self-contained.
- Making components as stateless as possible by lifting state up.
- Defining clear interfaces for data and callbacks to avoid tight coupling.
- Making the component logic reusable through props rather than internal state.
- Define and export interfaces for component props and state
- Create reusable base/abstract components to share common logic and enforce consistency
- Isolating component logic from other logic/components to test behavior in isolation
- Avoiding reliance on the actual DOM by mocking render output.

21. What is Lifting State Up in React?

Lifting state up refers to the process of moving shared state from child components to their parent component so it can be passed down as props instead of trying to manage it locally in multiple child components.

    Lifting state up in React refers to the process of moving shared state to the closest common parent of the components that need it, instead of maintaining it in their individual components. This prevents passing props down through multiple levels of components and makes the components.

Lifting state means moving shared state higher in the tree. It's done by passing down callback functions via props instead of sharing state directly.

Lifting state up is useful when multiple child components need to share the same state. It reduces prop drilling by eliminating the need to pass props from the parent to each child down the component tree. Instead, the shared state is maintained at the parent.

Some key benefits of lifting state up include:

- Centralizes mutation of shared state in one place rather than many components having to manage it.
- Child components no longer need to know about parent's state - they simply receive props from the parent. This makes them more modular and reusable.
- It reduces prop drilling by eliminating the need to pass props from the parent to each child down the component tree. Instead, the shared state is maintained at the parent.
- Child components can trigger state updates in the parent via callbacks passed to them as props, without needing direct access to the parent's state. This improves encapsulation and loose coupling between parent and children.
- Child components no longer need to know about parent's state - they simply receive props from the parent. This makes them more modular and reusable.
- Lifting state up prevents passing props through multiple levels and makes the data flow unidirectional.
- It centralizes mutation of shared state in one place rather than many components having to manage it separately. This avoids inconsistent states.
- Child components no longer need to know about parent's state - they simply receive props from the parent. This makes them more modular and reusable.
- Lifting state up prevents unnecessary re-renders of child components since their props will remain stable if the shared state is in the parent component.
- Lifting state up can help avoid bugs caused by different child components trying to independently manage the same state. It centralizes mutation of shared state in one place rather than many components having to manage it separately. This avoids inconsistent states.
- Lifting state up improves performance by preventing unnecessary re-renders in child components when the shared state is updated in the parent.
- Lifting state up also simplifies debugging and improves code readability by keeping shared state in one place rather than spread across many components.
- Lifting state up prevents unnecessary re-renders of child components since their props will remain stable if the shared state is in the parent component.
- Lifting state up also simplifies component logic by consolidating state management to the parent rather than requiring multiple child components to coordinate changing state. This makes components easier to understand and maintain.
- Lifting state up improves performance by avoiding unnecessary prop drilling and re-renders of child components when the shared state is updated in the parent.

22. What is React context?

    React context provides a way to pass data through the component tree without having to pass props down manually at every level. It allows certain data like authenticated user, theme, or preferred language to be accessed by any component in the tree without passing props
    Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

23. What are different ways to add CSS in your app?

24. What is Hot Module Replacement?

    Hot Module Replacement (HMR) is a webpack feature that allows reloading modules during development without full page refreshes. It allows for faster development workflows by only updating changed modules instead of the entire page.

25. What is the use of Parcel, Vite, Webpack?

    Parcel is a bundler for modern front end applications. It has no configuration and works with a wide range of languages out of the box. Parcel aims to have zero configuration and handle a variety of use cases automatically.
    Vite is another bundler for modern front-end development. It is built on top of Rollup and aims to provide better developer experience and build performance compared to tools like webpack. Some key features of Vite include:

26. How does create-react-app work?

- create-react-app is a CLI tool to initialize React projects quickly with no build configuration. It sets up the project with Babel, Webpack, ESLint and other tools preconfigured.
- It works by scaffolding an initial project structure and including build dependencies and tools preconfigured with recommended settings.
- It also installs all necessary React dependencies and sets up a dev server and live reloading out of the box. Under the hood, it uses Webpack and Babel for bundling and transpiling JSX respectively.
- It also sets up ESLint for linting JavaScript files and includes React specific linting rules. The build scripts like start, build are also preconfigured to work out of the box.
- create-react-app handles all the configuration and setup so developers can focus on writing code rather than setting up build tools. It abstracts away complexity and provides a standardized build setup that works across different projects.

27. What is Tree Shaking?

    Tree shaking is a form of dead code elimination. It refers to the ability that modern bundlers have to analyze import and export statements to determine unused code.

28. Difference b/w dependency and devDependency?

    Dependency is a package that your application requires to execute, while devDependency is a package that is only needed during development and testing. Dependencies will be installed and included in production builds, while devDependencies will only be installed during development and excluded from production.

29. What is npx and npm?

    npx is a package runner tool that comes bundled with npm. It allows you to run npm packages without needing to install them globally.
    npx calls npm to install and run a package script. npm is the package manager for JavaScript and the npm registry is where JavaScript packages are published and installed from.

30. Difference b/w package .json and package-lock .json

    The package.json file describes the project and defines dependencies. The package-lock.json file is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated.

31. Difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent());

    console.log(<HeaderComponent/>) logs the JSX element to the console without rendering it.
    console.log(HeaderComponent()) calls the component function to render it and logs the rendered output.

32. What is React.Fragment?

    React.Fragment allows grouping a list of children without adding extra nodes to the DOM. It is used as a replacement for unnecessary divs in the rendered output.
    React.Fragment wraps the children without adding extra nodes to the DOM.

33. What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?

    => The purpose of the dependency array in useEffect is to specify which values need to trigger a re-render of the effect. If the dependency array is omitted, the effect will only run after the first render.

34. What if 2 components are given will the state change in one component will effect the other component’s state (child)?

    => The state change in one component will not directly affect the state of another component. In React, state is local to each component and the parent component must pass the state value down as a prop to the child component to share state between them.

35. What is the use of return in useEffect?

36. Difference b/w client-side routing and server-side routing?

    => Client-side routing happens entirely on the frontend using JavaScript. Each route change happens without talking to the server, allowing for faster navigation. Server-side routing happens on every route change by making requests to the server which returns the full HTML page.

37. Explain the concept of code splitting and its benefits in React?

38. How does React handle routing and navigation?

    => React provides a declarative, component-based approach to routing. The core library is called React Router, which provides <Routes>, <Route>, and <Link> components to declaratively map routes to components. Navigation works by changing the URL.

39. What are higher-order components (HOC) in React?

    => Higher-order components (HOC) are a pattern in React for reusing component logic. HOCs are functions that take a component as an argument and return a new component. HOCs are common for cross-cutting concerns like authentication.

40. What are controlled and uncontrolled components?

    => Controlled components are form inputs whose values are controlled by React, while uncontrolled components are form inputs whose values are handled by the DOM itself. Controlled components are usually preferable in React because they allow you to move form state into component state.

41. Explain the concept of reconciliation in React?

42. How do you prevent unnecessary renders in React?

    => Reconciliation is React's process of figuring out how to efficiently update the UI to match the most recent tree of React elements. In reconciliation, React compares the new element tree with the previous one and determines the minimal set of operations to transform.

43. What is the difference between a stateful and stateless component ?

    A stateful component is a component that manages its own internal state data. It can change its state over time in response to user actions, network responses, etc. A stateless component is a component that does not manage or track any internal state.

44. Explain how you can use context API with hooks?

    The Context API allows components to pass data through the component tree without having to pass props down manually at every level.

45. How do you prevent default events such as form submission or link click in react?

    You can prevent default events in React by calling event.preventDefault() on the event object passed to the event handler.

46. When we developing application using react, what point we keep in mind for SEO and Performance in the web app?

When developing a web application using React, it's important to consider both SEO (Search Engine Optimization) and performance to ensure your app is well-optimized for search engines and provides a great user experience. Here are some key points to keep in mind:

**SEO (Search Engine Optimization):**

1. **Server-Side Rendering (SSR):** Implement server-side rendering using frameworks like Next.js. SSR helps search engines index your content by providing pre-rendered HTML on the server.

2. **Proper HTML Semantics:** Ensure your components are structured with appropriate HTML semantics. Use HTML tags like `<h1>`, `<h2>`, `<p>`, and `<img>` correctly.

3. **Meta Tags:** Set up meta tags for title, description, and Open Graph tags to improve the display of your content in search engine results and social media shares.

4. **Canonical URLs:** Use canonical URLs to specify the preferred version of a page when you have duplicate content.

5. **Sitemaps:** Generate and submit XML sitemaps to search engines to help them discover and index your pages.

6. **Structured Data:** Add structured data (Schema.org) to provide search engines with specific information about your content. This can lead to rich snippets in search results.

7. **Lazy Loading:** Implement lazy loading for images and other assets to improve page load times. Use the `loading="lazy"` attribute on your images.

**Performance:**

1. **Code Splitting:** Implement code splitting to reduce the initial bundle size. Lazy load components and assets that are not immediately needed.

2. **Optimize Images:** Compress and optimize images for the web. Use modern image formats like WebP when supported.

3. **Minify and Bundle JavaScript:** Minify and bundle your JavaScript code to reduce the file size.

4. **Optimize CSS:** Minify and optimize your CSS. Consider using CSS-in-JS libraries like styled-components for efficient styling.

5. **Use a Content Delivery Network (CDN):** Serve static assets, such as images and fonts, from a CDN to reduce latency and improve loading times.

6. **Reduce HTTP Requests:** Minimize the number of HTTP requests by bundling and grouping assets. Use techniques like data URIs for small assets.

7. **Progressive Web App (PWA):** Implement PWA features to make your app installable, and enable offline access and improved caching.

8. **Reduce Render Blocking Resources:** Optimize the critical rendering path by eliminating or deferring render-blocking resources like JavaScript and CSS.

9. **SSR for Performance:** As mentioned earlier, server-side rendering not only benefits SEO but also can improve initial load times.

10. **Service Workers:** Implement service workers to cache assets and enable offline access.

11. **Performance Monitoring:** Continuously monitor your app's performance using tools like Lighthouse, PageSpeed Insights, and Web Vitals. Identify and address performance bottlenecks.

12. **Load Time Optimization:** Focus on improving the time to interactive (TTI) and perceived performance. Users should be able to interact with your app quickly.

13. **CDN Caching:** Set appropriate cache headers for your assets on the CDN to leverage browser caching.

14. **Error Handling:** Implement proper error handling to ensure a robust user experience even in the face of unexpected issues.

15. **Responsive Design:** Ensure your web app is responsive and optimized for various devices and screen sizes.

By considering both SEO and performance from the beginning of your React app development, you can create a web application that not only ranks well in search engines but also provides a fast and efficient experience for your users.

47. What is accesibility a11ly in web with example?

Accessibility, often referred to as "a11y" (pronounced as "ally"), in the context of web development, is the practice of making web content and applications usable by as many people as possible, including those with disabilities. The "a11y" notation is derived from the word "accessibility," with the number 11 representing the 11 characters that are removed from the middle of the word.

Here are some key principles and examples of web accessibility:

1. **Text Alternatives (Alt Text) for Images:**

   - Principle: Provide text alternatives for non-text content, such as images, so that screen readers can convey the content to visually impaired users.
   - Example: `<img src="example.jpg" alt="A red apple on a wooden table">`

2. **Semantic HTML:**

   - Principle: Use HTML elements in a semantically meaningful way. Use headings for headers, lists for lists, and buttons for interactive elements.
   - Example:
     ```html
     <h1>Main Heading</h1>
     <p>This is a paragraph of text.</p>
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
     </ul>
     <button>Click Me</button>
     ```

3. **Keyboard Accessibility:**

   - Principle: Ensure that all interactive elements can be operated using a keyboard, as some users may not be able to use a mouse.
   - Example: Use the "tab" key to navigate and the "Enter" or "Space" key to activate buttons and links.

4. **Descriptive Links:**

   - Principle: Create descriptive, meaningful links that make sense when read out of context.
   - Example: `<a href="about.html">Learn more about our company</a>`

5. **Contrast and Color:**

   - Principle: Ensure that text has sufficient contrast with the background to make it readable for users with low vision.
   - Example: Use tools to check and adjust the color contrast in your design.

6. **Headings and Document Structure:**

   - Principle: Use a logical and hierarchical heading structure to provide a clear document outline.
   - Example:
     ```html
     <h1>Main Title</h1>
     <h2>Section 1</h2>
     <p>Content of section 1...</p>
     <h2>Section 2</h2>
     <p>Content of section 2...</p>
     ```

7. **Accessible Forms:**

   - Principle: Make forms and form elements accessible, providing labels and error messages.
   - Example:
     ```html
     <label for="username">Username:</label>
     <input type="text" id="username" name="username" required />
     <div role="alert" id="username-error">Please enter a username.</div>
     ```

8. **ARIA (Accessible Rich Internet Applications) Roles and Attributes:**

   - Principle: Use ARIA roles and attributes to enhance the accessibility of dynamic web content, such as single-page applications.
   - Example:
     ```html
     <button aria-label="Close" aria-haspopup="dialog">X</button>
     ```

9. **Video and Audio Transcripts and Captions:**

   - Principle: Provide transcripts and captions for multimedia content to make it accessible to users who are deaf or hard of hearing.
   - Example: Include closed captions for videos and transcripts for podcasts.

10. **Testing with Assistive Technologies:**
    - Principle: Regularly test your web content with screen readers and other assistive technologies to identify and fix accessibility issues.

Web accessibility is crucial for making the web more inclusive and ensuring that people with disabilities can access and use web content and applications effectively. By following accessibility guidelines and principles, web developers can create a more accessible and user-friendly online experience for everyone.

Good luck for your React Interviews! 💪🚀
