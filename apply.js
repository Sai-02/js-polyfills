Function.prototype.applyPolyfill = function (context = {}, args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  if (!Array.isArray(args))
    throw new Error("CreateListFromArrayLike called on non-object");
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

printName.apply(Person, ["IIT Delhi", 2]);
printName.applyPolyfill(Person, ["IIT Delhi", 2]);
