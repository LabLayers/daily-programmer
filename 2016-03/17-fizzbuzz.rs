/// MARKDOWN
///
/// Happy Friday! Today we'll do FizzBuzz.
///
/// Your program should print numbers from 1 to N, but instead of numbers which
/// are multiples of 3 will the word Fizz should be printed - and instead of multiples
/// of 5 - the word Buzz. If value is the multiple of both - print FizzBuzz instead.

// This is my first attempt at doing anything in rust :)

fn fizzbuzz(number: i32) -> String {
    if number % 15 == 0 {
        "FizzBuzz".to_string()
    } else if number % 5 == 0 {
        "Buzz".to_string()
    } else if number % 3 == 0 {
        "Fizz".to_string()
    } else {
        number.to_string()
    }
}

fn printfizzbuzz(min: i32, max: i32) {
    for i in min..max {
        println!("{}", fizzbuzz(i))
    }
}

fn main() {
    printfizzbuzz(1, 100)
}
