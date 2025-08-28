import { HerbalTeaUpdater } from "../HerbalTeaUpdater/HerbalTeaUpdater";

describe("HerbalTeaUpdater", () => {
  it("should increase benefit by 1 before expiration reaches 0", () => {
    const drug = { name: "Herbal Tea", expiresIn: 5, benefit: 10 };
    const updater = new HerbalTeaUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(11);
    expect(drug.expiresIn).toBe(4);
  });

  it("should increase benefit by 2 after expiration reaches 0", () => {
    const drug = { name: "Herbal Tea", expiresIn: 0, benefit: 10 };
    const updater = new HerbalTeaUpdater(drug);

    updater.dailyUpdate();

    expect(drug.benefit).toBe(12);
    expect(drug.expiresIn).toBe(-1);
  });
});
