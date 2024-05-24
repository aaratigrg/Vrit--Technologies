
document.addEventListener('DOMContentLoaded', () => {
    const bulb = document.getElementById('bulb');
    const button = document.getElementById('toggleButton');
    
    let isBulbOn = false;

    button.addEventListener('click', () => {
        isBulbOn = !isBulbOn;
        if (isBulbOn) {
            bulb.src = 'bulb-on.png';
            button.textContent = 'Turn Off';
        } else {
            bulb.src = 'bulb-off.png';
            button.textContent = 'Turn On';
        }
    });
});
