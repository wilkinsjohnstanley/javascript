list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = ['Hello', 1, True, 40.22]

print(list1, sep = " ")
del list1[2]
print(list1, sep = " ")

for x in list1:
    print('Value: ', x)