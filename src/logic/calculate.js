import operate from "./operate";

const calculate = (
  calculatorObject = { total: null, next: null },
  buttonNameValue = null
) => {
  const newObject = { ...calculatorObject };
  if (["+", "-", "x", "÷", "%"].includes(buttonNameValue)) {
    return operate(newObject.total, newObject.next, buttonNameValue);
  } else if (buttonNameValue === "+/-") {
    if (newObject.total && !newObject.next) {
      newObject.total *= -1;
      return newObject.total;
    } else if (newObject.total && newObject.next) {
      newObject.next *= -1;
      return newObject.next;
    }
  } else {
    return 0;
  }
  return newObject.total;
};

export default calculate;
