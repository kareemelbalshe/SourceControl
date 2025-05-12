import { HelloSwift } from "./HelloSwift.js";
import { HelloITI } from "./HelloITI.js";
import { Kareem } from "./kareem.js";

const kareem = new Kareem();

const swift = new HelloSwift();

const iti = new HelloITI();

document.getElementById("title").innerHTML = kareem.printHello();
document.getElementById("subtitle").innerHTML = swift.printHelloWorld();
document.getElementById("paragraph").innerHTML = iti.printHelloTI();
document.getElementById("paragraphTwo").innerHTML = iti.printHelloGit();