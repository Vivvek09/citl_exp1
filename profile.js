document.addEventListener('DOMContentLoaded', () => {
    const profileContent = document.getElementById('profileContent');
    const urlParams = new URLSearchParams(window.location.search);
    let profileHTML = '';

    for (const [key, value] of urlParams.entries()) {
        profileHTML += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
    }

    profileContent.innerHTML = profileHTML;
    profileContent.classList.add('fade-in');
});