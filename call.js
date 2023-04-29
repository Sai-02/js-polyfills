Function.prototype.callPolyfill = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  context.fn = this;
  context.fn(...args);
};

function printName(collegeName, YOE) {
  console.log(
    this.name +
      " is working as " +
      this.profession +
      " at" +
      this.company +
      " at package of " +
      this.ctc +
      ". He has graduated from " +
      collegeName +
      ". He has " +
      YOE +
      " years of experience"
  );
}

const Person = {
  name: "Ravi",
  profession: "SDE",
  company: "Amazon",
  ctc: "24 LPA",
};

printName.call(Person, "IIT Delhi", 2);
printName.callPolyfill(Person, "IIT Delhi", 2);
