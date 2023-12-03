import { toCheckSymbols, showResult, math_sign } from './modules/base_functions.js';
import { divide, multiplying, subtract, sum } from './modules/math_operations.js';
function simpleCalculator() {
    const zero = '0';
    const screenElement = document.getElementById('screen');
    const clearElement = document.querySelector('.clear');
    const plus_minusElement = document.querySelector('.plus-minus');
    const addElement = document.querySelector('.add');
    const subElement = document.querySelector('.sub');
    const multiplyingElement = document.querySelector('.multiplying');
    const divideElement = document.querySelector('.divide');
    const resultElement = document.querySelector('.btn-e');
    const pointElement = document.querySelector('.point');
    const numbersElement = [...Array.from(document.querySelectorAll('.int'))];
    const addNumber = (ev) => {
        const new_value = ev.target;
        const old_v = screenElement.textContent;
        if (old_v) {
            const sum = old_v + new_value.textContent;
            if (sum.startsWith('0')) {
                showResult(String(sum.slice(1)), screenElement);
            }
            else {
                showResult(String(sum), screenElement);
            }
        }
    };
    const addSymbol = (ev) => {
        const symbolElement = ev.target;
        const symbol = symbolElement.textContent;
        const compare = screenElement.textContent;
        const count_minus = toCheckSymbols('-', screenElement);
        if (symbol && !compare?.includes('+') && !compare?.includes('-') && !compare?.includes('*') && !compare?.includes('/')) {
            screenElement.textContent += symbol;
        }
        if (symbol && compare?.startsWith('-') && !compare?.includes('+') && !compare?.includes('*') && !compare?.includes('/') && count_minus < 2) {
            screenElement.textContent += symbol;
        }
    };
    const addComa = () => {
        const value = screenElement.textContent;
        let count_points = toCheckSymbols('.', screenElement);
        if (!value?.includes('.') || value?.includes('+')
            || value?.includes('-') || value?.includes('*')
            || value?.includes('/')) {
            if (count_points < 2) {
                showResult(screenElement.textContent + '.', screenElement);
            }
        }
    };
    const clear = () => {
        showResult(zero, screenElement);
    };
    const goPlus_Minus = () => {
        const value = String(screenElement.textContent);
        showResult(math_sign(value), screenElement);
    };
    const result = () => {
        let value = screenElement.textContent;
        let count_minus = 0;
        if (value) {
            count_minus = toCheckSymbols('-', screenElement);
        }
        ;
        if (value?.includes('+')) {
            let [a, b] = value.split('+');
            sum(Number(a), Number(b), screenElement);
        }
        else if (value?.includes('-') && !value?.includes('*') && !value?.includes('/')) {
            if (count_minus == 2) {
                let [_, a, b] = value.split('-');
                subtract(Number('-'.concat(a)), Number(b), screenElement);
            }
            else {
                let [a, b] = value.split('-');
                subtract(Number(a), Number(b), screenElement);
            }
        }
        else if (value?.includes('*')) {
            let [a, b] = value.split('*');
            multiplying(Number(a), Number(b), screenElement);
        }
        else if (value?.includes('/')) {
            let [a, b] = value.split('/');
            divide(Number(a), Number(b), screenElement);
        }
        ;
    };
    clearElement.addEventListener('click', clear);
    plus_minusElement.addEventListener('click', goPlus_Minus);
    pointElement.addEventListener('click', addComa);
    numbersElement.forEach(btn => {
        btn.addEventListener('click', addNumber);
    });
    addElement.addEventListener('click', addSymbol);
    subElement.addEventListener('click', addSymbol);
    multiplyingElement.addEventListener('click', addSymbol);
    divideElement.addEventListener('click', addSymbol);
    resultElement.addEventListener('click', result);
}
;
simpleCalculator();
//# sourceMappingURL=index.js.map