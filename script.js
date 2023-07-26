// Function to toggle image size
function toggleImgSize(imgElement) {
    // Check if the image is currently enlarged
    if (imgElement.classList.contains("enlarged")) {
        // If enlarged, reset size to original
        imgElement.style.transform = "scale(1)";
        imgElement.style.zIndex = "1";
    } else {
        // If not enlarged, set image size to 2 times original
        imgElement.style.transform = "scale(2)";
        imgElement.style.zIndex = "5";
    }

    // Toggle the 'enlarged' class on the image
    imgElement.classList.toggle("enlarged");

    // Animation effect
    imgElement.style.transition = "transform 0.25s ease";
}

// Get all images with the class name 'enlarge-clickable'
const images = document.querySelectorAll(".enlarge-clickable");

// Add click event listeners to all images with the 'enlarge-clickable' class
images.forEach((img) => {
    img.addEventListener("click", () => toggleImgSize(img));
});