//Add an onClick event handler to the image that prints the src of the image to the console. 
//Does the name attribute of the button still get printed to the console when the image is clicked? Why?

export function MouseClicker() {
    function handler(event) {
        console.log(event.target.src)
    }

    return (
        <div>
            <button name="one" onClick={handler}>
                <img src="https://th.bing.com/th/id/OIP.NTEFb1S3tNdPGq09gaXwIQHaEo?pid=ImgDet&rs=1"  width={40} heigth={40} />
                Click me!
            </button>
        </div>
    )

}