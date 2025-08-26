function saveUser(user){
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsers(){
  return JSON.parse(localStorage.getItem("users")) || [];
}

function getCurrentUser(){
  return JSON.parse(localStorage.getItem("currentUser"));
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}