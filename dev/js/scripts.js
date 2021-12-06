import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", transformOrigin:"top"});
gsap.set("#piping-bag", {x:"-=400", y:"-=50", scale:0.8, transformOrigin:"center"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    tl.to("#box", {duration:3, rotate:0, ease:"none"}, "upright");
    tl.to("#cover", {duration:2, rotate:-60, delay:.3, ease:"none"}, "fall-tilt");
    tl.to("#cover", {duration:3, rotate:0, ease:"none"}, "upright"); 
    tl.to("#piping-bag", {duration:17, delay:1.3, motionPath:{path:"#motion-path", align:"#motion-path", alignOrigin:[0.5, 0.5], autoRotate:-100}, ease: "sine.inOut"}, "fall-tilt");
    tl.to("#thin-frosting-1", {duration:2, delay:4, motionPath:{path:"#thin-frosting-motion-path-1", align:"#thin-frosting-motion-path-1", alignOrigin:[0.5, 0], autoRotate:-80}, ease:"none"}, "fall-tilt"); 
    tl.to("#thin-frosting-2", {duration:2, delay:4.6, motionPath:{path:"#thin-frosting-motion-path-2", align:"#thin-frosting-motion-path-2", alignOrigin:[0.5, 0], autoRotate:-80}, ease:"none"}, "fall-tilt"); 
    tl.to("#thin-frosting-3", {duration:2, delay:6.7, motionPath:{path:"#thin-frosting-motion-path-3", align:"#thin-frosting-motion-path-3", alignOrigin:[0.5, 0.5], autoRotate:80}, ease:"none"}, "fall-tilt");
    tl.to("#thin-frosting-4", {duration:2, delay:6.9, motionPath:{path:"#thin-frosting-motion-path-4", align:"#thin-frosting-motion-path-4", alignOrigin:[0.5, 0.6], autoRotate:80}, ease:"none"}, "fall-tilt");  
    return tl;
}

mainTL.add(TL())

// GSDevTools.create();
MotionPathPlugin.create();
// MorphSVGPlugin.create(); 



