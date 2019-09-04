export function sum(arg) {
    return {
        type: "+",
        arg
    }
}

export function minus(arg) {
    return {
        type: "-",
        arg
    }
}

export function multiply(arg) {
    return {
        type: "*",
        arg
    }
}

export function  divide(arg){
    return {
        type: "/",
        arg
    }
}

export function clear(arg) {
    return {
        type: "C",
        arg
    }
}

export function total(arg) {
    return {
        type: "=",
        arg
    }
}

export function coma(arg) {
    return {
        type: ".",
        arg
    }
}

export function newNumber(val) {
    return {
        type:"NEW_NUMBER",
        payload :val
    }
}
