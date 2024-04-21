document.addEventListener('DOMContentLoaded', () => {


    gsap.fromTo('.section1',{
      opacity: 0,
    },{
      opacity: 1,
      duration: 2,
    })

    gsap.fromTo('video',{
       scale: 0,
    },{
       scale: 1,
       delay: 0.2,
       duration: 1,
    })
})

gsap.registerPlugin(ScrollTrigger);

gsap.to(".pContent", {
    yPercent: -30,
    ease: "none",
    duration: 1,
    scrollTrigger: {
      trigger: ".pSection",
      start: "top bottom", // the default values
      end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".pImage", {
    yPercent: 20,
    ease: "none",
    duration: 1,
    scrollTrigger: {
      trigger: ".pSection",
      start: "top bottom", // the default values
      end: "bottom top",
      scrub: true
    }, 
  });

  gsap.fromTo('.card',{
    y: 100,
    opacity: 0,
  }, {
    y: "0%",
    opacity: 1,
    ease: "power4.InOut",
    stagger: 0.25,
    duration: 1,
    delay: .5,

    scrollTrigger: {
      trigger: '.section2',
      toggleActions: "restart none none reset",
    }
  })

  gsap.fromTo('.pText',{
     opacity: 0,
     yPercent: 100,
  },{
     opacity: 1,
     ease: "power4.InOut",
     duration: 1,
     yPercent: 0,

     scrollTrigger: {
      trigger: '.section2',
      toggleActions: "restart none none reset",
     }
  })