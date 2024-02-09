function countdown(date, elementId) {
  const countdownDate = new Date(date).getTime(); // Assuming date is in UTC format

  const intervalId = setInterval(() => {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const currentTime = new Date(now).getTime(); // Current time in IST

    const distance = countdownDate - currentTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if (distance < 0) {
      clearInterval(intervalId);
      document.getElementById(elementId).innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Start countdowns
countdown("2024-02-27T10:30:00Z", "chemistry-timer");
countdown("2024-03-04T10:30:00Z", "physics-timer");
countdown("2024-03-09T10:30:00Z", "maths-timer");
countdown("2024-03-18T10:30:00Z", "economics-timer");
countdown("2024-03-19T10:30:00Z", "biology-timer");
countdown("2024-03-23T10:30:00Z", "accountancy-timer");
countdown("2024-03-27T10:30:00Z", "business-studies-timer");
