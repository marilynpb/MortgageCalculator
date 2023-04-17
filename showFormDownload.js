const downloadReportButton = document.getElementById('download-report');
const downloadForm = document.getElementById('download-form');
const viewIcon = document.querySelector('.view-icon');

downloadReportButton.addEventListener('click', function() {
    downloadReportButton.classList.add('hidden');
    downloadForm.classList.remove('hidden');
});

viewIcon.addEventListener('click', function() {
    downloadForm.classList.add('hidden');
    downloadReportButton.classList.remove('hidden');
});