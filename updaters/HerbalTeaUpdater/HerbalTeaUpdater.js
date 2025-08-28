import { DrugUpdater } from "../DrugUpdater/DrugUpdater";

export class HerbalTeaUpdater extends DrugUpdater {
  updateBenefit() {
    this.increaseBenefit();
  }

  handleExpiration() {
    if (this.drug.expiresIn < 0) {
      this.increaseBenefit(1);
    }
  }
}
