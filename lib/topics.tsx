export class Electromagnetism {
  static readonly dir = "electromagnetism";

  static readonly topics = {
    current: "current",
    electricPotential: "electric_potential",
    electricCharge: "electrical_charge",
    electricalPhenomena: "electrical_phenomena",
    elementaryCharge: "elementary_charge",
    voltage: "voltage",
    electricEnergy: "electric_energy",
    resistance: "resistance",
  };

  static getPath(topicKey: keyof typeof this.topics) {
    return `/${this.dir}/${this.topics[topicKey]}`;
  }
}

export class Mechanics {
  static readonly dir = "mechanics";

  static readonly topics = {
    work: "work",
    force: "force",
    energy: "energy",
  };

  static getPath(topicKey: keyof typeof this.topics) {
    return `/${this.dir}/${this.topics[topicKey]}`;
  }
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
