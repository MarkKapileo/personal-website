const slider = document.createElement('input');
slider.type = 'range';
slider.min = '1';
slider.max = document.querySelectorAll('#image-slider img').length.toString();
slider.value = '1';
slider.addEventListener('input', updateSlider);

document.body.insertBefore(slider, document.getElementById('image-slider'));

function updateSlider() {
  const index = parseInt(slider.value) - 1;
  const images = document.querySelectorAll('#image-slider img');
  
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}