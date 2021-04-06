
const sampleInput =
    [
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0],
        [1, 0, 0, 1, 1, 0]
    ];

const MazeCrossable = (maze) => {
    var waker = 0
    var i = 0
    var j = 0
    if (maze[0][0] === 0 && maze[0][1] != 0 && maze[1][0] != 0 || maze[0][0] == 1) {
            return 'No'
    }
    while (i < 6) {
        if (maze[i][j + 1] != 1) {
            if(j >= 6){
                i++;
            } else {
                waker++;
                j++;
            }
        } else {
            i++;
        }
    }
    if (waker === i && waker === j) {
        return 'Yes'
    } else {
        return 'No'
    }
}

const result = MazeCrossable(sampleInput);
result