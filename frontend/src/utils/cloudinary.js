// let xsContainerScreen =  matchMedia("(max-with:575px)");
// let smContainerScreen =  matchMedia("(max-width:767px)");
// let mdContainerScreen =  matchMedia("(max-width:991px)");
// let lgContainerScreen =  matchMedia("(max-width:1199px)");
let xsScreen =  575;
let smScreen =  767;
let mdScreen =  991;
let lgScreen =  1199;

// options: ar,c,

export function setFullWidth(){
    let currentScreenWidth = screen.width
    return `w_${currentScreenWidth>=2000? 2000: currentScreenWidth},ar_${currentScreenWidth <= smScreen ? "4:3" : "16:9"},c_fill,f_auto,q_auto,dpr_${devicePixelRatio}`
}

export function setContainerFullWidth(options=""){
    let preset = `f_auto,q_auto,dpr_${devicePixelRatio}`
    let currentScreenWidth = screen.width;

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${options}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${options}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_720,${options}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_960,${options}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_1140,${options}` + preset
    }
    return `w_1320,${options}` + preset
}


export function setContainerHalfWidth(options=""){
    let preset = `f_auto,q_auto,dpr_${devicePixelRatio}`
    let currentScreenWidth = screen.width;

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${options}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${options}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_360,${options}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_480,${options}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_570,${options}` + preset
    }
    return `w_660,${options}` + preset
}


export function setContainer3rdWidth(options=""){
    let preset = `f_auto,q_auto,dpr_${devicePixelRatio}`
    let currentScreenWidth = screen.width;

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${options}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${options}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_240,${options}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_320,${options}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_380,${options}` + preset
    }
    return `w_440,${options}` + preset
}


export function setContainerQuarterWidth(options=""){
    let preset = `f_auto,q_auto,dpr_${devicePixelRatio}`
    let currentScreenWidth = screen.width;

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${options}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${options}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_180,${options}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_240,${options}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_285,${options}` + preset
    }
    return `w_330,${options}` + preset
}
