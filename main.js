import './css/style.css'
import { gsap } from "gsap";

const tl = gsap.timeline();
tl.from(".title", {
  opacity: 0, x: -300, duration: 1
}).from(".card-feat1", {
  opacity: 0, x: 300, duration: 2
})
