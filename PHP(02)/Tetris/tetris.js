var creatCanvas = function(rows, cols , cellWidth,cellHeight) {
    tetris_canvas = document.createElement("canvas");
    tetris_canvas.width = cols * cellWidth;
    tetris_canvas.height = rows * cellHeight;
    tetris_canves.style.border = "1px solid black";
    tetris_ctx = tetris_canvas.getContext('2d');
    tetris_ctx.beginPath();
    for (var i = 1; i < TETRIS_ROWS ; i++) {
	tetris_ctx.moveTo(0,i * CELL_SIZE);
	tetris_ctx.lineTo(TETRIS_COLS * CELL_SIZE ,i * CELL_SIZE);	
    }
    for (var i = 0; i < TETRIS_COLS ; i++) {
	tetris_ctx.moveTo(i * CELL_SIZE, 0);
	tetris_ctx.lineTo(i * CELL_SIZE,TETRIS_ROWS * CELL_SIZE);
    }
    tetris_ctx.closePath();
    tetris_ctx.strokeStyle = "#aaa";
    tetris_ctx.lineWidth = 0.3;
    tetris_ctx.stroke();
    
}
var tetris_status = [];
for (var i = 0; i < TETRIS_ROWS; i++) {
    tetris_status[i] = [];
    for (var j = 0; j < TETRIS_COLS; j++) {
	tetris_status[i][j] = NO_BLOCK;
	
    }
}
var blockArr = [
                [
                {x:TETRIS_COLS / 2-1,y:0,color:1},
                {x:TETRIS_COLS / 2,y:0,color:1},
                {x:TETRIS_COLS / 2,y:1,color:1},
                {x:TETRIS_COLS / 2+1,y:1,color:1}
                 ],
                 [
                  {x:TETRIS_COLS / 2+1,y:0,color:2},
                  {x:TETRIS_COLS / 2,y:0,color:2},
                  {x:TETRIS_COLS / 2,y:1,color:2},
                  {x:TETRIS_COLS / 2-1,y:1,color:2}
                   ],
                   [
                    {x:TETRIS_COLS / 2-1,y:0,color:3},
                    {x:TETRIS_COLS / 2,y:0,color:3},
                    {x:TETRIS_COLS / 2-1,y:1,color:3},
                    {x:TETRIS_COLS / 2,y:1,color:3}
                     ],
                     [
                      {x:TETRIS_COLS / 2-1,y:0,color:4},
                      {x:TETRIS_COLS / 2-1,y:1,color:4},
                      {x:TETRIS_COLS / 2-1,y:2,color:4},
                      {x:TETRIS_COLS / 2,y:2,color:4}
                       ],
                       [
                        {x:TETRIS_COLS / 2,y:0,color:5},
                        {x:TETRIS_COLS / 2,y:1,color:5},
                        {x:TETRIS_COLS / 2,y:2,color:5},
                        {x:TETRIS_COLS / 2-1,y:2,color:5}
                         ],
                         [
                          {x:TETRIS_COLS / 2,y:0,color:6},
                          {x:TETRIS_COLS / 2,y:1,color:6},
                          {x:TETRIS_COLS / 2,y:2,color:6},
                          {x:TETRIS_COLS / 2,y:3,color:6}
                           ],
                           [
                            {x:TETRIS_COLS / 2,y:0,color:7},
                            {x:TETRIS_COLS / 2-1,y:1,color:7},
                            {x:TETRIS_COLS / 2,y:1,color:7},
                            {x:TETRIS_COLS / 2+1,y:1,color:7}
                             ]
];

var initBlock = function() {
    var rand = Math.floor(Math.random() * blockArr.length);
    currentFall = [
                   {x:blockArr[rand][0].x,y:blockArr[rand][0].y,
                       color:blockArr[rand][0].color},
                   {x:blockArr[rand][1].x,y:blockArr[rand][1].y,
                       color:blockArr[rand][1].color},
                   {x:blockArr[rand][2].x,y:blockArr[rand][2].y,
                       color:blockArr[rand][2].color},
                   {x:blockArr[rand][3].x,y:blockArr[rand][3].y,
                       color:blockArr[rand][3].color}
                   ];
};
var moveDown = function () {
    var canDown = true;
    for (var i = 0 ;i < currentFall.length ; i++)
        if (currentFall[i].y >= TETRIS_ROWS - 1)
        {
            canDown = false;
            break;
        }
    if (tetris_status[currentFall[i].y + 1][currentFall[i].x] != NO_BLOCK)
    {
            canDown = false;
            //noinspection JSAnnotator
        break;
    }
}

if (canDown) {
    for (var i = 0; i < currentFall.length; i++) {
        var cur = currentFall[i];
        tetris_ctx.fillStyle = 'white';
        tetris_ctx.fillRect(cur.x * CELL_SIZE + 1,
            cur.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
    }
    for (var i = 0; i < currentFall.length; i++) {
        var cur = currentFall[i];
        cur.y++;
    }

    for (var i = 0; i < currentFall.length; i++) {
        var cur = currentFall[i];
        tetris_ctx.fillStyle = colors[cur.color];
        tetris_ctx.fillRect(cur.x * CELL_SIZE + 1
            , cur.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
    }
}
else {
    for (var i = 0; i < currentFall.length; i++) {
        var cur = currentFall[i];
        if (cur.y < 2) {
            localStorage.removeItem("curScore");
            localStorage.removeItem("tetris_status");
            localStorage.removeItem("tetris_speed");
            if (confirm("You lose!Do you want save you effort")) {
                maxScore = localStorage.getItem("maxScore");
                maxScore = maxScore == null ? 0 : maxScore;
                if (curScore >= maxScore) {
                    localStorage.setItem("maxScore", curScore);
                }
            }
            isPlaying = false;
            clearInterval(curTimer);
            //noinspection JSAnnotator
            return;
        }
        tetris_status[cur.y][cur.x] = cur.color;
    }
    lineFull();
    localStorage.setItem("tetris_status",
        JSON.stringify(tetris_status));
    initBlock();

}

var lineFull = function () {
    for (var i = 0; i < TETRIS_ROWS; i++)
    {
        var flag = true;
        for (var j = 0; j < TETRIS_COLS;j++)
        {
            if (tetris_status[i][j] == NO_BLOCK)
            {
                flag = false;
                break;
            }

        }
        if (flag)
        {
            curScoreEle.innerHTML = curScore+= 100;

        }

    }

}
