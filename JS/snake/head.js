class Head {
    constructor(x=0, y=0, dir="up") {
         this.x = x;
         this.y = y;
         this.dir = dir;
    }
    render() {
        return `
        <div
        class="head ${this.dir}"
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