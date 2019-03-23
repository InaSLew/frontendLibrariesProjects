/**
 * A parser to parse mathematical expressions in string format.
 * It takes a string (mathematical expression) and gives out a single number as result.
 * It first uses regular expressions to replace the multiplication and division parts in the given expression;
 * then resolves the remaining addition and/or subtraction parts with map() and reduce().
 */

const parseMathExpression = (expression) => {
    
    const multiplyRegex = /(\d)\*(\d)/g, divideRegex = /(\d)\/(\d)/g;
    const onlyAdditionAndSubtraction = expression.replace(multiplyRegex, (match,p1,p2) => match.replace(multiplyRegex, +p1 * +p2)).replace(divideRegex, (match,p1,p2) => match.replace(divideRegex, +p1 / +p2));
    const parseBySubtraction = (expression) => expression.split("-").map(numstr => +numstr).reduce((acc,val) => acc - val);
    
    return onlyAdditionAndSubtraction.split("+").map(numstr => parseBySubtraction(numstr)).reduce((acc,val) => acc+val)
}

console.log(parseMathExpression("3+5*6+5*6-2/4+2/4"));