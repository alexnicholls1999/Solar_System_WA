
window.onload = function() {
    const path = {
        curviness: 0,
        values: [{x: 0, y:0}, {x: 0, y: -500}]
   }
   
   document.getElementById("launch").addEventListener("click", e=>{
       document.getElementById("launch");
       const tween = new TimelineLite();
       tween.add(
           TweenLite.to("#rocket", 2, {
               bezier: path
           })
           );
   });
}

