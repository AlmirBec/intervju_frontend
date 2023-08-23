
const isPrime = (number) => {

    let prime = true;

    if (number < 1) return false;
    if (number === 1 || number === 2) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0){
            prime = false;
            break;
        }
    }
    return prime;
}

export default isPrime;