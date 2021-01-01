// Home section 2 animation

var Animation = function({ offset } = { offset: 10 }) {
  var _elements;

  // Define a dobra superior, inferior e laterais da tela
  var windowTop = offset * window.innerHeight / 100;
  var windowBottom = window.innerHeight - windowTop;
  var windowLeft = 0;
  var windowRight = window.innerWidth;

  function start(element) {
    // Seta os atributos customizados
    element.style.animationDelay = element.dataset.animationDelay;
    element.style.animationDuration = element.dataset.animationDuration;
    // Inicia a animacao setando a classe da animacao
    element.classList.add(element.dataset.animation);
    // Seta o elemento como animado
    element.dataset.animated = "true";
  }

  function isElementOnScreen(element) {
    // Obtem o boundingbox do elemento
    var elementRect = element.getBoundingClientRect();
    var elementTop =
      elementRect.top + parseInt(element.dataset.animationOffset) ||
      elementRect.top;
    var elementBottom =
      elementRect.bottom - parseInt(element.dataset.animationOffset) ||
      elementRect.bottom;
    var elementLeft = elementRect.left;
    var elementRight = elementRect.right;

    // Verifica se o elemento esta na tela
    return (
      elementTop <= windowBottom &&
      elementBottom >= windowTop &&
      elementLeft <= windowRight &&
      elementRight >= windowLeft
    );
  }

  // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
  function checkElementsOnScreen(els = _elements) {
    for (var i = 0, len = els.length; i < len; i++) {
      // Passa para o proximo laço se o elemento ja estiver animado
      if (els[i].dataset.animated) continue;

      isElementOnScreen(els[i]) && start(els[i]);
    }
  }

  // Atualiza a lista de elementos a serem animados
  function update() {
    _elements = document.querySelectorAll(
      "[data-animation]:not([data-animated])"
    );
    checkElementsOnScreen(_elements);
  }

  // Inicia os eventos
  window.addEventListener("load", update, false);
  window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
  window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

  // Retorna funcoes publicas
  return {
    start,
    isElementOnScreen,
    update
  };
};

// Initialize
var options = {
  offset: 20 //percentage of window
};
var animation = new Animation(options);

// One page scroll

// $(document).ready(function() {
    
//     //activate wow.js
//      new WOW().init();
  
//     //activate fullpage.js
//     $('#fullpage').fullpage({
//       scrollBar: true,
//       navigation: true,
//       navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3'],
//       loopBottom: true,
//       sectionSelector: 'section'
//     });
  
//   //apply color to each section from array
//   int = -1;
//   color_array = ['#1abc9c','#c0392b','#9b59b6','#3498db','#f1c40f','#16a085'];

//   $('section').each(function(){
//     int++
//     $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
//   });
  
// });


// Text to particle

// var canvas = document.querySelector("#scene"),
//   ctx = canvas.getContext("2d"),
//   particles = [],
//   amount = 0,
//   mouse = {x:0,y:0},
//   radius = 1;

// var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

// var copy = document.querySelector("#copy");

// var ww = canvas.width = window.innerWidth;
// var wh = canvas.height = window.innerHeight;

// function Particle(x,y){
//   this.x =  Math.random()*ww;
//   this.y =  Math.random()*wh;
//   this.dest = {
//     x : x,
//     y: y
//   };
//   this.r =  Math.random()*5 + 2;
//   this.vx = (Math.random()-0.5)*20;
//   this.vy = (Math.random()-0.5)*20;
//   this.accX = 0;
//   this.accY = 0;
//   this.friction = Math.random()*0.05 + 0.94;

//   this.color = colors[Math.floor(Math.random()*6)];
// }

// Particle.prototype.render = function() {


//   this.accX = (this.dest.x - this.x)/1000;
//   this.accY = (this.dest.y - this.y)/1000;
//   this.vx += this.accX;
//   this.vy += this.accY;
//   this.vx *= this.friction;
//   this.vy *= this.friction;

//   this.x += this.vx;
//   this.y +=  this.vy;

//   ctx.fillStyle = this.color;
//   ctx.beginPath();
//   ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
//   ctx.fill();

//   var a = this.x - mouse.x;
//   var b = this.y - mouse.y;

//   var distance = Math.sqrt( a*a + b*b );
//   if(distance<(radius*70)){
//     this.accX = (this.x - mouse.x)/100;
//     this.accY = (this.y - mouse.y)/100;
//     this.vx += this.accX;
//     this.vy += this.accY;
//   }

// }

// function onMouseMove(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// }

// function onTouchMove(e){
//   if(e.touches.length > 0 ){
//     mouse.x = e.touches[0].clientX;
//     mouse.y = e.touches[0].clientY;
//   }
// }

// function onTouchEnd(e){
// mouse.x = -9999;
// mouse.y = -9999;
// }

// function initScene(){
//   ww = canvas.width = window.innerWidth;
//   wh = canvas.height = window.innerHeight;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.font = "bold "+(ww/10)+"px sans-serif";
//   ctx.textAlign = "center";
//   ctx.fillText(copy.value, ww/2, wh/2);

//   var data  = ctx.getImageData(0, 0, ww, wh).data;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.globalCompositeOperation = "screen";

//   particles = [];
//   for(var i=0;i<ww;i+=Math.round(ww/150)){
//     for(var j=0;j<wh;j+=Math.round(ww/150)){
//       if(data[ ((i + j*ww)*4) + 3] > 150){
//         particles.push(new Particle(i,j));
//       }
//     }
//   }
//   amount = particles.length;

// }

// function onMouseClick(){
//   radius++;
//   if(radius ===5){
//     radius = 0;
//   }
// }

// function render(a) {
//   requestAnimationFrame(render);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (var i = 0; i < amount; i++) {
//     particles[i].render();
//   }
// };

// copy.addEventListener("keyup", initScene);
// window.addEventListener("resize", initScene);
// window.addEventListener("mousemove", onMouseMove);
// window.addEventListener("touchmove", onTouchMove);
// window.addEventListener("click", onMouseClick);
// window.addEventListener("touchend", onTouchEnd);
// initScene();
// requestAnimationFrame(render);


// Eye rotation

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//   }
//   //eyes follow mouse cursor
// const eye = $(".face__eye-ball");

// document.addEventListener("mousemove", () => {
// 	let x = (event.clientX * 100) / window.innerWidth + "%";
// 	let y = (event.clientY * 100) / window.innerHeight + "%";

// 	for (let i = 0; i < 2; i++) {
// 		eye[i].style.left = x;
// 		eye[i].style.top = y;
// 		eye[i].style.transform = "translate(-" + x + ",-" + y + ")";
// 	}
// });

// //mouth style class
// $(".sns-btn").on("mouseover", () => {
// 	$(".face__mouth").addClass("hover");
// });

// $(".sns-btn").on("mouseleave", () => {
// 	$(".face__mouth").removeClass("hover");
// });
