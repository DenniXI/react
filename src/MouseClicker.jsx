
export function MouseClicker() {
    function handler(event) {
        console.log(event.target.src)
        event.stopPropagation();
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