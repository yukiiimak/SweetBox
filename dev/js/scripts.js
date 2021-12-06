import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", x:"-=50", transformOrigin:"top"});
gsap.set("#piping-bag", {x:"-=400", y:"-=50", scale: 0.9, transformOrigin:"center"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    tl.to("#box", {duration:1.5, rotate:0, ease:"none"}, "upright");
    tl.to("#cover", {duration:2, rotate:-35, delay:.3, ease:"none"}, "fall-tilt");
    tl.to("#cover", {duration:1.5, rotate:0, ease:"none"}, "upright"); 
    tl.to("#piping-bag", {duration:20, delay:1.3, motionPath:{path:"#motion-path", align:"#motion-path", autoRotate: -100, alignOrigin: [0.5, 0.5]}, ease: "sine.inOut"}, "fall-tilt"); 
    return tl;
}

mainTL.add(TL())

// GSDevTools.create();
MotionPathPlugin.create();
// MorphSVGPlugin.create();



