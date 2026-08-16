document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const bookingForm = document.getElementById("bookingForm");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const textInputs =
                bookingForm.querySelectorAll('input[type="text"]');

            const name = textInputs[0].value;
            const phone =
                bookingForm.querySelector('input[type="tel"]').value;
            const service =
                bookingForm.querySelector('select').value;
            const date =
                bookingForm.querySelector('input[type="date"]').value;
            const location = textInputs[1].value;
            const request =
                bookingForm.querySelector('textarea').value;

            const message =
                "\uD83D\uDCCB New Call Assistant Booking\n\n" +
                "\uD83D\uDC64 Name: " + name + "\n" +
                "\uD83D\uDCDE Phone: " + phone + "\n" +
                "\uD83D\uDECE\uFE0F Service: " + service + "\n" +
                "\uD83D\uDCC5 Date: " + date + "\n" +
                "\uD83D\uDCCD Location: " + location + "\n" +
                "\uD83D\uDCDD Request: " + request;

            const whatsappNumber = "917760411789";

            const whatsappURL =
                "https://api.whatsapp.com/send?phone=" +
                whatsappNumber +
                "&text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        });
    }

});