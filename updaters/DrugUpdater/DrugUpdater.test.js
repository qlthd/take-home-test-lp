import { DrugUpdater } from "./DrugUpdater";

describe("DrugUpdater", () => {
  it("updates benefit and expiresIn when applying daily update", () => {
    const drug = { benefit: 10, expiresIn: 20 };
    const updater = new DrugUpdater(drug);
    updater.dailyUpdate();
    expect(drug.expiresIn).toBe(19);
    expect(drug.benefit).toBe(9);
  });

  it("increases benefit when using increaseBenefit", () => {
    const drug = { benefit: 5, expiresIn: 20 };
    const updater = new DrugUpdater(drug);
    updater.increaseBenefit(5);
    expect(drug.benefit).toBe(10);
  });

  it("decreases benefit when using decreaseBenefit", () => {
    const drug = { benefit: 30, expiresIn: 20 };
    const updater = new DrugUpdater(drug);
    updater.decreaseBenefit(12);
    expect(drug.benefit).toBe(18);
  });

  it("handles benefit bounds at 0 and 50 when using handleBenefitsBounds", () => {
    const drug = { benefit: -1, expiresIn: 20 };
    const updater = new DrugUpdater(drug);
    updater.handleBenefitsBounds();
    expect(drug.benefit).toBe(0);

    drug.benefit = 51;
    updater.handleBenefitsBounds();
    expect(drug.benefit).toBe(50);
  });
});
