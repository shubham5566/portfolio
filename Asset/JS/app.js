gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from(".left-box", {
    height: 0,
    duration: 1,
});
tl.from(".right-box", {
    y: "100%",
    duration: 1,
    delay: "-1",
});
tl.from(".right-box>img", {
    y: "100%",
    duration: 0.5,
    opacity: 0,
});

tl.from(".circle ", {
    opacity: 0,
    duration: 0.5,
    rotate: -360,
});
tl.call(removeBodyClass, []);
tl.from(".black-box", {
    width: "0%",
    duration: 1,
    delay: 1,
});
tl.from(".black-box>img", {
    y: "50%",
    opacity: 0,
    stagger: {
        each: 0.1,
    },
    duration: 1,
});
function removeBodyClass() {
    document.querySelector(".head").classList.remove("p-5");
}

gsap.from(".lead", {
    x: "-200%",
    // scale: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".lead",
        // markers: true,
        start: "top 69%",
        end: "top 45%"
        // end:""

    }
})
const leadpara = document.querySelector(".lead+p");
gsap.from(leadpara, {
    x: "200%",
    duration: 0.3,
    scrollTrigger: {
        trigger: leadpara,
        // markers: true,
        start: "top 69%",
        end: "top 45%"
        // end:""
    }

})
tl.from(".card", {
    // y: "50%",
    opacity: 0,
    stagger: {
        each: 1,
    },
    scrollTrigger: {
        trigger: ".card",
        start: "top 70%",
        // markers: true
    },
    duration: 1,
});
// tl.from(".panel", {
//     // y: "50%",
//     // opacity: 0,
//     scale: 2,
//     stagger: {
//         each: 1,
//     },
//     scrollTrigger: {
//         trigger: ".panel",
//         start: "top 70%",
//         markers: true,
//         // scale: 1
//     },
//     duration: 1,
// });

// .lead
// .lead + p



// gsap.from(".card", {3

//     duration: 1,
//     scale: 0,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".card",
//         start: "top 80%",
//         end: "bottom 60%",
//         markers: true,

//     }

// })