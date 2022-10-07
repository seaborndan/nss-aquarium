import {getFish} from "./database.js";
import {FishList} from "./FishList.js";
const allFish = getFish();

for (const fish of allFish) {
  console.log(fish)
}
// method to access elements in html document, returns js object that represents that particular html element
const parentHTMLElement = document.querySelector(`.fish-container`);


parentHTMLElement.innerHTML = FishList();