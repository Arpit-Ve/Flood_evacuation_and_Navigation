document.addEventListener("DOMContentLoaded", () => {

  const getAlertBtn = document.getElementById("getAlertBtn");

  if (getAlertBtn) {
    getAlertBtn.addEventListener("click", () => {

      fetch("http://localhost:5050/api/alert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: "anonymous"
        })
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        console.log("Backend response:", data);
      })
      .catch(err => {
        console.error("Error:", err);
      });

    });
  }

});
