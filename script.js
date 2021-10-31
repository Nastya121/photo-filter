function full(){
    if (document.fullscreenElement) {
     document.exitFullscreen();
    } else {
     document.documentElement.requestFullscreen();
    }
}

function reset(){
  size = document.getElementById("blur_input").value;
  size = 0;
  invert = document.getElementById("invert_input").value;
  invert = 0;
  sepia = document.getElementById("sepia_input").value;
  sepia = 0;
  sature = document.getElementById("sature_input").value;
  sature = 0; 
  hue = document.getElementById("hue_input").value;
  hue = 0;  

  location.reload();
}






blur_input.oninput = function() {
  blur_result.innerHTML = blur_input.value;
};
invert_input.oninput = function() {
  invert_result.innerHTML = invert_input.value;
};
sepia_input.oninput = function() {
  sepia_result.innerHTML = sepia_input.value;
};
sature_input.oninput = function() {
  saturate_result.innerHTML = sature_input.value;
};
hue_input.oninput = function() {
  hue_result.innerHTML = hue_input.value;
};




const inputs=document.querySelectorAll('.filters input');

function headUpdate(){
  const suffix= this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', headUpdate));
inputs.forEach(input => input.addEventListener('mousemove', headUpdate));

const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.image-container');




document.getElementById('saveFile').addEventListener('click', function(e) {
  var Image = document.getElementById('source').innerHTML;
  var file = new File([Image], "pretty image.png");
  saveAs(file);
});


















fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  }
  reader.readAsDataURL(file);
});
