def getCombination(curLength:int, sum:int, temp:list[int], n:int):
    if countList(temp) == n:
        print(*temp, sep=",")

    if (sum < n):
        for i in range(1, n):
            if (curLength >= 1):
                if (i >= temp[curLength-1]):
                    copyTemp = temp.copy()
                    copyTemp.append(i)
                    tempSum = sum + i
                    getCombination(curLength+1, tempSum, copyTemp, n)
            else:
                copyTemp = temp.copy()
                copyTemp.append(i)
                tempSum = sum + i
                getCombination(curLength+1, tempSum, copyTemp, n)

def countList(temp:list[int]):
    sum = 0
    for x in temp:
        sum += x
    return sum

n = int(input())

getCombination(0, 0, [], n)