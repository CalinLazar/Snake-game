
let snake = new Snake(2, 2, "up");
let map = new Map();


let heart1 = new Heart(7, 4);
let heart2 = new Heart(0, 3);
let heart3 = new Heart(4, 6);
let heart4 = new Heart(6, 9);
let shroom1 = new Shroom(9, 3);
let shroom2 = new Shroom(6, 0);
let shroom3 = new Shroom(1, 9);
let coin1 = new Coin(3, 8);
let coin2 = new Coin(1, 2);
let coin3 = new Coin(3, 0);
let coin4 = new Coin(8, 2);
let coin5 = new Coin(9, 9);

map.children.push(shroom1)
map.children.push(shroom2)
map.children.push(shroom3)
map.children.push(coin1);
map.children.push(coin2);
map.children.push(coin3);
map.children.push(coin4);
map.children.push(coin5);

map.children.push(heart1);
map.children.push(heart2);
map.children.push(heart3);
map.children.push(heart4);
map.children.push(snake);
map.render(container)


const scoreBox = document.getElementById("score-box");
setInterval(()=> {
    snake.move()
    map.render(container);
    
}, 500 )

const userAction = (e) => {
    switch(e.code) {
        case "ArrowUp": snake.children[0].dir = "up"; break;
        case "ArrowRight": snake.children[0].dir = "right"; break;
        case "ArrowDown": snake.children[0].dir = "down"; break;
        case "ArrowLeft": snake.children[0].dir = "left"; break;
    }
}