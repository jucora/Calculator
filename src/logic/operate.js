import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  const value1 = new Big(numberOne);
  const value2 = new Big(numberTwo);

  switch (operation) {
    case "+":
      return value1.plus(value2);
    case "-":
      return value1.minus(value2);
    case "x":
      return value1.times(value2);
    case "÷":
      console.log("div", numberTwo);
      if (numberTwo !== "0") {
        return value1.div(value2);
      } else {
        return "Invalid operation!";
      }
    case "%":
      return value1.times(value2).div(100);
    default:
      break;
  }
  return 0;
};

export default operate;