import { MagicPillUpdater } from "./MagicPillUpdater";

describe("MagicPillUpdater", () => {
  it("should not change benefit or expiration", () => {
    const drug = { name: "Magic Pill", expiresIn: 5, benefit: 10 };
    const updater = new MagicPillUpdater(drug);
    updater.dailyUpdate();
    expect(drug.benefit).toBe(10);
    expect(drug.expiresIn).toBe(5);
  });
});
