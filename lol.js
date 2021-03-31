
function backwardsPrime(start, stop){
    let result = []
    for(let i = start;i<=stop;i++){
        let primary = isPrimeAndReverse(i)
        if(primary.isPrime && isPrimeAndReverse(primary.reversed).isPrime){
        
            result.push(i)
           
        }else continue
    }
    
    return Array.from(new Set(result)).sort((a,b)=> a-b )
}
  function isPrimeAndReverse(number){
    if(arguments[1] === 'checked'){
        
      
        for(let i=2;i<=number/2;i++){
            if(number % i == 0 ){
                return false
                
            } 
        }
        return true
    }
    let result = true
    let reverse
    for(let i=2;i<=number/2;i++){
        if(number % i == 0 || !isPrimeAndReverse(+String(number).split().reverse().join(''),'checked')){
            result = false
            break
        } 
    }
    reverse = +String(number).split('').reverse().join('')
    if(result) {return {isPrime:result, reversed: reverse }} else return {isPrime:result}
}
console.log(backwardsPrime(9900,10000))
