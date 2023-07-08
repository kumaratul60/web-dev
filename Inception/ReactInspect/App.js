const headingH3 = React.createElement(
  "h3",
  { className: "styleH3" },
  "set h3 heading"
);

console.log({ headingH3 }); //object

const headingH2 = React.createElement(
  "h2",
  { id: "styleH2" },
  "set h2 heading"
);
const headingClass = React.createElement(
  "h1",
  { className: "" },
  "set class heading"
);
const headingId = React.createElement("h6", { id: "" }, "set id heading");
const heading = React.createElement("div", {}, "set empty heading");
const headingNull = React.createElement("span", null, "set null heading");
const headingUndefined = React.createElement(
  "p",
  undefined,
  "set undefined heading"
);

const xyzThings = React.createElement(
  "i",
  { xyz: "check xyz" },
  "setting xyz things"
);

// if we want to do below code in react
/*
<div id="parent">
    <div id = "child">
        <h1> check child</h1>
        <h2> check child2</h2>
    </div
</div>

<div id="parent2">
    <div id = "child">
        <h3> check child1</h3>
        <h4> check child2</h4>
    </div>
     <div class = "child2">
        <h5> second child</h5>
        <h6> second child</h6>
    </div>
</div>


Note: React.createElement(Object) => HTML(Browser Understands)
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "check child"),
    React.createElement("h2", {}, "check child2"),
  ])
);

const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", {}, "check child1"),
    React.createElement("h4", {}, "check child2"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h5", {}, "second child"),
    React.createElement("h6", {}, "second child"),
  ]),
]);

const container = React.createElement("div", { className: "wrapper" }, [
  headingH3,
  headingH2,
  headingClass,
  headingId,
  heading,
  headingNull,
  headingUndefined,
  xyzThings,
  parent,
  parent2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
