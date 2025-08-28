import { DrugUpdater } from "../DrugUpdater/DrugUpdater";

export class FervexUpdater extends DrugUpdater {
  updateBenefit() {
    this.increaseBenefit();
    if (this.drug.expiresIn <= 10) this.increaseBenefit();
    if (this.drug.expiresIn <= 5) this.increaseBenefit();
  }

  handleExpiration() {
    if (this.drug.expiresIn < 0) {
      this.drug.benefit = 0;
    }
  }
}
