window.onload = function(){
    const path = {
        curviness: 0,
        values: [{x: 0, y:0}, {x: 0, y: 450}]
   }

//    document.getElementById('rocket').style.backgroundPosition = "216px  270px";  
    const tween = new TimelineLite({onComplete: stopSpriteSheet});
    // const tween = new TimelineLite();
//    document.getElementById('rocket').removeProperty(marginTop);
//    document.getElementById('rocket').style.animation = "thrust 2s steps(2) 2"; 
//    document.getElementById('rocket').style.marginTop = "-350px";  
           tween.add(
               TweenLite.to("#rocket", 4, {
                   bezier: path
               })  
           )
}


function stopSpriteSheet(){
    document.getElementById('rocket').classList.remove("launchAnimation");
}

// function landing() {
//     const path = {
//         curviness: 0,
//         values: [{x: 0, y:0}, {x: 0, y: 500}]
//    }

//    document.getElementById('rocket').style.backgroundPosition = "-250px  0px";  

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
        values: [{x: 0, y:0}, {x: 0, y: -1000}]
    }
    

    document.getElementById('rocket').classList.add("launchAnimation");
    // document.getElementById('rocket').style.backgroundPosition = "-250px  0px";
    // document.getElementById('rocket').style.animation = "thrust 2s steps(2) 2";  

    const tween = new TimelineLite();
    tween.add(
        TweenLite.to("#rocket", 6, {
        bezier: path
        })
    )

    setTimeout (function(){
        window.location.href = 'index.html';
        // window.open('rocketlanding.html');
    }, 3000);
}

