function generics<T>(arg: T){
    return arg
}

const output = generics<string>("hello")
const output2 = generics<number>(2)






function getFirstElement<T>(arg: T[]){
    return arg[0]
}

const output3 = getFirstElement<number>([1, 2, 3])
const output4 = getFirstElement<string>(["1, 2, 3"])
const output5 = getFirstElement<boolean>([true, false])
