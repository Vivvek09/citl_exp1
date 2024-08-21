const rows = 150;
const cols = 50;
const colors = [
    "#60A5FA", "#F9A8D4", "#6EE7B7", "#FBBF24",
    "#FCA5A1", "#A78BFA", "#3B82F6", "#6366F1", "#A5B4FC"
    ];

const backgroundAnim = document.getElementById('backgroundAnim');

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'box';

    for (let j = 0; j < cols; j++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'box';
        colDiv.style.setProperty('--random-color', getRandomColor());
        rowDiv.appendChild(colDiv);
    }
    backgroundAnim.appendChild(rowDiv);
}
document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible-header');
    collapsibles.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 20 + "px";  r
            }
        });
    });

    let coverPhotoBase64 = '';
    let profilePhotoBase64 = '';

    document.getElementById('coverPhotoInput').addEventListener('change', function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('coverPhotoPreview');
            output.style.backgroundImage = `url(${reader.result})`;
            output.style.display = 'block';
            coverPhotoBase64 = reader.result; 
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    document.getElementById('profilePhotoInput').addEventListener('change', function (event) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = document.getElementById('profilePhotoPreview');
            output.style.backgroundImage = `url(${reader.result})`;
            output.style.display = 'block'; 
            profilePhotoBase64 = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

   
    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);
        const profileData = Object.fromEntries(formData.entries());
        profileData.skills = profileData.skills.split(',').map(skill => skill.trim());
        profileData.coverPhoto = coverPhotoBase64;
        profileData.profilePhoto = profilePhotoBase64;
        localStorage.setItem('profileData', JSON.stringify(profileData));
        window.location.href = 'profile.html';
    });
});