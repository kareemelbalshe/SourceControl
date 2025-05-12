import { HelloWorld } from "./HelloWorld.js";
import { HelloSwift } from "./HelloSwift.js";
import { HelloITI } from "./HelloITI.js";

const hello = new HelloWorld();
hello.printHelloWorld();

const swift = new HelloSwift();
swift.printHelloWorld();

const iti = new HelloITI();
iti.printHelloTI();
iti.printHelloGit();