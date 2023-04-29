Function.prototype.bindPolyfill = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  context.fn = this;
  return function (...extraArgs) {
    context.fn(...args, ...extraArgs);
  };
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

const bindedMethod1 = printName.bind(Person, "IIT Delhi");
bindedMethod1(2);
const bindedMethod2 = printName.bindPolyfill(Person, "IIT Delhi");
bindedMethod2(2);
