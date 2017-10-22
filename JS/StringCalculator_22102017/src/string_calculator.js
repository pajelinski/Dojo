export function add(numbers){
    if (is_empty_string(numbers)) {
        return 0;
    }

    return sum_splited_numbers(numbers.split(','));
}


function is_empty_string(string){
    return string === "";
}

function sum_splited_numbers(numbers){
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    return sum
}