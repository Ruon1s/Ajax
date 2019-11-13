// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element


const showImages = async(url) =>{
    const response = await fetch(url);
    const myJson = response.json();
    console.log(myJson);
    const myArray = await myJson;
    console.log(myArray);


    const parse = (item) => {
        console.log(item.mediaThumb);
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        const img = document.createElement('img');
        link.href = './img/original/'+ item.mediaUrl;
        img.src = './img/thumbs/'+ item.mediaThumb;
        const figCaption = document.createElement('figcaption');
        const h3 = document.createElement('h3');
        link.appendChild(img);
        h3.innerHTML = item.mediaTitle;
        figCaption.appendChild(h3);
        figure.appendChild(link);
        figure.appendChild(figCaption);
        li.appendChild(figure);


        let ul = document.querySelector('ul');
        ul.appendChild(li);


    };
    myArray.forEach(parse);
};






try{
    showImages('images.json');
} catch(e){
    console.error('didnt load shit');
}