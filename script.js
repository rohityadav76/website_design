Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .4,
})

Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
})

Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
    // images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
    videos: ["/0.mp4", "/2.mp4", "/3.mp4"],
});
gsap.to(".fleftelem",{
    scrollTrigger:{
       trigger:"#fimg",
       pin:true,
       start:"top top",
       end:"bottom bottom",
       endTrigger:".last",
       scrub:1,
    },
    y:"-500%",
    ease:Power1,
})
let sections = document.querySelectorAll(".fleftelem")
Shery.imageEffect(".images", {
    style: 1,
    // debug:true,
    config:{ onMouse:{ value: 1 }},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate: function(prog){
                setScroll(prog.progress+index)
                }
            })
        })
    },
  });