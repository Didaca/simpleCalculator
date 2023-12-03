import { tocheckLengthResult } from "../modules/base_functions.js";
const result_letters_length = 5;
export const sum = (a, b, element) => {
    let result = a + b;
    tocheckLengthResult(String(result), result_letters_length, element);
};
export const subtract = (a, b, element) => {
    let result = a - b;
    tocheckLengthResult(String(result), result_letters_length, element);
};
export const multiplying = (a, b, element) => {
    let result = a * b;
    tocheckLengthResult(String(result), result_letters_length, element);
};
export const divide = (a, b, element) => {
    let result = a / b;
    tocheckLengthResult(String(result), result_letters_length, element);
};
//# sourceMappingURL=math_operations.js.map