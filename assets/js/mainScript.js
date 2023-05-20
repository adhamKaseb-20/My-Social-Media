function openWhatsApp() {
    // Replace '1234567890' with the phone number you want to message
    var phoneNumber = '201120610381';

    // Construct the WhatsApp URL
    var url = 'https://api.whatsapp.com/send?phone=' + +phoneNumber;

    // Open WhatsApp in a new tab or window
    window.open(url);
}