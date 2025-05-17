export class Electromagnetism {
  private static readonly dir = "electromagnetism";
  static readonly current = `/${this.dir}/current`;
  static readonly charge = `/${this.dir}/electric_charge`;
  static readonly electricPotential = `/${this.dir}/electric_potential`;
  static readonly electricPotentialEnergy = `/${this.dir}/electric_potential_energy`;
  static readonly electricalPhenomena = `/${this.dir}/electrical_phenomena`;
  static readonly electricField = `/${this.dir}/electric_field`;
  static readonly elementaryCharge = `/${this.dir}/elementary_charge`;
  static readonly ohmsLaw = `/${this.dir}/ohms_law`;
  static readonly resistance = `/${this.dir}/resistance`;
  static readonly testCharge = `/${this.dir}/test_charge`;
  static readonly voltage = `/${this.dir}/voltage`;
}

export class Mechanics {
  private static readonly dir = "mechanics";
  static readonly energy = `/${this.dir}/energy`;
  static readonly force = `/${this.dir}/force`;
  static readonly work = `/${this.dir}/work`;
}

export class MathTopic {
  static readonly dir = "math";

  static readonly topics = {
    absoluteValue: "absolute_value",
    addition: "addition",
    additiveInverse: "additive_inverse",
    integers: "integers",
    irrationalNumbers: "irrational_numbers",
    negativeNumbers: "negative_numbers",
    rationalNumbers: "rational_numbers",
    realNumbers: "real_numbers",
    set: "set",
    subset: "subset",
    subtraction: "subtraction",
    setUnion: "set_union",
  };

  static getPath(topicKey: keyof typeof this.topics) {
    return `/${this.dir}/${this.topics[topicKey]}`;
  }
}
