const text = document.querySelector("p");

const strings = ["I'm a Web Developer", "I'm a Programmer", "I'm an App Developer", "I'm a Graphic Designer", "I'm a Cyber Security Expert"];
const colors = ["orangered", "greenyellow", "dodgerblue", " yellow", "orange"];
let textContent = "";

let indexOfStrings = 0;

const textRepeater = () => {
   let i = 0;
   const typeLetter = setInterval(() => {
      const letterOfString = strings[indexOfStrings][i];
      textContent += letterOfString;
      text.textContent = textContent + "|";
      text.style.color = colors[indexOfStrings];

      if (++i === strings[indexOfStrings].length) {
         clearInterval(typeLetter);
         
         setTimeout(() => {
            let a = 0;
            
            const removeLetter = setInterval(() => {
               const newTextContent = textContent.slice(0, -a);
               text.textContent = newTextContent + "|";
            
               if (++a === strings[indexOfStrings].length) {
                  clearInterval(removeLetter);
            
                  textContent = "";
                  indexOfStrings++;
            
                  if (indexOfStrings === strings.length) {
                     indexOfStrings = 0;
                  }
            
                  textRepeater();
               }
            
            }, 100);
            
         },200);
         
      }

   }, 100);
   
};

textRepeater();