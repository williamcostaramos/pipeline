
import sum from "./sum";
describe("Iniciando teste", () => {
  it("Should sum value return five", () => {
    expect(sum(2, 5)).toBe(5);
  });
});
