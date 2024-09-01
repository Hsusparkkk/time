const fsBtn = document.querySelector("#fsBtn")
const isfullscreen = document.isfullscreen;
const body = document.querySelector("html")
const modeBtn = document.querySelector("#modeBtn")
const root = document.documentElement
const bgClrPalette = document.querySelector("#backgroundColor")
const ftClrPalette = document.querySelector("#fontColor")
var mode = "white"

fsBtn.addEventListener("click", chMod)
function chMod(){
    const fullist = document.fullscreenElement;
    console.log(fullist)
    if(fullist != null){
        document.exitFullscreen()
    }else{
        body.requestFullscreen()
    }
}

modeBtn.addEventListener("click", () =>{
    if(mode == "white"){
        mode = "black"
        root.style.setProperty("--backgroundColor","rgb(35, 31, 31)")
        root.style.setProperty("--timeFontColor","rgb(238, 222, 222)")
    }else{
        mode = "white"
        root.style.setProperty("--timeFontColor","rgb(35, 31, 31)")
        root.style.setProperty("--backgroundColor","rgb(238, 222, 222)")
    }
    console.log(mode)
})

bgClrPalette.addEventListener("change", ()=>{
    root.style.setProperty("--backgroundColor", bgClrPalette.value)
    // console.log(bgClrPalette.value)
})

ftClrPalette.addEventListener("change", ()=>{
    root.style.setProperty("--timeFontColor", ftClrPalette.value)
})