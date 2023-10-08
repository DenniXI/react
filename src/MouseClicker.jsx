//Add an image inside the button and, without creating a new event handler or attaching an event handler to the image, print 
//the name attribute of the button regardless of whether the button or the image is clicked

export function MouseClicker() {
    function handler(event) {
        console.log(event.target.name)
    }

    return (
        <div>
            <button name="one" onClick={handler}>
                <img width={24} heigth={24} />
                Click me!
            </button>
        </div>
    )

}