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
// After the loop print the HTML into <ul> element using innerHTML.

const showImages = async(url) =>{
    const response = await fetch(url);
    const myJson = response.json();
    console.log(myJson);
    const myArray = await myJson;
    console.log(myArray);



        const parse = (item) => {
            let ul = document.querySelector('ul');
            ul.innerHTML += `<li>
                    <figure>
                        <a href="./img/original/${item.mediaUrl}"><img src="./img/thumbs/${item.mediaThumb}"></a>
                       <figcaption> 
                            <h3>` + item.mediaTitle + `</h3>
                        </figcaption>
                    </figure> 
                </li>`;


    };
        myArray.forEach(parse);
};






try{
    showImages('images.json');
} catch(e){
    console.error('didnt load shit');
}