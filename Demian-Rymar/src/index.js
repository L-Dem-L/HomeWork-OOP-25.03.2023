// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { StringStatistics } from "./scripts/modules/count";
import { NumberConverter } from "./scripts/modules/num";
import { TextTransformer } from "./scripts/modules/string";
import { StyleConverter } from "./scripts/modules/camelCase";
import { createAcronym } from "./scripts/modules/acronym";
import { StringJoiner, joinStrings } from "./scripts/modules/join";
import { Calculator } from "./scripts/modules/calc";
import { UrlInfo, getUrlInfo } from "./scripts/modules/url";
import { splitString } from "./scripts/modules/subStr";
import { print } from "./scripts/modules/print";
// Import utils

// Bisiness logic

const myString = "Hello 123!";
const stats = new StringStatistics(myString);
stats.calculateStatistics();
stats.displayStatistics();

//Separator
console.log("-------------------------------------");

const numberConverter = new NumberConverter();
console.log(numberConverter.convert(35));
console.log(numberConverter.convert(89));
console.log(numberConverter.convert(12));
console.log(numberConverter.convert(10));
console.log(numberConverter.convert(99));

//Separator
console.log("-------------------------------------");

console.log(TextTransformer.transform("Hello 123 World")); 
console.log(TextTransformer.transform("Hi 12 wOrLd")); 
console.log(TextTransformer.transform("HELlO 3")); 

//Separator
console.log("-------------------------------------");

console.log(StyleConverter.convert('background-color'));
console.log(StyleConverter.convert('font-size'));
console.log(StyleConverter.convert('text-align'));

//Separator
console.log("-------------------------------------");

console.log(createAcronym('cascading style sheets'));
console.log(createAcronym('об’єктно орієнтоване програмування'));
console.log(createAcronym("Організація Об'єднаних Націй"));
console.log(createAcronym("North Atlantic Treaty Organization"));

//Separator
console.log("-------------------------------------");

console.log(joinStrings('Hello', ' ', 'world', '!'));
console.log(joinStrings('Hi', ' ', 'Bob', '!'));
console.log(joinStrings('My', ' ', 'name', ' ', 'is', ' ', 'Gustavo', '!'));

//Separator
console.log("-------------------------------------");

const calculator = new Calculator();
console.log(calculator.calculate("2+2"));
console.log(calculator.calculate("10*5"));
console.log(calculator.calculate("4-3"));
console.log(calculator.calculate("2-3")); 

//Separator
console.log("-------------------------------------");

console.log(getUrlInfo("https://itstep.org/ua/about"));
console.log(getUrlInfo("https://chat.openai.com/chat"));
console.log(getUrlInfo("https://www.youtube.com/feed/library"));

//Separator
console.log("-------------------------------------");

let str = "25/03/2023";
let delimiter = "/";
let substrings = splitString(str, delimiter);
console.log(substrings); 

//Separator
console.log("-------------------------------------");

print("Today is %1 %2.%3.%4", "Saturday", 25, 3, 2023);
print("%1 %2 %2 %1", "Hello", "world");
print("%1 %2 %2 %1", "Jonathan", "Joestar");