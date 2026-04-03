const addBtn = document.getElementById('addBtn');
const result = document.getElementById('result');

addBtn.addEventListener('click', () => {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();

    if (num1 === '' || num2 === '') {
        result.textContent = 'Please enter both numbers';
        return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    addBtn.disabled = true;
    fetch(`/add?num1=${encodeURIComponent(n1)}&num2=${encodeURIComponent(n2)}`)
        .then(res => res.text())
        .then(data => result.textContent = data)
        .catch(err => console.error(err))
        .finally(() => addBtn.disabled = false);
});