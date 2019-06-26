enum Direction { UP, DOWN, LEFT, RIGHT };

class Snake {
    constructor() { }

    parts: SnakePart[] = [new Head(0, 0)];


    eat(): number {
        return 1;
    }

    move(param: Direction) {
        switch (param) {
            case Direction.UP:
                this.parts[0].y--;
                break;
            case Direction.LEFT:
                this.parts[0].x--;
                break;
            case Direction.RIGHT:
                this.parts[0].x++;
                break;
            case Direction.DOWN:
                this.parts[0].y++;
                break;
        }
        console.log(`Head: ${this.parts[0].x}, ${this.parts[0].y}`);
    }
}

class SnakePart {
    constructor(public x: number, public y: number) { }
}


class Head extends SnakePart {
}

class Body extends SnakePart {
}



class Game {

    snake: Snake;
    currentDirection: Direction = Direction.DOWN;

    stop() { }


    constructor() {
        this.snake = new Snake();
        
        setInterval(() => this.tic(), 2000);
        
        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 37:
                    this.currentDirection = Direction.LEFT;
                    break;
                case 38:
                    this.currentDirection = Direction.UP;
                    break;
                case 39:
                    this.currentDirection = Direction.RIGHT;
                    break;
                case 40:
                    this.currentDirection = Direction.DOWN;
                    break;
            }
        });
    }

    tic() {
        this.snake.move(this.currentDirection);
    }
}


new Game();