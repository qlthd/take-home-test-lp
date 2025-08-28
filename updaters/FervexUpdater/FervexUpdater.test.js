import { FervexUpdater } from "./FervexUpdater";

describe("FervexUpdater", () => {
  it("should increase benefit by 1 when expiresIn > 10", () => {
    const drug = { name: "Fervex", expiresIn: 15, benefit: 10 };
    const updater = new FervexUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(11);
    expect(drug.expiresIn).toBe(14);
  });

  it("should increase benefit by 2 when expires between 10 and 5", () => {
    const drug = { name: "Fervex", expiresIn: 10, benefit: 10 };
    const updater = new FervexUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(12);
    expect(drug.expiresIn).toBe(9);
  });

  it("should increase benefit by 3 when 5 >= expiresIn > 0", () => {
    const drug = { name: "Fervex", expiresIn: 5, benefit: 10 };
    const updater = new FervexUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(13);
    expect(drug.expiresIn).toBe(4);
  });

  it("should set benefit to 0 when expiresIn <= 0", () => {
    const drug = { name: "Fervex", expiresIn: 0, benefit: 10 };
    const updater = new FervexUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(0);
    expect(drug.expiresIn).toBe(-1);
  });
});
