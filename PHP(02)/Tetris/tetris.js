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
                             ],
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
