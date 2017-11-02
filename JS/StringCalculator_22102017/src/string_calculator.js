export function add(input){
    if (is_empty_string(input)) {
        return 0;
    }

    return sum_splited_numbers(split_numbers(input));
}


function is_empty_string(string){
    return string === "";
}

function split_numbers(input) {
    if(input[0] === "/"){
        const {delimiter, numbers} = split_delimiter_from_numbers(input);

        return numbers.split(delimiter);
    }

    return input.split(',');
}

function split_delimiter_from_numbers(input) {
    return {delimiter: get_delimiter(input), numbers: get_numbers(input)};
}

function get_delimiter(input) {
    return input[2];
}

function get_numbers(input) {
    return input.substring(3, input.length);
}

function sum_splited_numbers(numbers){
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    return sum;
}