document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const users = getUsers();
  const exists = users.find(u => u.email === email);

  if(exists){
    alert("이미 가입된 이메일입니다.");
    return;
  }

  const newUser = { name, email, password, role };
  saveUser(newUser);

  alert("회원가입 성공! 로그인 해주세요.");
  window.location.href = "login.html";
});
