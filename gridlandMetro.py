def gridlandMetro(n, m, k, track):
    spots = n*m
    rows = dict()

    for row in track: 
        r = row[0]
        c1 = row[1]
        c2 = row[2]
        if r not in rows:
            rows[r] = (c1, c2)
        else:
            rows[r] = (min(c1, rows[r][0]), max(c2, rows[r][1]))

    for (c1, c2) in rows.values():
        length = (c2 - c1) + 1
        spots -= length

    return spots

gridlandMetro(4, 4, 3, [[2, 2, 3], [3, 1, 4], [4, 4, 4]])