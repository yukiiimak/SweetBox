import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, MorphSVGPlugin);
gsap.set("#box", {y:"-=710", transformOrigin:"top"});
gsap.set("#piping-bag", {x:"-=400", y:"-=50", scale:0.8, transformOrigin:"center"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:2, y:"+=710", rotate:-40, ease:"none"}, "fall-tilt"); 
    tl.to("#box", {duration:3.3, rotate:0, ease:"none"}, "upright");
    tl.to("#cover", {duration:2, rotate:-60, delay:.3, ease:"none"}, "fall-tilt");
    tl.to("#cover", {duration:3.3, rotate:0, ease:"none"}, "upright"); 
    tl.to("#piping-bag", {duration:17, delay:1.3, motionPath:{path:"#motion-path", align:"#motion-path", alignOrigin:[0.5, 0.5], autoRotate:-100}, ease: "sine.inOut"}, "fall-tilt");
    tl.from("#frosting-1", {duration:1.5, delay:6.8, autoAlpha:0}, "upright");
    tl.from("#frosting-2", {duration:1.7, delay:7.7, autoAlpha:0}, "upright");
    tl.from("#frosting-3", {duration:2.4, delay:8.9, autoAlpha:0}, "upright");
    tl.from("#frosting-4", {duration:1.4, delay:9.8, autoAlpha:0}, "upright");
    tl.from("#box-word", {duration:1, delay:13, autoAlpha:0}, "upright");
    tl.from("#sweet-word", {duration:1, delay:13.5, autoAlpha:0}, "upright");
    tl.to("#piping-bag", {y:"+=100", ease:"none"});
    return tl;
}

function thinfrostings(){
    const tl =gsap.timeline();
    tl.to("#thin-frosting-1", {duration:2, delay:3.9, motionPath:{path:"#thin-frosting-motion-path-1", align:"#thin-frosting-motion-path-1", alignOrigin:[0.5, 0], autoRotate:-80}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-2", {duration:2, delay:4.6, motionPath:{path:"#thin-frosting-motion-path-2", align:"#thin-frosting-motion-path-2", alignOrigin:[0.5, 0], autoRotate:-80}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-3", {duration:2, delay:6.5, motionPath:{path:"#thin-frosting-motion-path-3", align:"#thin-frosting-motion-path-3", alignOrigin:[0.5, 0.5], autoRotate:80}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-4", {duration:2, delay:6.8, motionPath:{path:"#thin-frosting-motion-path-4", align:"#thin-frosting-motion-path-4", alignOrigin:[0.5, 0.5], autoRotate:80}, ease:"none"}, "fall-tilt") 
    .to("#thin-frosting-1", {duration:3, delay:9, motionPath:{path:"#thin-frosting-motion-path-1-2", align:"#thin-frosting-motion-path-1-2", alignOrigin:[0.5, 0.5], autoRotate:-100}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-2", {duration:3, delay:9, motionPath:{path:"#thin-frosting-motion-path-2-2", align:"#thin-frosting-motion-path-2-2", alignOrigin:[0.5, 0.5], autoRotate:-100}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-3", {duration:3, delay:9, motionPath:{path:"#thin-frosting-motion-path-3-2", align:"#thin-frosting-motion-path-3-2", alignOrigin:[0.5, 0.5], autoRotate:100}, ease:"none"}, "fall-tilt")
    .to("#thin-frosting-4", {duration:3, delay:9, motionPath:{path:"#thin-frosting-motion-path-4-2", align:"#thin-frosting-motion-path-4-2", alignOrigin:[0.5, 0.5], autoRotate:100}, ease:"none"}, "fall-tilt");
    tl.to("#thin-frosting-1", {duration:0.05, alpha:0}, "disappear")
    .to("#thin-frosting-2", {duration:0.05, alpha:0}, "disappear")
    .to("#thin-frosting-3", {duration:0.05, alpha:0}, "disappear")
    .to("#thin-frosting-4", {duration:0.05, alpha:0}, "disappear"); 
    tl.from("#thin-frosting-1-copy", {duration:0.05, autoAlpha:0}, "appear")
    .from("#thin-frosting-2-copy", {duration:0.05, autoAlpha:0}, "appear")
    .from("#thin-frosting-3-copy", {duration:0.05, autoAlpha:0}, "appear")
    .from("#thin-frosting-4-copy", {duration:0.05, autoAlpha:0}, "appear"); 

    // .to("#thin-frosting-1", {duration:2, morphSVG:"#top-ribbon-right", stroke:"#fff"}, "morph"); 
//     .to("#thin-frosting-2", {duration:2, morphSVG:"#bottom-ribbon-right", stroke:"#fff"}, "morph")
//     .to("#thin-frosting-3", {duration:2, morphSVG:"#bottom-ribbon-left", stroke:"#fff"}, "morph")
//     .to("#thin-frosting-4", {duration:2, morphSVG:"#top-ribbon-left", stroke:"#fff"}, "morph"); 
}

// for morphSVG: make copies of thin frosting and put them on top of box, fade away the originals while fading in the copies, and morph copies into ribbons

mainTL.add(TL())
.add(thinfrostings())

GSDevTools.create();
MotionPathPlugin.create();
MorphSVGPlugin.create(); 



