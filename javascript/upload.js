// class that stores uploaded files
class GUI {
  constructor() {
    this.mapFileContent = null;
    this.codeFile1Content = null;
    this.codeFile2Content = null;
  }

  setMapFileContent(content) {
    this.mapFileContent = content;
  }

  setCodeFile1Content(content) {
    this.codeFile1Content = content;
  }

  setCodeFile2Content(content) {
    this.codeFile2Content = content;
  }

  getMapFileContent() {
    return this.mapFileContent;
  }

  getCodeFile1Content() {
    return this.codeFile1Content;
  }

  getCodeFile2Content() {
    return this.codeFile2Content;
  }
}

export const GUI = new GUI();

//function that reads and sets files
function uploadFiles() {
  const mapFileInput = document.getElementById("map-file");
  const mapFile = mapFileInput.files[0];
  if (!mapFile) {
    alert("Please select a map file to upload.");
    return;
  }
  // Parse map file
  const mapFileReader = new FileReader();
  mapFileReader.onload = (event) => {
    const mapFileContent = event.target.result;
    // Process the map file content as needed
    console.log(mapFileContent);
    const uploadedFiles = new UploadedFiles();
    uploadedFiles.setMapFileContent(mapFileContent);
  };
  mapFileReader.readAsText(mapFile);

  const codeFile1Input = document.getElementById("code-file-1");
  const codeFile1 = codeFile1Input.files[0];
  if (!codeFile1) {
    alert("Please select an assembler code file 1 to upload.");
    return;
  }
  // Parse code file 1
  const codeFile1Reader = new FileReader();
  codeFile1Reader.onload = (event) => {
    const codeFile1Content = event.target.result;
    // Process the code file 1 content as needed
    console.log(codeFile1Content);
    uploadedFiles.setCodeFile1Content(codeFile1Content);
  };
  codeFile1Reader.readAsText(codeFile1);

  const codeFile2Input = document.getElementById("code-file-2");
  const codeFile2 = codeFile2Input.files[0];
  if (!codeFile2) {
    alert("Please select an assembler code file 2 to upload.");
    return;
  }
  // Parse code file 2
  const codeFile2Reader = new FileReader();
  codeFile2Reader.onload = (event) => {
    const codeFile2Content = event.target.result;
    // Process the code file 2 content as needed
    console.log(codeFile2Content);
    uploadedFiles.setCodeFile2Content(codeFile2Content);
  };
  codeFile2Reader.readAsText(codeFile2);

  const formData = new FormData();
  formData.append("map-file", mapFile);
  formData.append("code-file-1", codeFile1);
  formData.append("code-file-2", codeFile2);
}

