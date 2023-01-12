import { BigNumber, ethers } from "ethers";

class NumberHelper {
  convertToBig(value: string | number) {
    if (typeof value === "number") {
      value = value.toString();
    }

    return ethers.utils.parseUnits(value);
  }

  convertToNumber(value: BigNumber) {
    const result = ethers.utils.formatUnits(value, 18);

    return result.substring(0, result.indexOf(".") + 3);
  }
}

export const $number = new NumberHelper();
