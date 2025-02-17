# #Reusable Structures known as functions.
# bill = 175.00
# tax_rate = 15
# total_tax = (bill * tax_rate) / 100.00

# print('Total tax', total_tax)

def calculate_tax(bill, tax_rate):
    return (bill*tax_rate) / 100.00
print('Total Tax: ', calculate_tax(175.00, 15))


def get_total(a, b):
    #enclosed variable declared inside a function
    total = a + b

    def double_it():
        #local variable
        double = total * 2
        print(double)

    double_it()
    #double variable will not be accessible
    print(double)

    return total