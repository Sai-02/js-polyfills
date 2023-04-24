const once = (cb, context) => {
  let called = false;
  return function () {
    if (called) {
      console.log("Method is already called");
      return;
    }
    called = true;
    return cb.apply(context || this, arguments);
  };
};

const helloOnce = once(() => console.log("hello"));
helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();
helloOnce();
