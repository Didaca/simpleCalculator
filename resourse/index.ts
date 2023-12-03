import {
    toCheckSymbols,
    showResult, 
    math_sign} from './modules/base_functions.js';

import { divide, multiplying, subtract, sum } from './modules/math_operations.js';


function simpleCalculator() {

    const zero: string = '0';

    const screenElement = document.getElementById('screen') as HTMLParagraphElement;
    const clearElement = document.querySelector('.clear') as HTMLButtonElement;
    const plus_minusElement = document.querySelector('.plus-minus') as HTMLButtonElement;
    const addElement = document.querySelector('.add') as HTMLButtonElement;
    const subElement = document.querySelector('.sub') as HTMLButtonElement;
    const multiplyingElement = document.querySelector('.multiplying') as HTMLButtonElement;
    const divideElement = document.querySelector('.divide') as HTMLButtonElement;
    const resultElement = document.querySelector('.btn-e') as HTMLButtonElement;
    const pointElement = document.querySelector('.point') as HTMLButtonElement;

  
    const numbersElement = [...Array.from(document.querySelectorAll('.int')!)];
    
        
    /* ------add number------ */
    
    const addNumber = (ev: Event) => {
        const new_value = ev.target as HTMLButtonElement;
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


     /* ------add math symbol------ */

    const addSymbol = (ev: Event) => {
        const symbolElement = ev.target as HTMLButtonElement;
        const symbol = symbolElement.textContent;
        const compare = screenElement.textContent;

        const count_minus = toCheckSymbols('-', screenElement);

        if (symbol && !compare?.includes('+') && !compare?.includes('-') && !compare?.includes('*') && !compare?.includes('/')) {

            screenElement.textContent += symbol
        }
        if (symbol && compare?.startsWith('-') && !compare?.includes('+') && !compare?.includes('*') && !compare?.includes('/') && count_minus < 2) {

            screenElement.textContent += symbol
        }

    };

    /* ------add coma for float number------ */

    const addComa = () => {
            
        const value = screenElement.textContent;
        let count_points = toCheckSymbols('.', screenElement);

        if (!value?.includes('.') || value?.includes('+') 
        || value?.includes('-') || value?.includes('*') 
        || value?.includes('/')) {

            if (count_points < 2){

                showResult(screenElement.textContent + '.', screenElement);
            }

        }

    };
   
    /* clear screen function*/
   const clear = ():void => {
       showResult(zero, screenElement);
   };


   const goPlus_Minus = (): void => {

        const value = String(screenElement.textContent);
    
        showResult(math_sign(value), screenElement);
   };

   /* display the result on the screen */
   const result = () => {
        let value = screenElement.textContent;
        let count_minus: number = 0;


        if (value) {
            count_minus = toCheckSymbols('-', screenElement);
        };

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
        };
   };


   /* add Events*/
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


   
};


simpleCalculator();