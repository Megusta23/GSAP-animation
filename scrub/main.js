import "./style.css";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

document.querySelector("#app").innerHTML = `
<div>
<div class="box a">a</div>
<div class="box b">b</div>
<div class="box c">c</div>
</div>
`;

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    end: "top 100px",
    scrub: 3,
    markers: true,
  },
});

tl.to(".c", {
  x: 400,
  rotate: 360,
  ease: "none",
  duration: 3,
})
  .to(".c", {
    backgroundColor: "purple",
    duration: 1,
  })
  .to(".c", {
    x: 0,
    duration: 3,
  });
