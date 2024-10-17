document.addEventListener("DOMContentLoaded", function () {
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");
  const jsCode = document.getElementById("jsCode");
  const outputFrame =
    document.getElementById("outputFrame").contentWindow.document;

  function compileCode() {
    const htmlContent = htmlCode.value;
    const cssContent = `<style>${cssCode.value}</style>`;
    const jsContent = `<script>${jsCode.value}</script>`;

    outputFrame.open();
    outputFrame.write(htmlContent + cssContent + jsContent);
    outputFrame.close();
  }

  // Listen for changes in any of the textareas
  htmlCode.addEventListener("input", compileCode);
  cssCode.addEventListener("input", compileCode);
  jsCode.addEventListener("input", compileCode);
});
