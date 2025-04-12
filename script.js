// var tl = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".two",
//         start: "0% 50%", // first value div ke according hota h (jo 0% & 50% h) & second value 
//         end: "100% 100%", // screen ke according hota h (jo 95% & 50% h), starting or ending btata h
//         scrub: 1,
//         markers: true
//     }})
    
//     tl.to("#coca",{
//         top: "120%",
//         left: "0%"
//     }, 'move')
    
//     tl.to("#coca-glass",{
//         width: "15%",
//         top: "160%",
//         left: "78%",
//         rotate: "400deg"
//     }, 'move')
    
//     tl.to("#coke-logo",{
//         width: "20%",
//         top: "182%",
//         left: "75%",
//     }, 'move')
    
//     tl.to("#lemon-slice",{
//         width: "10%",
//         top: "167%",
//         left: "86%",
//         rotate: "45deg"
//     }, 'move')
    
//     tl.to("#ice",{
//         top: "110%",
//         left: "11%",
//         rotate: "360deg"
//     }, 'move')
    
//     tl.to("#coke-img",{
//         width: "16%",
//         top: "108%",
//         left: "81%",
//         rotate: "-25deg"
//     }, 'move')
    
//     tl.to("#lemon-glass",{
//         top: "110%",
//         left: "18%",
//         rotate: "190deg"
//     }, 'move')
    

// var tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".three",
//         start: "0% 50%",  
//         end: "50% 50%", 
//         scrub: 1,
//         markers: true
//     }})
        
//         tl2.from(".sprite-lemon",{
//             rotate: "-90deg",
//             left: "-10%",
//             top: "110%"
//         }, 'move2')
        
//         tl2.from("#sprite",{
//             rotate: "-90deg",
//             left: "-10%",
//             top: "110%"
//         }, 'move2')
        
//         tl2.from(".pepsi-ice",{
//             rotate: "90deg",
//             left: "10%",
//             top: "110%"
//         }, 'move2')
        
//         tl2.from("#pepsi",{
//             rotate: "90deg",
//             left: "10%",
//             top: "110%"
//         }, 'move2')
        
//         tl2.to("#coca",{
//             width: "28%",
//             top: "214%",
//             left: "36%"
//         }, 'move2')
        
//         tl2.to("#lemon-glass",{
//             width: "16%",
//             top: "205%",
//             left: "48%",
//             rotate: "6deg"
//         }, 'move2')


// yha tk ka code bina responsive k h..........
        
    




// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 50%", // first value div ke according hota h (jo 0% & 50% h) & second value 
    end: "50% 50%", // screen ke according hota h (jo 95% & 50% h), starting or ending btata h
    scrub: 1,
    // markers: true
}})

tl.to("#coca",{
    top: "120%",
    left: "0%"
}, 'move')

tl.to("#coca-glass",{
    width: "15%",
    top: "160%",
    left: "78%",
    rotate: "400deg"
}, 'move')

tl.to("#coke-logo",{
    width: "20%",
    top: "182%",
    left: "75%",
}, 'move')

tl.to("#lemon-slice",{
    width: "10%",
    top: "167%",
    left: "86%",
    rotate: "45deg"
}, 'move')

tl.to("#ice",{
    top: "110%",
    left: "11%",
    rotate: "360deg"
}, 'move')

tl.to("#coke-img",{
    width: "16%",
    top: "108%",
    left: "81%",
    rotate: "-25deg"
}, 'move')

tl.to("#lemon-glass",{
    top: "110%",
    left: "18%",
    rotate: "190deg"
}, 'move')

});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 50%",// first value div ke according hota h (jo 0% & 50% h) & second value  
    end: "50% 50%", // screen ke according hota h (jo 95% & 50% h), starting or ending btata h
    scrub: 1,
    // markers: true
}})

tl.to("#coca",{
    width: "65%",
    top: "132%",
    left: "15%"
}, 'move')

tl.to("#coca-glass",{
    width: "37%",
    top: "226%",
    left: "48%",
    rotate: "400deg"
}, 'move')

tl.to("#coke-logo",{
    width: "42%",
    top: "239%",
    left: "42%",
}, 'move')

tl.to("#lemon-slice",{
    width: "10%",
    top: "167%",
    left: "86%",
    rotate: "45deg"
}, 'move')


tl.to("#coke-img",{
    width: "50%",
    top: "163%",
    left: "53%",
    rotate: "-28deg"
}, 'move')

tl.to("#lemon-glass",{
    top: "129%",
    left: "43%",
    rotate: "5deg"
}, 'move')

});


let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
  // desktop setup code here...

  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 50%",  
    end: "50% 50%", 
    scrub: 1,
    // markers: true
}})

tl2.from(".sprite-lemon",{
    rotate: "-90deg",
    left: "-10%",
    // top: "110%"
}, 'move2')

tl2.from("#sprite",{
    rotate: "-90deg",
    left: "-10%",
    // top: "110%"
}, 'move2')

tl2.from(".pepsi-ice",{
    rotate: "90deg",
    left: "10%",
    // top: "110%"
}, 'move2')

tl2.from("#pepsi",{
    rotate: "90deg",
    left: "10%",
    // top: "110%"
}, 'move2')

tl2.to("#coca",{
    width: "28%",
    top: "214%",
    left: "36%"
}, 'move2')

tl2.to("#lemon-glass",{
    width: "16%",
    top: "205%",
    left: "48%",
    rotate: "6deg"
}, 'move2')

});

mm2.add("(max-width: 799px)", () => {
  // mobile setup code here...
});

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 90%",  
    end: "70% 100%", 
    scrub: 1,
    // markers: true
}})

tl2.from(".sprite-lemon",{
    x: -200,
    opacity: 0, 
    // duration: 0.5,
    // top: "110%"

}, 'move2')

tl2.from("#sprite",{
    
    x: -200,
    opacity: 0, 
    duration: 0.5,
    // top: "110%"
    
}, 'move2')

tl2.from(".pepsi-ice",{
   
    x: -200,
    opacity: 0, 
    // duration: 0.5,
    // top: "110%"
}, 'move2')

tl2.from("#pepsi",{
    
    x: -200,
    opacity: 0, 
    // duration: 0.5,
    // top: "110%"
}, 'move2')

tl2.from("#cocacola-lemon",{
    
    x: -200,
    opacity: 0, 
    // duration: 0.5,
    // top: "110%"
}, 'move2')

tl2.from("#cocacola",{
    
    x: -200,
    opacity: 0, 
    // duration: 0.5,
    // top: "110%"
}, 'move2')

