
function createLightbox(image){

    var modal = document.createElement("div");
    var imgElement = document.createElement("img");
    modal.classList.add("lbmodal");
    imgElement.classList.add("lbimage")
    imgElement.src=image;
    modal.appendChild(imgElement);
    modal.onclick = function() {
        modal.remove();
    }
   var element = document.getElementById("toplevel");
   element.appendChild(modal);
}