import React from "react";
import ReactDOM from "react-dom/client";

//  React.createElement => JS Object =>  HTMLElement(render)

const heading = React.createElement("h1", {}, "hay ignitions 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));

// react and jsx both are different
//  jsx is not a html, jsx different from html. JSX is a HTML-like or XML-like syntax
//  JSX (transpiled before it reaches the JS Engine) - PARCEL - BABEL
//  BABEL- It is transpiler/JS-compiler that convert your JSX to browser can understand.

//  How the JSX run under the hood in react?
//  JSX converted to React.createElement then it makes JS element object then that js element  rendered in DOM as HTMLElement

//  JSX => Babel transpile it to React.createElement => ReactElement-JS Object =>  HTMLElement(render)

//  for single line jsx
// const jsxHeading = <h2 id="jsxId">jsx heading</h2>;
const jsxHeading = <h2 className="jsxId">jsx heading start</h2>;

//  for multiline jsx, because babel want to know where jsx start and  where it is going to end
const multiJsx = (
  <>
    <h1> multiline jsx</h1>
    <h4>check line</h4>
    <h2 className="jsxIdM" tabIndex="1">
      jsx heading
    </h2>
    {jsxHeading}
  </>
);
console.log(heading, root, jsxHeading);

// React Component -> Functional component & Class based component
// React Functional Component -> It is normal javascript function which return some peace of jsx, make sure function component always start from capital latter.

const fn = () => {
  return true;
};

const fn2 = () => true;
//  Above fn & fn2 are equivalent.

const TestFunctionalComponent = () => {
  return <h1 className="jsxFunc">React Functional Components1</h1>;
};

//  this is also perfectly valid function component

//  component composition => composing two component into one component.
const TestFunctionalComponent2 = () => (
  <>
    <>
      <div className="container">{multiJsx}</div>
      <div className="container2">
        {TestFunctionalComponent()}
        <TestFunctionalComponent />
        <TestFunctionalComponent></TestFunctionalComponent>
      </div>
      <h1 className="jsxFunc">React Functional Component2</h1>
    </>
  </>
);

// if we use multiple root.render then it don't show any error but it only render last root.render function



// root.render(jsxHeading);
// root.render(TestFunctionalComponent2());
root.render(<TestFunctionalComponent/>);
