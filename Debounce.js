function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage
const sayHello = () => console.log("Hello!");
const debouncedHello = debounce(sayHello, 1000);

window.addEventListener("resize", debouncedHello);
