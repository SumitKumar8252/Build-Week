const tagInput = document.getElementById('tagInput');
const tagResults = document.getElementById('tagResults');

let debounceTimer;

tagInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value.trim();
    if (query.length === 0) {
        tagResults.style.display = 'none';
        tagResults.innerHTML = '';
        return;
    }
    debounceTimer = setTimeout(() => {
        searchTags(query);
    }, 500);
});

function searchTags(query) {
    const dummyHashtags = [
        '#Marketing', '#SocialMedia', '#Buffer', '#Content', '#Strategy',
        '#Instagram', '#LinkedIn', '#Twitter', '#Growth', '#Productivity'
    ];
    const filtered = dummyHashtags.filter(tag =>
        tag.toLowerCase().includes(query.toLowerCase())
    );

    displayTagResults(filtered);
}

function displayTagResults(tags) {
    tagResults.innerHTML = '';
    if (tags.length === 0) {
        tagResults.style.display = 'none';
        return;
    }
    tags.forEach(tag => {
        const div = document.createElement('div');
        div.textContent = tag;
        div.className = 'tag-result-item';
        div.addEventListener('click', () => {
            tagInput.value = tag;
            tagResults.style.display = 'none';
        });
        tagResults.appendChild(div);
    });
    tagResults.style.display = 'block';
}

// Drag & drop file handling
const uploadBox = document.querySelector('.upload-box');
const fileInput = document.getElementById('fileInput');

uploadBox.addEventListener('click', () => {
    fileInput.click();
});

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.background = '#f0f8ff';
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.background = 'transparent';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.background = 'transparent';
    const files = e.dataTransfer.files;
    if (files.length) {
        alert(`Selected file: ${files[0].name}`);
    }
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
        alert(`Selected file: ${fileInput.files[0].name}`);
    }
});

//home page
const home= document.getElementById('logo')
home.addEventListener('click',()=>{
  window.location.href='../dashboard.html'
})
