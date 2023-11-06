class Shroom {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/shroom.png');
        background-position: 0 -192px;
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}


class Coin {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/coin.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}
class Heart {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    render() {
        return `
        <div
        style="
        width: 64px;
        height: 64px;
        background-image: url('images/heart.png');
        position: absolute;
        top: ${this.y*64}px;
        left: ${this.x*64}px;
        "
        ></div>
        `
    }
}