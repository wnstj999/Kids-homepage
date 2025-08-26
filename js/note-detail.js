const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let note = notes[id];

if(!note){
  alert("존재하지 않는 알림장입니다.");
  window.location.href = "notes.html";
}

document.getElementById("noteTitle").innerText = note.title;
document.getElementById("noteContent").innerText = note.content;
document.getElementById("noteMeta").innerText = 
  `작성자: ${note.author} | ${note.createdAt}`;

document.getElementById("deleteBtn").addEventListener("click", () => {
  if(confirm("정말 삭제하시겠습니까?")){
    notes.splice(id, 1);    
    localStorage.setItem("notes", JSON.stringify(notes));
    alert("삭제 완료!");
    window.location.href = "notes.html";
  }
});

document.getElementById("editBtn").addEventListener("click", () => {
  const newTitle = prompt("새 제목을 입력하세요:", note.title);
  const newContent = prompt("새 내용을 입력하세요:", note.content);

  if(newTitle && newContent){
    note.title = newTitle;
    note.content = newContent;
    note.updatedAt = new Date().toLocaleString();

    notes[id] = note;
    localStorage.setItem("notes", JSON.stringify(notes));

    alert("수정 완료!");
    window.location.reload();
  }
});
