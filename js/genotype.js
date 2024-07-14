U = {};
U.$ = (ID) => document.getElementById(ID);
//Text
U.createTxt = (PID, STR) => U.$(PID).appendChild(document.createTextNode(STR));
U.getTxt = (ID) => U.$(ID).firstChild.nodeValue;
U.setTxt = (ID, STR) => U.$(ID).firstChild.nodeValue = STR;
//Break
U.createBrk = (PID) => U.$(PID).appendChild(document.createElemnt("br"));
//Tag
U.createTag = (PID, ID, TAG) => {
  let obj = document.createElement(TAG);
  obj.id = ID;
  U.$(PID).appendChild(obj);
};
U.removeTag = (ID) => U.$(ID).parentNode.removeChild(U.$(ID));
//Button
U.makeSolidButton = (PID, ID, STR) => {
  U.createTag(PID, ID, "button");
  U.createTxt(ID, STR);
};
//TextBox
U.makeTextLine = (PID, ID, SIZE) => {
  let obj = document.createElement("input");
  obj.id = ID;
  obj.type = "text";
  obj.size = SIZE;
  U.$(PID).appendChild(obj);
};
U.makeTextArea = (PID, ID, COL, ROW) => {
  let obj = document.createElement("textarea");
  obj.id = ID;
  obj.cols = COL;
  obj.rows = ROW;
  U.$(PID).appendChild(obj);
};

G = {};
G.getCB = () => navigator.clipboard.readText();
G.setCB = (PRO) => navigator.clipboard.writeText(PRO);

