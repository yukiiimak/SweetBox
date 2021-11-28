import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", transformOrigin:"top"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    tl.to("#box", {duration:1.5, rotate:0, ease:"none"}, "upright");
    tl.to("#cover", {duration:2, rotate:-35, delay:.3, ease:"none"}, "fall-tilt");
    tl.to("#cover", {duration:1.5, rotate:0, ease:"none"}, "upright"); 
    // tl.to("#piping-bag", {duration:15, motionPath:{path:"#motion-path", align:"#motion-path"}}); 
    return tl;
}

mainTL.add(TL())

MotionPathPlugin.create();



