const editor = document.getElementById('editor');
const reset = document.getElementById('btn-reset');

editor.value = localStorage.getItem('editor');

editor.addEventListener('input', () => localStorage.setItem('editor', editor.value));

reset.addEventListener('click', e => {
    e.preventDefault();
    editor.value = '';
    localStorage.removeItem('editor');
})
