const imgLike = (curtiu) => {
    if (curtiu) {
        return require("../../res/img/s2-checked.png")
    } else {
        return require("../../res/img/s2.png")
    }
}


const curtirFoto = (curtiu, likes) => {
    let qnt = likes
    if(curtiu){
        qnt = likes - 1
    }
    else{
        qnt = likes + 1
    }
    return[!curtiu, qnt];
}


export {imgLike, curtirFoto}