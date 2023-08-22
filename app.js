const paintCanvas= document.querySelector(".js-paint")
const context= paintCanvas.getContext("2d")

const colorpicker = document.querySelector(".js-color-picker")

context.lineCap=""

colorpicker.addEventListener("change",event =>{
    context.strokeStyle=event.target.value
})
const lineWidthRange=document.querySelector(".js-line-range")
const lineWidthLabel=document.querySelector(".js-range-value")

lineWidthRange.addEventListener("input",event=>{
    const width=event.target.value
    lineWidthLabel.innerHTML= width
    context.linewidth= width
    
})
let x=0,y=0;
let isMouseDown=false

const stopDrawing=()=>{
isMouseDown=flase
}

const startDrawing=(event)=>{
    isMouseDown=true
    [x,y]= [event.offsetX, event.offsetY]
}

const drawline=(event)=>{
    if(isMouseDown){
        const newX=event.offsetX
        const newY=event.offsetY
        context.beginPath();
        context.moveTo(x,y)
        context.lineTo(newX,newY)
        context.stroke()
        x= newX
        y= newY
    }
}
paintCanvas.addEventListener("mousedown",startDrawing)
paintCanvas.addEventListener("mousemove",drawline)
paintCanvas.addEventListener("mouseup",stopDrawing)
paintCanvas.addEventListener("mouseout",stopDrawing)
