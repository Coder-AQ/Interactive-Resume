function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section.nextElementSibling;
    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerHTML = "Show Less";
    }
    else {
        section.style.display = "none";
        button.innerHTML = "Show More";
    }
}
