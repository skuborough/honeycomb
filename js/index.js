const KIT_TITLE = "Honeycomb";
const HC_NUM = 6;
const BOX_SIZE = 80;
let main = () => {
    U.createTxt("Title", KIT_TITLE);
    U.createTag("Container", "Table", "table");
    for (let i = 1; i <= HC_NUM; i++) {
        U.createTag("Table", "TabRow_"+i, "tr");
        U.createTag("TabRow_"+i, "TabData_"+i+"_1", "td");
        U.makeSolidButton("TabData_"+i+"_1", "unshift_"+i, "unshift");
        U.createTag("TabRow_"+i, "TabData_"+i+"_2", "td");
        U.makeSolidButton("TabData_"+i+"_2", "push_"+i, "push");
        U.createTag("TabRow_"+i, "TabData_"+i+"_3", "td");
        U.makeSolidButton("TabData_"+i+"_3", "swap_"+i, "swap");
        U.createTag("TabRow_"+i, "TabData_"+i+"_4", "td");
        U.makeSolidButton("TabData_"+i+"_4", "in_"+i, "IN");
        U.createTag("TabRow_"+i, "TabData_"+i+"_5", "td");
        U.makeTextLine("TabData_"+i+"_5", "box_"+i, BOX_SIZE);
        U.createTag("TabRow_"+i, "TabData_"+i+"_6", "td");
        U.makeSolidButton("TabData_"+i+"_6", "out_"+i, "OUT");
        U.createTag("TabRow_"+i, "TabData_"+i+"_7", "td");
        U.makeSolidButton("TabData_"+i+"_7", "copy_"+i, "copy");
        U.$("unshift_"+i).onclick = ((I) => {
            return () => {
                G.getCB().then(RES => U.$("box_"+I).value = RES + U.$("box_"+I).value);
            };
        })(i);
        U.$("push_"+i).onclick = ((I) => {
            return () => {
                G.getCB().then(RES => U.$("box_"+I).value = U.$("box_"+I).value + RES);
            };
        })(i);
        U.$("swap_"+i).onclick = ((I) => {
            return () => {
                G.getCB().then(RES => {
                    let str = U.$("box_"+I).value;
                    U.$("box_"+I).value = RES;
                    G.setCB(str);
                });
            };
        })(i);
        U.$("in_"+i).onclick = ((I) => {
            return () => {
                G.getCB().then(RES => U.$("box_"+I).value = RES);
            };
        })(i);
        U.$("out_"+i).onclick = ((I) => {
            return () => {
                G.setCB(U.$("box_"+I).value);
                U.$("box_"+I).value = "";
            };
        })(i);
        U.$("copy_"+i).onclick = ((I) => {
            return () => {
                G.setCB(U.$("box_"+I).value);
            };
        })(i);
    };
};
