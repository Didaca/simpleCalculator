"use strict";
function simpleCalculator() {
    let a;
    let b;
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
    const sum = (a, b) => {
        return a + b;
    };
    const subtract = (a, b) => {
        return a - b;
    };
    const multiplying = (a, b) => {
        return a * b;
    };
    const divide = (a, b) => {
        return a / b;
    };
    const math_sign = (a) => {
        if (a.startsWith('-')) {
            return a.slice(1);
        }
        return '-' + a;
    };
    const addNumber = (ev) => {
        const new_value = ev.target;
        const old_v = screenElement.textContent;
        if (old_v) {
            const sum = old_v + new_value.textContent;
            if (sum.startsWith('0')) {
                showResult(String(sum.slice(1)));
            }
            else {
                showResult(String(sum));
            }
        }
    };
    const addComa = () => {
        const value = screenElement.textContent;
        if (!value?.includes('.')) {
            showResult(screenElement.textContent + '.');
        }
    };
    const addSymbol = (ev) => {
        const symbolElement = ev.target;
        const symbol = symbolElement.textContent;
        const compare = screenElement.textContent;
        if (symbol && !compare?.includes('+') && !compare?.includes('-') && !compare?.includes('*') && !compare?.includes('/')) {
            screenElement.textContent += symbol;
        }
    };
    const showResult = (value) => { screenElement.textContent = value; };
    const clear = () => {
        showResult(zero);
    };
    const goPlus_Minus = () => {
        const value = String(screenElement.textContent);
        showResult(math_sign(value));
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
}
;
simpleCalculator();
//# sourceMappingURL=index.js.map