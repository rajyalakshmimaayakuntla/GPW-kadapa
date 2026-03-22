function goToDepartments(){
  window.location.href = "departments.html";
}

let notices = [
  "Admissions Open 2026",
  "Exam Timetable Released",
  "Scholarship Notification",
  "Holiday Announcement"
];

let board = document.getElementById("noticeBoard");

if(board){
  notices.forEach(n=>{
    let li = document.createElement("li");
    li.innerText = n;
    board.appendChild(li);
  });
}