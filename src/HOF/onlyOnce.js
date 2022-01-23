const once = (fn) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

let log = (message) => console.log(message);

const logOnlyOnce = once(log);

logOnlyOnce("Hello Welcome to Higher Order Function...");
logOnlyOnce("Hello Welcome to Higher Order Function...");
logOnlyOnce("Hello Welcome to Higher Order Function...");
logOnlyOnce("Hello Welcome to Higher Order Function...");
logOnlyOnce("Hello Welcome to Higher Order Function...");
logOnlyOnce("Hello Welcome to Higher Order Function...");
