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
const mainImage = (index) => elemMainImage.src = states[index].image;
const imageDescription = (index) => {
  const template = `
    <div class="title-descr">
      <h2>${states[index].name}</h2>
      <p>${states[index].descr}</p>
    </div>`
  return template
}

loadPage();

function loadPage(){
  mainImage(1);
  carouselTop.append(elemMainImage);
  carouselTop.innerHTML += imageDescription(1)
  states.forEach(createSlider);
}

function createSlider(elem, index){
  const thumb = document.createElement('img');
  (index == 1) ? thumb.classList = 'active' : thumb.classList = 'not-active';
  thumb.src = elem.image;
  carouselBottom.append(thumb);
}