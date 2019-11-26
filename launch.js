window.onload = function(){
    const path = {
        curviness: 0,
        values: [{x: 0, y:0}, {x: 0, y: 500}]
   }


   const tween = new TimelineLite();
           tween.add(
               TweenLite.to("#rocket", 4, {
                   bezier: path
               })
           )
}

// function landing() {
//     const path = {
//         curviness: 0,
//         values: [{x: 0, y:0}, {x: 0, y: 500}]
//    }


//    const tween = new TimelineLite();
//            tween.add(
//                TweenLite.to("#rocket", 4, {
//                    bezier: path
//                })
//            )

// }


function launch(){
    const path = {
        curviness: 0, 
        values: [{x: 0, y:0}, {x: 0, y: -300}]
    }
        document.getElementById('launch').style.animation = "thrust 1.5s steps(2) 3";  

            const tween = new TimelineLite();
            tween.add(
                TweenLite.to("#rocket", 4, {
                    bezier: path
                })
            )
}

