function uploadFiles() {
  const mapFileInput = document.getElementById("map-file");
  const mapFile = mapFileInput.files[0];
  if (!mapFile) {
    alert("Please select a map file to upload.");
    return;
  }

  const codeFile1Input = document.getElementById("code-file-1");
  const codeFile1 = codeFile1Input.files[0];
  if (!codeFile1) {
    alert("Please select an assembler code file 1 to upload.");
    return;
  }

  const codeFile2Input = document.getElementById("code-file-2");
  const codeFile2 = codeFile2Input.files[0];
  if (!codeFile2) {
    alert("Please select an assembler code file 2 to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("map-file", mapFile);
  formData.append("code-file-1", codeFile1);
  formData.append("code-file-2", codeFile2);

  fetch("api-endpoint-here", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Files uploaded successfully.");
      } else {
        alert("An error occurred while uploading the files.");
      }
    })
    .catch((error) => {
      alert("An error occurred while uploading the files.");
    });
}
