import "./_element.js";
import "./_btn.js";
import "./_info.js";

const infoContent = document.getElementById('infoContent');
const infoExample = document.getElementById('infoExample');
infoContent.addEventListener('input', changeInfoContent);
function changeInfoContent() {
    var content = infoContent.value;
    infoExample.setAttribute('content', content);
}
changeInfoContent();