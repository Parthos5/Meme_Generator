import React from "react";
import mainData from './jokesdata'

export default function Form(){

    let [meme,setMeme] = React.useState([{
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    }])

    let [allMemeImages,setMemeImages] = React.useState(mainData)

    console.log("This is meme array")
    let memeArray = allMemeImages[0].data.memes
    console.log(memeArray)
    // let [imgurl,setImgUrl] = React.useState("https://i.imgflip.com/1bij.jpg");
    function getMemeImage(){
        console.log("clicked")
        let randomIndex = Math.floor(Math.random()*memeArray.length);
        let elem = memeArray[randomIndex];  
        let url = elem.url 
        setMeme((prevmeme)=>({
            ...prevmeme,
            randomImage:url
        }))
        console.log("end of function")
    }

    return (
        <div>
        <div className="formdiv">
            <div className="forminputs">
                <input type="text" placeholder="Enter top text" />
                <input type="text" placeholder="Enter bottom text" />
            </div>
            <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <img src={meme.randomImage} className="memeImage" alt="" />
        </div>
    )
}