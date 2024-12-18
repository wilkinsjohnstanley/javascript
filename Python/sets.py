set_a = {1, 2, 3, 4, 5}

print(set_a) #{1, 2, 3, 4, 5}

set_a.add(6)
set_a.remove(1)
print(set_a) #{2, 3, 4, 5, 6}

set_b = {3, 4, 5, 6, 7}
print(set_a.intersection(set_b)) #all matching numbers are returned
#using the ampersand also works
print(set_a & set_b)

# On the other hand, we have the difference1
print(set_a.difference(set_b)) 
# using the minu symbol also works
print(set_a - set_b)
