function generateIDCard() {
  const college = document.getElementById('collegeInput').value;
  const name = document.getElementById('nameInput').value;
  const course = document.getElementById('courseInput').value;
  const roll = document.getElementById('rollInput').value;
  const photoInput = document.getElementById('photoInput');

  document.getElementById('collegePreview').textContent = college || "COLLEGE NAME";
  document.getElementById('namePreview').textContent = name || "Student Name";
  document.getElementById('coursePreview').textContent = "Course: " + (course || "N/A");
  document.getElementById('rollPreview').textContent = "Roll No: " + (roll || "N/A");

  if (photoInput.files && photoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('photoPreview').innerHTML = `<img src="${e.target.result}" alt="Student Photo">`;
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    document.getElementById('photoPreview').innerHTML = "Photo";
  }
}
