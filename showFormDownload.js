const downloadReportButton = document.getElementById('download-report');
const downloadForm = document.getElementById('download-form');

downloadReportButton.addEventListener('click', function() {
    downloadReportButton.classList.add('hidden');
    downloadForm.classList.remove('hidden');
});
