import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../TailwindComponent/Contact/Contact";

/***

1.Basic react UNIT testing

it("should context", callback function)

test("",()=>{
    render
    querying
    assertion

})

OR

it("",()=>{
    render
    querying
    assertion

})

2. If a component has multiple test cases, so you can group them in a single block that block is know as describe, It can be nested like describe block inside describe block based on requirement

describe("Contact component", ()=>{
    test("Should load contact component", () => {
  //  Render component
  render(<Contact />);

  //  Querying
  const heading = screen.getByRole("heading");

  //  Assertion => this library is used to compare two values
  expect(heading).toBeInTheDocument();
});
})

//   Good way -> getByRole > getByText

 */

beforeAll(() => {
  // console.log("Before All -> it run before starting all test cases");
});

beforeEach(() => {
  // console.log("Before Each => it run before each test case, mainly used for cleanup");
});

afterAll(() => {
  // console.log("after All -> it run after  all test cases");
});

afterEach(() => {
  // console.log("after All -> it run after each test cases");
});

describe("Contact us page component test cases", () => {
  test("Should load contact component", () => {
    //  Render component
    render(<Contact />);

    //   @babel/preset-react => this library is used to convert JSX to HTML element , to read properly
    const heading = screen.getByRole("heading");

    //  Assertion => this library is used to compare two values
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    //   An other way to find button inside contact component
    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input inside contact component", () => {
    //  Render component
    render(<Contact />);

    //  Querying
    //   when  we testing multiple elements then getAllByRol, while for single element we use getByRole
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log({arr:inputBoxes[0]});
    console.log(inputBoxes.length);
    // inputBoxes -> it returns an array of jsx element ( jsx === react element === object === react fiber Node === virtual DOM object)

    // Assertion
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
    // expect(inputBoxes.length).toBeGreaterThan(1)
  });
});
