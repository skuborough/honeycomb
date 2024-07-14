U = ID => document.getElementById(ID);
G = {};
G.getCB = () => navigator.clipboard.readText();
G.setCB = (PRO) => navigator.clipboard.writeText(PRO);

