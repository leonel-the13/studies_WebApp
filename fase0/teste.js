document.getElementById("loginform").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("Email:", email);
  console.log("Password:", password);

  const response = await fetch("login/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
});

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function showUser() {
  const user = await getUser();
  console.log("User data:", user);
  if (!user) {
    console.error("No user data available");
    return;
  }
  const userDiv = document.getElementById("userInfo");
  userDiv.textContent = user.name;
}

document
  .getElementById("showUserButton")
  .addEventListener("click", async () => {
    console.log("Button clicked");
    await showUser();
  });

const users = [{ name: "Aliciana" }, { name: "Victor" }, { name: "Maria" }];

const filteredList = users.filter((u) => u.name.includes("a"));
const mappedList = users.map((u) => `<li>${u.name}</li>`).join("");

document.querySelector("#users").innerHTML = mappedList;
