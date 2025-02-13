import House from "../";
import { DataE, HeaterE } from "../types";

describe("Testing emission consummed (often straight from the bills)", () => {
  const house = House.build(DataE.CITEPA_2021);
  test("Unknown consumption energy", () => {
    expect(
      Math.floor(house.getEmissionConsumed([2000], HeaterE.urban))
    ).toEqual(112);
  });
  test("No consumption", () => {
    expect(Math.floor(house.getEmissionConsumed([0], HeaterE.fuelOil))).toEqual(
      0
    );
  });
  test("Simple consumption (Last Month)", () => {
    expect(
      Math.floor(house.getEmissionConsumed([1000], HeaterE.fuelOil))
    ).toEqual(2680);
  });
  test("Negative consumption (provider correction)", () => {
    expect(
      Math.floor(house.getEmissionConsumed([-1000], HeaterE.fuelOil))
    ).toEqual(-2680);
  });
  test("Positive/Negative consumption compensation", () => {
    expect(
      Math.floor(
        house.getEmissionConsumed(
          Array(6)
            .fill(1000)
            .concat(Array(6).fill(-1000)),
          HeaterE.fuelOil
        )
      )
    ).toEqual(0);
  });
  test("A Year of same consumption", () => {
    expect(
      Math.floor(
        house.getEmissionConsumed(Array(12).fill(1000), HeaterE.fuelOil)
      )
    ).toEqual(32160);
  });
  test("Half a Year with a Consumption - Half with Another", () => {
    expect(
      Math.floor(
        house.getEmissionConsumed(
          Array(6)
            .fill(1000)
            .concat(Array(6).fill(500)),
          HeaterE.fuelOil
        )
      )
    ).toEqual(24120);
  });
});
