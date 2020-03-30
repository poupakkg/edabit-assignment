function calculator(num1, operator, num2) {
    operator (num1,num2) = {
    
    '+': return (num1 + num2);
    
    
    '-': return (num1 - num2);
    
    
    '*': return (num1 * num2);
    
    
    '/': return (num1 / num2);
            if( operator === '/' && num2 === 0) return "Can't divide by 0!"  
                    else return (num1/num2);
    }
}
