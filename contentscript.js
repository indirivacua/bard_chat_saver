(async function(){
await new Promise(r => setTimeout(r, 2000));

// Get the chat container element.
const chatContainer = document.querySelector(".chat-container");

function getChatData() {
  // Get the HTML and CSS of the chat container.
  const chatHTML = chatContainer.innerHTML;
  const chatCSS = chatContainer.style.cssText;
  return {
    chatHTML,
    chatCSS,
  };
}

// Save the chat HTML and CSS to a file.
const saveFile = () => {
  const { chatHTML, chatCSS } = getChatData();
  const fileName = "bard-chat.html";
  const blob = new Blob([chatHTML, chatCSS], {type: "text/html"});
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

// Add a "Save" button to the chat container.
const saveButton = document.createElement("button");
saveButton.textContent = "Save";
saveButton.addEventListener("click", saveFile);
chatContainer.appendChild(saveButton);
})();