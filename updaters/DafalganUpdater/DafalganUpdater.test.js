import { DafalganUpdater } from "./DafalganUpdater";

describe("DafalganUpdater", () => {
  it("should decrease benefit by 2 when expiresIn > 0", () => {
    const drug = { name: "Dafalgan", expiresIn: 3, benefit: 7 };
    const updater = new DafalganUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(5);
    expect(drug.expiresIn).toBe(2);
  });

  it("should decreasee benefit by 4 (2 + 2) when expiresIn <= 0", () => {
    const drug = { name: "Dafalgan", expiresIn: 0, benefit: 8 };
    const updater = new DafalganUpdater(drug);

    updater.dailyUpdate();
    expect(drug.benefit).toBe(4);
    expect(drug.expiresIn).toBe(-1);
  });

  it("should not decrease benefit under 0", () => {
    const drug = { name: "Dafalgan", expiresIn: 0, benefit: 3 };
    const updater = new DafalganUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(0);
    expect(drug.expiresIn).toBe(-1);
  });
});
