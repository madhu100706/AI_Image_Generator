
const promptInput = document.getElementById("prompt");
const generateButton = document.querySelector("button");
const generatedImage = document.getElementById("generated-image");
const downloadButton = document.getElementById("download-button");
downloadButton.style.display = "none";
const errorMessage = document.getElementById("error-message");


generateButton.addEventListener("click", function(){


const prompt = promptInput.value;

if (prompt.trim() === "") {
    errorMessage.textContent = "Please enter a prompt.";
    promptInput.focus();
    return;
}

errorMessage.textContent = "";

generateButton.disabled = true;
generateButton.textContent = "⏳ Generating...";

console.log("Sending prompt to flask");
fetch("/generate", {
    method : "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt:prompt
    })
})

.then(response => {

    if (!response.ok) {
        throw new Error("Image generation failed.");
    }

    return response.text();

})



.then(data=> {
    console.log(data);
    const imageUrl = "/" + data;
    generatedImage.src = imageUrl;
    downloadButton.href = imageUrl;
    downloadButton.style.display = "inline-block";

    generateButton.disabled = false;
generateButton.textContent = "✨ Generate Image";
})

.catch(error => {
    console.error("Error:", error);

    alert("Something went wrong while generating the image. Please try again.");


        generateButton.disabled = false;
    generateButton.textContent = "✨ Generate Image";
})
});
