window.onload = function()
{
    let paragraphs = document.createElement("p");
    paragraphs.textContent = "Now featuring a headphone jack!";
    let description = document.getElementById("description");
    description.appendChild(paragraphs);
}
