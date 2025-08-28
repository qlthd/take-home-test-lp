import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("Magic Pill benefit and expiresIn never change", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 40)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 5, 40)]);
  });

  it("Fervex increase benefit by 3 when expiresIn < 6", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });

  it("Fervex benefit drops to 0 after expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("Herbal Tea increases benefit and decreases expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("Herbal Tea increases benefit twice as fast after expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
});
