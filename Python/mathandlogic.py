# five = 5
# if five != 4 and five == 5:
#     print(five)
loyalty_discount = 10
customer = {
    "in_loyalty_program": True,  # Corrected 'true' to 'True' (Python syntax)
    "spent": 100
}

# Check if the customer is in the loyalty program and apply the discount
if customer["in_loyalty_program"]:
    customer["discounted_total"] = customer["spent"] - loyalty_discount
else:
    customer["discounted_total"] = customer["spent"]

print(f"Customer spent: ${customer['spent']}, after discount: ${customer['discounted_total']}")

