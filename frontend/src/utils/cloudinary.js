// let xsContainerScreen =  matchMedia("(max-with:575px)");
// let smContainerScreen =  matchMedia("(max-width:767px)");
// let mdContainerScreen =  matchMedia("(max-width:991px)");
// let lgContainerScreen =  matchMedia("(max-width:1199px)");
let xsScreen =  575;
let smScreen =  767;
let mdScreen =  991;
let lgScreen =  1199;

export function setFullWidth(){
    let currentScreenWidth = screen.width
    return `w_${currentScreenWidth>=2000? 2000: currentScreenWidth},ar_${currentScreenWidth <= smScreen ? "4:3" : "16:9"},c_fill,f_auto,q_auto,dpr_${devicePixelRatio}`
}

export function setContainerFullWidth(ar=null, crop=null){
    let preset = `${crop}f_auto,q_auto,dpr_${devicePixelRatio}`

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${ar}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${ar}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_720,${ar}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_960,${ar}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_1140,${ar}` + preset
    }
    return `w_1320,${ar}` + preset
}


export function setContainerHalfWidth(ar=null, crop=null){
    let preset = `${crop}f_auto,q_auto,dpr_${devicePixelRatio}`

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${ar}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${ar}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_360,${ar}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_480,${ar}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_570,${ar}` + preset
    }
    return `w_660,${ar}` + preset
}


export function setContainerquarterWidth(ar=null, crop=null){
    let preset = `${crop}f_auto,q_auto,dpr_${devicePixelRatio}`

    if (screen.width<xsScreen) {
        return `w_${currentScreenWidth},${ar}` + preset
    }else if(currentScreenWidth <= smScreen){
        return `w_540,${ar}` + preset
    } else if (currentScreenWidth <= mdScreen){
        return `w_180,${ar}` + preset
    } else if (currentScreenWidth <= lgScreen){
        return `w_240,${ar}` + preset
    } else if (currentScreenWidth <= 1399){
        return `w_285,${ar}` + preset
    }
    return `w_330,${ar}` + preset
}