
def getShape(n):
    # Asumption => n is a positive integer
    if n % 2 == 0 and n % 3 == 0:
        print("CIRCLE STAR")
    elif n % 2 == 0:
        print("CIRCLE")
    elif n % 3 == 0:
        print("STAR")
    else:
        print("Null")

n = int(input("Enter a positive integer : "))
getShape(n)
