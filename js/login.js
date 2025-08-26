document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if(user){
    alert(user.name + "님 로그인 성공!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "notes.html";
  } else {
    alert("이메일 또는 비밀번호가 잘못되었습니다.");
  }
});
