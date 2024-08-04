enum direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT,
}

export function doSomething(keypressed: direction){
    if (keypressed === direction.UP){
        console.log('Moving Up');
    }
}

doSomething(direction.UP); // Output: Moving Up
console.log(direction.DOWN);
console.log(direction.UP); // Output: Moving);

