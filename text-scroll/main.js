import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

document.querySelector("#app").innerHTML = `
  <div class="container"> 
    <h1 class="text">Test<span>WOAH</span></h1>
    <h1 class="text">GSAP<span>AND CLIPPING</span></h1>
    <h1 class="text">CRAZYYY<span>CRAZYYY</span></h1>
    <h1 class="text">HOVER ON ME<span><a href="#"
                target="_blank">SOURCE</a></span></h1>
    <h1 class="text">LIKE THIS?<span><a href="#" target="_blank">LET'S CONNECT</a></span>
    </h1>
  </div>
`;

gsap.registerPlugin(ScrollTrigger);
const textElement = gsap.utils.toArray(".text");

textElement.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true,
    },
  });
});
