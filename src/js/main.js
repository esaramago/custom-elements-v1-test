import "../components/element/element.js";
import "../components/btn/btn.js";
import "../components/info/info.js";

const infoContent = document.getElementById('infoContent');
const infoExample = document.getElementById('infoExample');
infoContent.addEventListener('input', changeInfoContent);
function changeInfoContent() {
    var content = infoContent.value;
    infoExample.setAttribute('content', content);
}
changeInfoContent();