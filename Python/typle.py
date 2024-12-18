# my_tuple = (1, "strings", 4.5, True)
# Parentheses are optional

my_tuple = 1, "strings", 4.5, True

for x in my_tuple:
    print("Items:", x)
print(type(my_tuple)) #Output: <class 'tuple'>
print(my_tuple.count("strings")) #Output: 1
print(my_tuple.index(4.5)) #Output: 2

for x in my_tuple:
    print("Items:", x)
# my_tuple[0] = 69 #Tuples are immutable, so item assignment is not supported
for x in my_tuple:
    print("Items:", x)