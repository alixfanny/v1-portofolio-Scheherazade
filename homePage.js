const btn = document.getElementById('btnPortfolioAccess');
const insta = document.getElementById("iconInstagram");


btn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'portfolio.html';
})

insta.addEventListener("click", function(event) {
    event.preventDefault();
    window.open('https://www.instagram.com/scheherazade_portfolio/')
})

function checkSize() {
    if (window.innerWidth <= 768) {
      document.getElementById('image1').src = "./img/carousel/1-mobile.jpg";
      document.getElementById('image2').src = "./img/carousel/2-mobile.jpg";
      document.getElementById('image3').src = "./img/carousel/3-mobile.jpg";
      document.getElementById('image4').src = "./img/carousel/4-mobile.jpg";
      document.getElementById('image5').src = "./img/carousel/5-mobile.jpg";
      document.getElementById('image6').src = "./img/carousel/6-mobile.jpg";
      document.getElementById('image7').src = "./img/carousel/7-mobile.jpg";
      document.getElementById('image8').src = "./img/carousel/8-mobile.jpg";
      document.getElementById('image9').src = "./img/carousel/9-mobile.jpg";
      
    } else {
      document.getElementById('image1').src = "./img/carousel/1.jpg";
      document.getElementById('image2').src = "./img/carousel/2.jpg";
      document.getElementById('image3').src = "./img/carousel/3.jpg";
      document.getElementById('image4').src = "./img/carousel/4.jpg";
      document.getElementById('image5').src = "./img/carousel/5.jpg";
      document.getElementById('image6').src = "./img/carousel/6.jpg";
      document.getElementById('image7').src = "./img/carousel/7.jpg";
      document.getElementById('image8').src = "./img/carousel/8.jpg";
      document.getElementById('image9').src = "./img/carousel/9.jpg";
      
    }
}
  
window.addEventListener('resize', checkSize);
window.addEventListener('load', checkSize);
  
