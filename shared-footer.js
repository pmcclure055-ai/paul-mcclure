const sharedFooterMarkup = `
    <div class="footer-content">
        <p>&copy; 2026 Paul McClure. All rights reserved.</p>
        <div class="contact-links">
            <a href="mailto:pmcclure055@gmail.com">Email Me</a>
            <a href="https://www.linkedin.com/in/paul-mcclure-2a26a0401/?enhance=null" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/pmcclure055-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p class="disclaimer">I strive to keep all website content accurate and up to date, but I cannot guarantee that all information is completely current or error-free.</p>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("[data-site-footer]");

    if (!footer) {
        return;
    }

    footer.innerHTML = sharedFooterMarkup;
});