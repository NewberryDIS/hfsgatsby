
function createLightbox(image, caption){

    var modal = document.createElement("div");
    var imgElement = document.createElement("img");
    modal.classList.add("lbmodal");
    imgElement.classList.add("lbimage")
    imgElement.src = image;
    var imageLink = document.createElement("a")
    imageLink.href=image
    imageLink.textContent = caption;
    imageLink.target = "blank";
// console.log(caption)
    modal.appendChild(imgElement);
    modal.appendChild(imageLink);
    modal.onclick = function() {
        modal.remove();
    }
    var element = document.getElementById("toplevel");
    element.appendChild(modal);
}

