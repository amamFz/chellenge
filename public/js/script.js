const fileInput = document.getElementById("file-input");
const profileImg = document.getElementById("profile-img");
const addText = document.getElementById("add-text");
const deleteBtn = document.getElementById("delete-photo");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    // Validate tipe file
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      profileImg.src = e.target.result;
      profileImg.classList.remove("hidden");
      addText.classList.add("hidden");
      deleteBtn.classList.remove("hidden");
    };

    reader.onerror = () => {
      alert("Error reading file");
      fileInput.value = "";
    };

    reader.readAsDataURL(file);
  }
});

deleteBtn.addEventListener("click", function () {
  profileImg.src = "";
  profileImg.classList.add("hidden");
  addText.classList.remove("hidden");
  deleteBtn.classList.add("hidden");
  fileInput.value = ""; // Reset input file
});
