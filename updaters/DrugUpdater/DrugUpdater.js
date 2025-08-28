export class DrugUpdater {
  constructor(drug) {
    this.drug = drug;
  }

  dailyUpdate() {
    this.updateBenefit();
    this.decrementExpiresIn();
    this.handleExpiration();
    this.handleBenefitsBounds();
    return this.drug;
  }

  updateBenefit() {
    this.decreaseBenefit();
  }

  increaseBenefit(amount = 1) {
    this.drug.benefit += amount;
  }

  decreaseBenefit(amount = 1) {
    this.drug.benefit -= amount;
  }

  decrementExpiresIn() {
    this.drug.expiresIn -= 1;
  }

  handleExpiration() {
    if (this.drug.expiresIn < 0) {
      this.decreaseBenefit();
    }
  }

  handleBenefitsBounds() {
    if (this.drug.benefit < 0) this.drug.benefit = 0;
    if (this.drug.benefit > 50) this.drug.benefit = 50;
  }
}
