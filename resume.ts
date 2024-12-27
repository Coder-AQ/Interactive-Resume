function toggleContent(sectionId: string): void {
    const section = document.getElementById(sectionId) as HTMLElement;
    const button = section.nextElementSibling as HTMLButtonElement;
    if (section.style.display === "none") {
        section.style.display = "block";
        button.innerHTML = "Show Less";
    } else {
        section.style.display = "none";
        button.innerHTML = "Show More";
    }
}
