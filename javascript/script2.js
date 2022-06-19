const div1 = document.querySelector('.box1');
div1.addEventListener('click', (event) => {
  localStorage.setItem("label", "Historical Places");
  window.open('../html/details.html')
});

const div2 = document.querySelector('.box2');
div2.addEventListener('click', (event) => {
  localStorage.setItem("label", "Food");
  window.open('../html/details.html')
});

const div3 = document.querySelector('.box3');
div3.addEventListener('click', (event) => {
  localStorage.setItem("label", "Agriculture");
  window.open('../html/details.html')
});

const div4 = document.querySelector('.box4');
div4.addEventListener('click', (event) => {
  localStorage.setItem("label", "Textile and Fabric");
  window.open('../html/details.html')
});

const div5 = document.querySelector('.box5');
div5.addEventListener('click', (event) => {
  localStorage.setItem("label", "Culture");
  window.open('../html/details.html')
});

const div6 = document.querySelector('.box6');
div6.addEventListener('click', (event) => {
  localStorage.setItem("label", "Places");
  window.open('../html/details.html')
});
