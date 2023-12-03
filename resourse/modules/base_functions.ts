/* base functions */

export const showResult = (value: string, element: HTMLElement) => { element.textContent = value };
    
export const tocheckLengthResult = (result: string, result_letters_length: number, element: HTMLElement) => {
        
    if (result.length > result_letters_length) {
        element.textContent = Number(result).toExponential(result_letters_length);
    }
    else {

        element.textContent = result 
    }
};

export const toCheckSymbols = (symbol: string, element: HTMLElement): number => {
    const value = element.textContent;
    let count_points = 0;

    if (value) {
        for (let i = 0; i < value.length; i++) {
            if (value[i] === symbol) {
                count_points ++;
            };
            
        };
    };

    return count_points;
};

/* ------add/remove sign------ */
    
export const math_sign = (a: string): string => {
        
    if (a.startsWith('-')) {
        return a.slice(1);
    }
    
    return '-'.concat(a);
   };
