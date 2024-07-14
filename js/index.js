const KIT_TITLE = "Honeycomb";
const HC_NUM = 5;
let main = () => {
    U("Title").appendChild(document.createTextNode(KIT_TITLE));
    U("in").onclick = () => {
        G.getCB().then(RES => U("box").value = RES);
    };
    U("out").onclick = () => {
        G.setCB(U("box").value);
    };
};
