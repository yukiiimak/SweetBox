import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", transformOrigin:"top"});
gsap.set("#piping-bag", {x:"-=400", y:"-=50", transformOrigin:"center"});
gsap.set("#piping-bag", {y:"+=50", transformOrigin:"end"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    tl.to("#box", {duration:1.5, rotate:0, ease:"none"}, "upright");
    tl.to("#cover", {duration:2, rotate:-35, delay:.3, ease:"none"}, "fall-tilt");
    tl.to("#cover", {duration:1.5, rotate:0, ease:"none"}, "upright"); 
    tl.to("#piping-bag", {duration:20, delay:1, motionPath:{path:"#motion-path", align:"#motion-path", autoRotate: -100, alignOrigin: [0.5, 0.5]}, ease: "sine.inOut"}, "fall-tilt"); 
    return tl;
}

// ask on greensock forum to see if there is a code for rotating the piping bag how i want it 
// second option is to create a function of just the piping bag and manually rotating it when i want it to

mainTL.add(TL())

// GSDevTools.create();
MotionPathPlugin.create();
// MorphSVGPlugin.create();



