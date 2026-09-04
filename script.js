// ===============================
// SAVE TO MYSQL THROUGH BACKEND
// ===============================

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