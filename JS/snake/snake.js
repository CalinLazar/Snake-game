// [Snake]> parent > [Head]

class Snake {
    // when creating a new snake -> attach a head to it
    constructor(x,y, dir="up") {

        // snake segments/ elements
        this.children = [];
        this.children.push(new Head(x, y, "up"));
        this.children.push(new Body(x, y+1, dir));
        this.children.push(new Body(x, y+2, dir));
        this.children.push(new Body(x, y+3, dir));
        this.children.push(new Body(x, y+4, dir));
        this.children.push(new Body(x, y+5, dir));
        this.children.push(new Body(x, y+6, dir));
        this.children.push(new Tail(x, y+7, dir));      
    }

    move() {
        
        this.children.reverse()

        this.children.forEach( (s,i)=> {
            
            if(i == this.children.length -1) {
                if(s.dir == "up")    {s.y--}
                if(s.dir == "down")  {s.y++}
                if(s.dir == "right") {s.x++}
                if(s.dir == "left")  {s.x--}

                const onCoin = map.children.some(
                    (obj) => obj instanceof Coin && obj.x === s.x && obj.y === s.y
                );
                if (onCoin) {
                    // Add points to the score
                    this.score += 50;
                    // Remove the coin from the map
                    const coinIndex = map.children.findIndex(
                        (obj) => obj instanceof Coin && obj.x === s.x && obj.y === s.y
                    );
                    if (coinIndex !== -1) {
                        map.children.splice(coinIndex, 1);
                    }
                }

                const onShroom = map.children.some(obj => obj instanceof Shroom && obj.x === s.x && obj.y === s.y);
                if (onShroom) {
                    // Add a new segment in the middle of the snake
                    const middleIndex = Math.floor(this.children.length / 2);
                    const newSegment = new Body(s.x, s.y, s.dir);
                    this.children.splice(middleIndex, 0, newSegment);
                    // Remove the shroom from the map
                    const shroomIndex = map.children.findIndex(obj => obj instanceof Shroom && obj.x === s.x && obj.y === s.y);
                    if (shroomIndex !== -1) {
                        map.children.splice(shroomIndex, 1);
                    }
                }

            } else {
                // if+s where is the neighbor 
                let neighbor = this.children[i + 1];
                
                if (s.x < neighbor.x) {
                    s.dir = "right";
                    s.x++;
                } else if (s.x > neighbor.x) {
                    s.dir = "left";
                    s.x--;
                } else if (s.y < neighbor.y) {
                    s.dir = "down";
                    s.y++;
                } else if (s.y > neighbor.y) {
                    s.dir = "up";
                    s.y--;
                }    
                turnBody(s, i, neighbor)
                
                if (i === 0) {    
                    turnTail(s, neighbor)
                }
            }                        
        } )

        this.children.reverse();
        border(); 
    }
    

    grow() {
        // Add a new body segment to the snake
        const tail = this.children[this.children.length - 1];
        const newSegment = new Body(tail.x, tail.y, tail.dir);
        this.children.push(newSegment);
    }
    
    // when rendering the SNAKE - also render the head
    render() {
        let html = ``
        for (let i = 0; i < this.children.length; i++) {
            html += this.children[i].render();
        }
        
        return html
    }
    
}

function turnBody(s, i, neighbor) {
    // change segment in the turn after head
    if (s.dir === "up" && neighbor.dir === "right") {
        s.dir = "up-right";
    } else if (s.dir === "left" && neighbor.dir === "down") {
        s.dir = "up-right";
    } else if (s.dir === "up" && neighbor.dir === "left") {
        s.dir = "up-left";
    } else if (s.dir === "right" && neighbor.dir === "down") {
        s.dir = "up-left";
    } else if (s.dir === "down" && neighbor.dir === "right") {
        s.dir = "down-right";
    } else if (s.dir === "left" && neighbor.dir === "up") {
        s.dir = "down-right";
    } else if (s.dir === "down" && neighbor.dir === "left") {
        s.dir = "down-left";
    } else if (s.dir === "right" && neighbor.dir === "up") {
        s.dir = "down-left";
    }

    // change the next segment in the turn 
    if (i != 0) {
        if (s.dir === "up" && neighbor.dir === "up-right") {
            s.dir = "up-right";
        } else if (s.dir === "left" && neighbor.dir === "up-right") {
            s.dir = "up-right";
        } else if (s.dir === "up" && neighbor.dir === "up-left") {
            s.dir = "up-left";
        } else if (s.dir === "right" && neighbor.dir === "up-left") {
            s.dir = "up-left";
        } else if (s.dir === "down" && neighbor.dir === "down-right") {
            s.dir = "down-right";
        } else if (s.dir === "left" && neighbor.dir === "down-right") {
            s.dir = "down-right";
        } else if (s.dir === "down" && neighbor.dir === "down-left") {
            s.dir = "down-left";
        } else if (s.dir === "right" && neighbor.dir === "down-left") {
            s.dir = "down-left";
        }
    }
}

// function for turn tail
function turnTail(s, neighbor) {
        if (s.dir === "up" && neighbor.dir === "up-right") {
            s.dir = "right";
        } else if (s.dir === "left" && neighbor.dir === "up-right") {
            s.dir = "down";
        } else if (s.dir === "up" && neighbor.dir === "up-left") {
            s.dir = "left";
        } else if (s.dir === "right" && neighbor.dir === "up-left") {
            s.dir = "down";
        } else if (s.dir === "down" && neighbor.dir === "down-right") {
            s.dir = "right";
        } else if (s.dir === "left" && neighbor.dir === "down-right") {
            s.dir = "up";
        } else if (s.dir === "down" && neighbor.dir === "down-left") {
            s.dir = "left";
        } else if (s.dir === "right" && neighbor.dir === "down-left") {
            s.dir = "up";
        }
    return s.dir;
}

 function border() {
    
    if (snake.children[0].x > (map.width - 2)) {
        snake.children[0].dir = "down";
    }
    if (snake.children[0].y > (map.height - 2)) {
        snake.children[0].dir = "left";
    }
    if (snake.children[0].x < 1) {
        snake.children[0].dir = "up";
    }
    if (snake.children[0].y < 1) {
        snake.children[0].dir = "right";
    }

}