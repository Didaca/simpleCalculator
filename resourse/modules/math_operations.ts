/* math operations */

import { tocheckLengthResult } from "../modules/base_functions.js";



const result_letters_length = 5;


export const sum = (a: number, b: number, element: HTMLElement):void => {
    let result = a + b;
    tocheckLengthResult(String(result), result_letters_length, element);
  };

export const subtract = (a: number, b: number, element: HTMLElement):void => {
    let result = a - b;
    tocheckLengthResult(String(result), result_letters_length, element);
           
};

export const multiplying = (a: number, b: number, element: HTMLElement):void => {
    let result = a * b;
    tocheckLengthResult(String(result), result_letters_length, element);
};

export const divide = (a: number, b: number, element: HTMLElement):void => {
    let result = a / b;
    tocheckLengthResult(String(result), result_letters_length, element);               
};