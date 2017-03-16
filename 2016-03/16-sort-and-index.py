# MARKDOWN
# Todays problem is to write a program that sorts an array and prints the array
# with the non zero index position before it was sorted.
#
# `[34, 7, 38, 1]` would print
#
# ```1 was in position 4
# 7 was in position 2
# 34 was in position 1
# 38 was in position 3
# ```

def sort_and_index(array):
    # First, create a new list and sort it
    sorted_array = list(array)
    sorted_array.sort()
    for number in sorted_array:
        # Then, find the old position of the newly-sorted list
        old_position = array.index(number)+1
        # Finally, print the output
        print "{0} was in position {1}".format(number,old_position)

sort_and_index([34, 7, 38, 1])
