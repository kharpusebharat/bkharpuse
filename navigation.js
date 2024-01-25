// JavaScript function to show/hide sections based on the button clicked
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.profile-details, .contact-info, .publications').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.querySelector('.' + sectionId.toLowerCase());
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Remove the 'active' class from all buttons
    document.querySelectorAll('.navigation button').forEach(function(button) {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    document.querySelector('[onclick="showSection(\'' + sectionId.toLowerCase() + '\')"]').classList.add('active');
}
