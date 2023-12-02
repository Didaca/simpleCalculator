function simpleCalculator() {

    const zero: string = '0';
    const result_letters_length = 5;

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
    
    /* base functions */
    
    const checkLengthResult = (result: string) => {
        
        if (result.length > result_letters_length) {
            screenElement.textContent = Number(result).toExponential(result_letters_length);
        }
        else {

            screenElement.textContent = result 
        }
    };

    const toCheckSymbols = (symbol: string): number => {
        const value = screenElement.textContent;
        let count_points = 0;

        if (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] === symbol) {
                    count_points ++;
                };
                
            };
        };

        return count_points;
    }


    /* math operations */

    const sum = (a: number, b: number):void => {
        let result = a + b;
        checkLengthResult(String(result));
      };
    
    const subtract = (a: number, b: number):void => {
        let result = a - b;
        checkLengthResult(String(result));
               
    };
    
    const multiplying = (a: number, b: number):void => {
        let result = a * b;
        checkLengthResult(String(result));
    };
    
    const divide = (a: number, b: number):void => {
        let result = a / b;
        checkLengthResult(String(result));               
    };
    
    /* ------add/remove sign------ */
    
    const math_sign = (a: string): string => {
        
        if (a.startsWith('-')) {
            return a.slice(1);
        }
        
        return '-'.concat(a);
       };
    
    /* ------add number------ */
    
    const addNumber = (ev: Event) => {
        const new_value = ev.target as HTMLButtonElement;
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


    /* ------add coma for float number------ */

    const addComa = () => {
        
        const value = screenElement.textContent;
        let count_points = toCheckSymbols('.');

        if (!value?.includes('.') || value?.includes('+') 
        || value?.includes('-') || value?.includes('*') 
        || value?.includes('/')) {

            if (count_points < 2){

                showResult(screenElement.textContent + '.');
            }

        }

    };

    const addSymbol = (ev: Event) => {
        const symbolElement = ev.target as HTMLButtonElement;
        const symbol = symbolElement.textContent;
        const compare = screenElement.textContent;

        const count_minus = toCheckSymbols('-');

        if (symbol && !compare?.includes('+') && !compare?.includes('-') && !compare?.includes('*') && !compare?.includes('/')) {

            screenElement.textContent += symbol
        }
        if (symbol && compare?.startsWith('-') && !compare?.includes('+') && !compare?.includes('*') && !compare?.includes('/') && count_minus < 2) {

            screenElement.textContent += symbol
        }

    };

    
    const showResult = (value: string) => { screenElement.textContent = value };

   
    /* clear screen function*/
   const clear = ():void => {
       showResult(zero);
   };


   const goPlus_Minus = (): void => {

        const value = String(screenElement.textContent);
    
        showResult(math_sign(value));
   };

   /* display the result on the screen */
   const result = () => {
        let value = screenElement.textContent;
        let count_minus: number = 0;


        if (value) {
            count_minus = toCheckSymbols('-');
        };

        if (value?.includes('+')) { 
            let [a, b] = value.split('+');
            sum(Number(a), Number(b));
        }
        else if (value?.includes('-')) { 

            if (count_minus == 2) {
                let [_, a, b] = value.split('-');
                subtract(Number('-'.concat(a)), Number(b));
            }
            else {
                let [a, b] = value.split('-');
                subtract(Number(a), Number(b));
            }

        }
        else if (value?.includes('*')) { 
            let [a, b] = value.split('*');
            multiplying(Number(a), Number(b));
        }
        else if (value?.includes('/')) { 
            let [a, b] = value.split('/');
            divide(Number(a), Number(b));
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