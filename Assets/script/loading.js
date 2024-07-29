document.addEventListener('DOMContentLoaded', function () {
    let percentage = 0;
    const loadingPercentage = document.getElementById('loadingPercentage');
    const loadingScreen = document.getElementById('loadingScreen');
    const content = document.getElementById('content');

    function updatePercentage() {
        if (percentage < 100) {
            percentage++;
            loadingPercentage.textContent = percentage + '%';
            setTimeout(updatePercentage, 30); // Adjust the interval for the desired speed
        } else {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }
    }

    updatePercentage();
});
