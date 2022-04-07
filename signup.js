// create DOM refs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

emailInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

passwordInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

submitBtn.addEventListener("click", async () => {
  try {
    const response = await axios.post("http://localhost:6002/add/");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  console.log("btn clicked");
});
