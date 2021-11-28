import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#box", {y:"-=710", x:"-=150", transformOrigin:"top"});

const mainTL = gsap.timeline(); 

function TL(){
    const tl =gsap.timeline();
    tl.to("#box", {duration:3, y:"+=710", rotate:-40, ease:"none"}); 
    return tl;
}

mainTL.add(TL())

MotionPathPlugin.create();



