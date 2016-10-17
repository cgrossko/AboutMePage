
// TweenLite.to('.image', 3, {width:400, ease: Elastic.easeOut.config(2, 0.3)});

TweenLite.fromTo('.image', 3, {y:600},{y:-43,width:400, ease: Elastic.easeOut.config(1,.5)});

TweenLite.fromTo('.about-me', 3, {x:-400},{x:0, delay:2.5, ease: Elastic.easeOut.config(1,.5)});

TweenLite.fromTo('.social-icons', 3, {x:400},{x:0, delay:4.5, ease: Elastic.easeOut.config(1,.5)});



