const inputs = documnt.querySelectorAll('input');

function handleUpdate() {
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mouseOver', handleUpdate));