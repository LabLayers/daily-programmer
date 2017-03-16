# MARKDOWN
# Nearly everyone is familiar with the factorial operator in math. 5! yields 120 because
# factorial means "multiply successive terms where each are one less than the previous":
# ```5! -> 5 * 4 * 3 * 2 * 1 -> 120```
#
# Fair enough.
# Now let's reverse it. Could you write a function that tells us that "120" is "5!"?
# Hint: The strategy is pretty straightforward, just divide the term by successively
# larger terms until you get to "1" as the resultant:
# ```120 -> 120/2 -> 60/3 -> 20/4 -> 5/5 -> 1 => 5!```
#
# Sample Input
# You'll be given a single integer, one per line. Examples:
# ```120
# 150
# 120 = 5!
# 150   NONE```
#
# Challenge Input
# ```3628800
# 479001600
# 6
# 18```

import math

def reverse_factorial(x):
    factor = 2
    product = x/factor
    while product % 1 == 0:
        if product == 1:
            return str(x) + " = " + str(factor) + "!"
        factor += 1
        # print(str(product) + "/" + str(factor))
        product = product/factor
    return str(x) + "   NONE"

print(reverse_factorial(120))
print(reverse_factorial(150))
print(reverse_factorial(3628800))
print(reverse_factorial(479001600))
print(reverse_factorial(6))
print(reverse_factorial(18))
