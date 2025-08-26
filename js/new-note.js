const currentUser = getCurrentUser();
if(!currentUser){
  alert("로그인이 필요합니다.");
  window.location.href = "login.html";
}

document.getElementById("noteForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const newNote = {
    title,
    content,
    author: currentUser.name,
    createdAt: new Date().toLocaleString()
  };

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  alert("알림장이 등록되었습니다.");
  window.location.href = "notes.html";
});
