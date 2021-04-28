def nonDivisibleSubset(k, s):
    r = [0] * k
     
    for value in s:
        r[value%k] += 1
     
    result = 0
    for a in range(1, (k+1)//2):
        result += max(r[a], r[k-a])
    if k % 2 == 0 and r[k//2]:
        result += 1
    if r[0]:
        result += 1
    return result