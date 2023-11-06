class Tail {
    constructor (x, y, dir="up") {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }
    
    render() {
        return `
        <div
        class="tail ${this.dir}"
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/snake.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
