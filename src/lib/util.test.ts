import { addStuff } from "./util"

describe('Testing addStuff function', () => {
  test('It adds stuff as expected', () => {
    expect(addStuff(1, 1)).toBe(2)
  })
})