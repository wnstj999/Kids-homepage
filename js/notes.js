const currentUser = getCurrentUser();
if(!currentUser){
  alert("로그인이 필요합니다.");
  window.location.href = "login.html";
}

const notesList = document.getElementById("notesList");
const notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.forEach((note, index) => {
  const div = document.createElement("div");
  div.className = "note-item";
  div.innerHTML = `
    <h3><a href="note-detail.html?id=${index}">${note.title}</a></h3>
    <p>${note.content.substring(0,40)}...</p>
    <small>작성자: ${note.author} | ${note.createdAt}</small>
  `;
  notesList.appendChild(div);
});
