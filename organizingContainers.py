def organizingContainers(container):
    r = sorted([sum(x) for x in container])
    c = sorted([sum(x) for x in zip(*container)])
    return "Possible" if r == c else "Impossible"


print(organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]]))