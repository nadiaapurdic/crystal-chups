/* =========================

 CRYSTALCHUPS JAVASCRIPT

========================= */




/* =========================

 FLAVOR SELECTOR

========================= */



const flavors = document.querySelectorAll(".flavor");



const flavorResult =

  document.getElementById("flavor-result");




flavors.forEach(function(flavor) {



  flavor.addEventListener("click", function() {



    /* Remove selection from all cards */

    flavors.forEach(function(card) {

      card.classList.remove("selected");

    });



      /* Select clicked card */

      flavor.classList.add("selected");



      /* Get flavor name */

      const flavorName =

        flavor.getAttribute("data-flavor");



      /* Update message */

      flavorResult.textContent =

        "YOUR ICE MOOD: " +

        flavorName +

        " ✦ NOW GO MAKE SOME NOISE.";



  });



});




/* =========================

  SCHEDULE INTERACTION

========================= */



const events =

  document.querySelectorAll(".event");



events.forEach(function(event) {



  event.addEventListener("click", function() {



      events.forEach(function(item) {

        item.classList.remove("selected-event");

      });



      event.classList.add("selected-event");



  });



});




/* =========================

  APPLICATION FORM

========================= */



const form =

  document.getElementById("joinForm");



const formMessage =

  document.getElementById("formMessage");




form.addEventListener("submit", function(event) {



  event.preventDefault();




  const name =

      document.getElementById("name").value.trim();




  if (name === "") {

      formMessage.textContent =

        "PLEASE ENTER YOUR NAME.";



      return;

  }




  formMessage.textContent =

      "YOU'RE IN, " +

      name.toUpperCase() +

       " ✦ YOUR CRYSTALCHUPS APPLICATION HAS BEEN REGISTERED.";




  /* Reset form */

  form.reset();



});




/* =========================

  SCROLL REVEAL ANIMATION

========================= */



const animatedElements =

  document.querySelectorAll(

       ".athlete-card, .event, .flavor, .stats"

  );




const observer =

  new IntersectionObserver(

       function(entries) {



         entries.forEach(function(entry) {



              if (entry.isIntersecting) {



                  entry.target.animate(



                       [

                            {

                                 opacity: 0,

                                 transform:

                                   "translateY(30px)"

                            },



                            {

                                 opacity: 1,

                                 transform:

                                   "translateY(0)"

                            }

                       ],



                       {

                            duration: 700,

                            easing:

                                 "cubic-bezier(.2,.8,.2,1)",

                            fill: "forwards"

                       }



                  );



                  observer.unobserve(entry.target);



              }



            });



       },



       {

            threshold: 0.15

       }

  );




animatedElements.forEach(function(element) {



  observer.observe(element);



});




/* =========================

 SMOOTH NAVIGATION

========================= */



const links =

  document.querySelectorAll(

       'a[href^="#"]'

  );




links.forEach(function(link) {



  link.addEventListener("click", function(event) {



       const targetID =

         link.getAttribute("href");



       const target =

         document.querySelector(targetID);




       if (target) {



          event.preventDefault();



          target.scrollIntoView({

            behavior: "smooth",

            block: "start"

          });



      }



  });



});




/* =========================

  PARALLAX EFFECT

========================= */



const skaterArea =

  document.querySelector(".skater-area");




window.addEventListener("mousemove", function(event) {



  if (!skaterArea) return;




  const x =

      (event.clientX / window.innerWidth - 0.5);



  const y =

      (event.clientY / window.innerHeight - 0.5);




  skaterArea.style.transform =

      `translate(${x * 15}px, ${y * 15}px)`;



});




/* =========================

  RANDOM SPARK EFFECT

========================= */



const sparks =

  document.querySelectorAll(".spark");



sparks.forEach(function(spark, index) {



     spark.style.animationDelay =

          `${index * 0.4}s`;



});




/* =========================

     CONSOLE MESSAGE

========================= */



console.log(

     "   🍭 CRYSTALCHUPS — TASTE THE RUSH. OWN THE ICE. ⛸️"

);