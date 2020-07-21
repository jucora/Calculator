import operate from "./operate";

const calculate = (
  calculatorObject = { total: null, next: null, operation: null },
  buttonName = null
) => {
  const newObject = { ...calculatorObject };
  if (["+", "-", "X", "÷", "% "].includes(buttonName)) {
    newObject.total = operate(
      newObject.total,
      newObject.next,
      newObject.operation
    );
  } else if (buttonName === "+/-") {
    newObject.total *= -1;
    newObject.next *= -1;
  } else if (buttonName === "AC") {
    newObject.total = 0;
    newObject.next = 0;
  } else {
    return 0;
  }
  return newObject;
};

export default calculate;
