import { DrugUpdater } from "../DrugUpdater/DrugUpdater";

export class DafalganUpdater extends DrugUpdater {
  updateBenefit() {
    this.decreaseBenefit(2);
  }

  handleExpiration() {
    if (this.drug.expiresIn < 0) {
      this.decreaseBenefit(2);
    }
  }
}
