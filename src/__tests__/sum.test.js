import { sum } from "../utils/sum";


test("Sun function test", () => {
  const result = sum(3, 4);

//   Assertion
  expect(result).toBe(7);
});
