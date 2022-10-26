const states = [
  {
    name: 'Sweden',
    descr: 'Sweden is a Nordic country in Scandinavia. The capital and largest city is Stockholm.',
    image: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'    
  }, {
    name: 'Peru',
    descr: 'Peru is a country in western South America and has a population of 32 million.',
    image: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'    
  }, {
    name: 'Chile ',
    descr: 'Chile is a country in the western part of South America. It is the southernmost country in the world.',
    image: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'    
  }, {
    name: 'Argentina',
    descr: 'Argentina is a country in the southern half of South America. Argentina covers an area of 2,780,400 km2',
    image: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'    
  }, {
    name: 'Colombia',
    descr: 'Colombia is a country in South America with an insular region in North America.',
    image: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'    
  },
];

const elemMainImage = document.createElement('img');
const carouselTop = document.querySelector('.carousel-top');
const carouselBottom = document.querySelector('.carousel-bottom');
const timeAutoplay = 2000;
let counter = 1;
let direction = 'right'
let newCounter;
let cicle;

const centralImage = (index) => {
  carouselTop.innerHTML = '';
  elemMainImage.src = states[index].image;
  carouselTop.append(elemMainImage);
}

const imageDescription = (index) => {
  const template = `
    <div class="title-descr">
      <h2>${states[index].name}</h2>
      <p>${states[index].descr}</p>
    </div>`
  return template
}

loadPage();

document.getElementById('btn-left').addEventListener('click', function(){
  slide('left');
});
document.getElementById('btn-right').addEventListener('click', function(){
  slide('right');
});
document.getElementById('inverse').addEventListener('click', function(){
  clearInterval(cicle);
  (direction === 'right') ? direction = 'left' : direction = 'right';
  autoplay(direction);
});
document.getElementById('stop').addEventListener('click', function(){
  clearInterval(cicle);
});
document.getElementById('play').addEventListener('click', function(){
  clearInterval(cicle); //protect against clicking play while already running
  autoplay(direction);
});
document.getElementById('random').addEventListener('click', function(){
  slide('right');
});

function loadPage(){
  changeCentralImage();
  states.forEach(createSlider);
  autoplay(direction);
}

function changeCentralImage(){
  centralImage(counter);
  carouselTop.innerHTML += imageDescription(counter)
}

function createSlider(elem, index){
  const thumb = document.createElement('img');
  (index == 1) ? thumb.classList = 'active' : thumb.classList = 'not-active';
  thumb.src = elem.image;
  thumb.id = index;
  thumb.addEventListener('click', function(){
    changeImage(this.id)
  });
  carouselBottom.append(thumb);
}

function slide(direction){
  newCounter = counter;
  if (direction == 'right') {
    if (++newCounter==5) newCounter=0;
  } else {
    if (--newCounter==-1) newCounter=4;
  }
  changeImage(newCounter);
}

function changeImage(newCounter){
  const thumbs = document.querySelectorAll('.carousel-bottom img');
  thumbs[counter].classList.replace('active', 'not-active');
  counter = newCounter;
  thumbs[newCounter].classList.replace('not-active', 'active');
  changeCentralImage();
}

function autoplay(direction){
  cicle = setInterval(function(){
    slide(direction)
  }, timeAutoplay);
}