/* =====================================================
DIK BIJOY BANIK — PORTFOLIO JAVASCRIPT
===================================================== */

/* ================= REACTOR INTERACTION ================= */

const reactor = document.querySelector(".reactor");

if (reactor) {

reactor.addEventListener("mousemove", (event) => {

const rect = reactor.getBoundingClientRect();

const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 20;
const rotateY = (centerX - x) / 20;

reactor.style.transform =
  `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

reactor.addEventListener("mouseleave", () => {

reactor.style.transform =
  "perspective(700px) rotateX(0deg) rotateY(0deg)";

});

}

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
".section, .skill-card, .project-card, .lab-card, .timeline-item, .contact-card"
);

const revealObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    entry.target.style.opacity = "1";
    entry.target.style.transform = "translateY(0)";

    revealObserver.unobserve(entry.target);

  }

});

},
{
threshold: 0.12
}
);

revealElements.forEach((element) => {

element.style.opacity = "0";

element.style.transform = "translateY(25px)";

element.style.transition =
"opacity 0.7s ease, transform 0.7s ease";

revealObserver.observe(element);

});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navigationLinks =
document.querySelectorAll(".navbar nav a");

const sectionObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    navigationLinks.forEach((link) => {
      link.style.color = "";
    });


    const activeLink = document.querySelector(
      `.navbar nav a[href="#${entry.target.id}"]`
    );


    if (activeLink) {
      activeLink.style.color = "#ffb52e";
    }

  }

});

},
{
threshold: 0.35
}
);

sections.forEach((section) => {
sectionObserver.observe(section);
});

/* ================= SMOOTH NAVIGATION ================= */

navigationLinks.forEach((link) => {

link.addEventListener("click", (event) => {

const targetId = link.getAttribute("href");

if (!targetId || !targetId.startsWith("#")) {
  return;
}


const target = document.querySelector(targetId);

if (!target) {
  return;
}


event.preventDefault();


target.scrollIntoView({
  behavior: "smooth",
  block: "start"
});

});

});

/* ================= PROJECT MEDIA SUPPORT ================= */

/*
To add the real Line Follower Robot image later:

<img src="images/projects/line-follower-robot.jpg"
alt="Line Follower Robot">

To add the project video:

   <video controls>
     <source src="videos/line-follower-robot.mp4"
             type="video/mp4">
   </video>To add the project report:

<a href="reports/line-follower-robot.pdf"
target="_blank">
View Report
</a>
*/

/* ================= CONSOLE MESSAGE ================= */

console.log(
"Dik Bijoy Banik Portfolio — System Online."
);
