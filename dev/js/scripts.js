import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", transformOrigin:"top"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    // tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    // tl.to("#box", {duration:1.5, rotate:0, ease:"none"}, "upright");
    // tl.to("#cover", {duration:2, rotate:-35, delay:.3, ease:"none"}, "fall-tilt");
    // tl.to("#cover", {duration:1.5, rotate:0, ease:"none"}, "upright"); 
    tl.to("#piping-bag", {duration:20, motionPath:{path:"#motion-path", align:"#motion-path", autoRotate: true, alignOrigin:[0, 0.1]}, ease: "sine.inOut"}); 
    return tl;
}

// ask on greensock forum to see if there is a code for rotating the piping bag how i want it 
// second option is to create a function of just the piping bag and manually rotating it when i want it to

mainTL.add(TL())

MotionPathPlugin.create();



