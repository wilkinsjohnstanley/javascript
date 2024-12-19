# declare a dictionary
# sample_dict = {1: 'Coffee', 2:'Tea', 3:'Juice'}
# sample_dict[2] = 'Mint Tea'
# del sample_dict[3]

my_d = {1: 'Coffee', 'Size': '12oz', 'Price':"4.25"}

# for x in my_d:
#     print(x)

for key, value in my_d.items():
    print(str(key) + " : " + value)
