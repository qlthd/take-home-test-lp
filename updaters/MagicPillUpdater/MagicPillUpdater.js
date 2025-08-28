import { DrugUpdater } from "../DrugUpdater/DrugUpdater";

export class MagicPillUpdater extends DrugUpdater {
  dailyUpdate() {
    return this.drug;
  }
}
