document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    // BOOKING FORM
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // GET FORM VALUES
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;
            const location = document.getElementById("location").value;
            const request = document.getElementById("request").value;

            // BOOKING DATA
            const booking = {
                name: name,
                phone: phone,
                service: service,
                date: date,
                location: location,
                request: request
            };

            // SAVE TO MYSQL THROUGH BACKEND
            fetch("https://call-assistant-backend.onrender.com/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(booking)
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                if (data.success) {
                    alert("Booking submitted successfully!");
                    bookingForm.reset();
                } else {
                    alert("Booking failed. Please try again.");
                }

            })
            .catch(function (error) {

                console.error("Backend Error:", error);

                alert("Booking failed. Please try again.");

            });

        });

    }

});