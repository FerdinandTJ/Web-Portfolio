// Validate Form
function validateAndSend() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("messageError").innerText = "";

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").innerText = "Nama harus diisi.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email harus diisi.";
    isValid = false;
  }

  if (phone === "") {
    document.getElementById("phoneError").innerText = "Nomor HP harus diisi.";
    isValid = false;
  } else if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "Nomor HP harus berformat angka antara 10-15 digit.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").innerText = "Pesan harus diisi.";
    isValid = false;
  }

  if (isValid) {
    const whatsappUrl = `https://wa.me/6285104846662?text=Nama:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANomor%20HP:%20${encodeURIComponent(phone)}%0APesan:%20${encodeURIComponent(message)}`;
    window.open(whatsappUrl).focus();
  }
}


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; 
  } else {
    darkModeToggle.textContent = '🌙'; 
  }
});