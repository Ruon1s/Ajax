// Create function 'showImages' which
// adds the loaded HTML content to <ul> elements
'use strict';


const getFetchData = async(url) => {
    const response = await fetch(url);
    const myPics = await response.text();
    ul.innerHTML = myPics;
};

try {
   getFetchData('images.html');
} catch(e){
    console.error('didnt load shit');
}
let ul = document.querySelector('ul');


