const sharedHeaderMarkup = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <nav aria-label="Primary">
        <div>
            <a class="logo" href="index.html">Paul McClure</a>
            <p class="site-tagline">Web developer &amp; Colorado State University Computer Science student</p>
        </div>
        <div class="nav-controls">
            <ul>
                <li><a href="index.html" data-page="home">Home</a></li>
                <li><a href="about.html" data-page="about">About</a></li>
                <li><a href="projects.html" data-page="projects">Projects</a></li>
                <li><a href="resume.html" data-page="resume">Resume</a></li>
                <li><a href="contact.html" data-page="contact">Contact</a></li>
            </ul>
            <button type="button" class="theme-toggle" data-theme-toggle aria-pressed="false" aria-label="Toggle high contrast mode">
                <span class="theme-toggle-text">High Contrast</span>
                <span class="theme-toggle-state" aria-hidden="true">Off</span>
            </button>
        </div>
    </nav>
`;

function applyActivePageToNav(activePage) {
    const navLinks = document.querySelectorAll("[data-site-header] [data-page]");

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("data-page") === activePage;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("[data-site-header]");

    if (!header) {
        return;
    }

    header.innerHTML = sharedHeaderMarkup;

    const activePage = document.body.getAttribute("data-active-page");
    applyActivePageToNav(activePage);
});
