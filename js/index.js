const KIT_TITLE = "Honeycomb";
let $Id = (ID_NAME) => document.getElementById(ID_NAME);
let main = () => {
    $Id("Title").appendChild(document.createTextNode(KIT_TITLE));
    $Id("in").onclick = function() {
        navigator.clipboard.readText().then((str) => ($Id("box").value = str));
    };
    $Id("out").onclick = function() {
        $Id("box").select();
        navigator.clipboard.writeText($Id("box").value);
    };
};
