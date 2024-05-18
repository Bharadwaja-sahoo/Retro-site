const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl=gsap.timeline()

tl.to("#page1,#page2,#page3,#page4,#page5,#page6",{
    y:"100vh",
    scale:0.6,
    duration:0,
})
tl.to("#page1,#page2,#page3,#page4,#page5,#page6",{
    y:"0vh",
    duration:1,
    delay:1,
})
tl.to("#page1,#page2,#page3,#page4,#page5,#page6",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:2, 
});
