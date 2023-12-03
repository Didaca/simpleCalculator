export const showResult = (value, element) => { element.textContent = value; };
export const tocheckLengthResult = (result, result_letters_length, element) => {
    if (result.length > result_letters_length) {
        element.textContent = Number(result).toExponential(result_letters_length);
    }
    else {
        element.textContent = result;
    }
};
export const toCheckSymbols = (symbol, element) => {
    const value = element.textContent;
    let count_points = 0;
    if (value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] === symbol) {
                count_points++;
            }
            ;
        }
        ;
    }
    ;
    return count_points;
};
export const math_sign = (a) => {
    if (a.startsWith('-')) {
        return a.slice(1);
    }
    return '-'.concat(a);
};
//# sourceMappingURL=base_functions.js.map