import { HerbalTeaUpdater } from "./updaters/HerbalTeaUpdater/HerbalTeaUpdater";
import { FervexUpdater } from "./updaters/FervexUpdater/FervexUpdater";
import { MagicPillUpdater } from "./updaters/MagicPillUpdater/MagicPillUpdater";
import { DafalganUpdater } from "./updaters/DafalganUpdater/DafalganUpdater";
import { DrugUpdater } from "./updaters/DrugUpdater/DrugUpdater";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitAndExpiresInValues() {
    return this.drugs.map((drug) => {
      return this.getUpdater(drug).dailyUpdate();
    });
  }

  getUpdater(drug) {
    switch (drug.name) {
      case "Dafalgan":
        return new DafalganUpdater(drug);
      case "Fervex":
        return new FervexUpdater(drug);
      case "Herbal Tea":
        return new HerbalTeaUpdater(drug);
      case "Magic Pill":
        return new MagicPillUpdater(drug);
      default:
        return new DrugUpdater(drug);
    }
  }
}
