


document.addEventListener('DOMContentLoaded', (event) => {
  var ColorsArray = []
  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.8';
    
    dragSrcEl = this;

  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
  
    if (dragSrcEl.classList.contains("blue")){
      ColorsArray.push("blue")
      console.log(ColorsArray)
      addBlue()
    } else if (dragSrcEl.classList.contains("yellow")){
      ColorsArray.push("yellow")
      console.log(ColorsArray)
      addYellow()
    } else if (dragSrcEl.classList.contains("red")){
      ColorsArray.push("red")
      console.log(ColorsArray)
      addRed()
    }else if (dragSrcEl.classList.contains("clear")){
      ColorsArray.splice(0, ColorsArray.length)
      console.log(ColorsArray)
      clearColor()
    }
    
    return false;

    
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
    
  let items = document.querySelectorAll('.box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });


 
function addBlue() {
    var canvases = document.querySelectorAll(".Canvas")
    if (ColorsArray.includes("yellow") && ColorsArray.includes("red")){
        canvases.forEach(function(canvas){
        canvas.style.backgroundColor = "brown"
          })}
            else if (ColorsArray.includes("yellow")){
              canvases.forEach(function(canvas){
              canvas.style.backgroundColor = "green"
                })}
                  else if (ColorsArray.includes("red")){
                  canvases.forEach(function(canvas){
                  canvas.style.backgroundColor = "purple"
                  })}
                    else if (ColorsArray.includes("blue")){
                      canvases.forEach(function(canvas){
                        canvas.style.backgroundColor = "blue"
                        })}}
        
function addYellow() {
    var canvases = document.querySelectorAll(".Canvas")
    if (ColorsArray.includes("blue") && ColorsArray.includes("red")){
        canvases.forEach(function(canvas){
        canvas.style.backgroundColor = "brown"
          })}
            else if (ColorsArray.includes("blue")){
              canvases.forEach(function(canvas){
              canvas.style.backgroundColor = "green"
                })}
                  else if (ColorsArray.includes("red")){
                  canvases.forEach(function(canvas){
                  canvas.style.backgroundColor = "orange"
                  })}
                    else if (ColorsArray.includes("yellow")){
                      canvases.forEach(function(canvas){
                        canvas.style.backgroundColor = "yellow"
                        })}}

function addRed() {
          var canvases = document.querySelectorAll(".Canvas")
          if (ColorsArray.includes("yellow") && ColorsArray.includes("blue")){
            canvases.forEach(function(canvas){
            canvas.style.backgroundColor = "brown"
            })}
              else if (ColorsArray.includes("yellow")){
                canvases.forEach(function(canvas){
                canvas.style.backgroundColor = "orange"
                })}
                  else if (ColorsArray.includes("blue")){
                  canvases.forEach(function(canvas){
                  canvas.style.backgroundColor = "purple"
                  })}
                    else if (ColorsArray.includes("red")){
                      canvases.forEach(function(canvas){
                        canvas.style.backgroundColor = "red"
                        })}}

function clearColor(){
  var canvases = document.querySelectorAll(".Canvas")
  canvases.forEach(function(canvas){
  canvas.style.backgroundColor = ""
  })
}
  });

