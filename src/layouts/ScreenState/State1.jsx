import { useContext } from "react"
import { DemoContext } from "../../pages/Demo/Demo"

export default function State1({ className }) {
    const [
        choice, 
        setChoice,
        progress,
        setProgress,
    ] = useContext(DemoContext)
    
    let currentImage = "border-lime-400"
    const handleChoice1 = () => {
        if(choice !== 1) setChoice(1)
        else setChoice(0)
    }

    const handleChoice2 = () => {
        if(choice !== 2) setChoice(2)
        else setChoice(0)
    }

    const handleProgress = () => {
        setProgress(4)
    }

    let filename = choice === 0 ? "none" : "sample" + choice + ".jpg"

    return (
        <div className={className}>
            <h2 className="text-2xl font-semibold text-green-800">Import sample</h2>
            <br />
            <h1 className="text-sm text-green-800">Add an image</h1>
            <div className="w-full flex justify-center">
                <div onClick={handleProgress} className="flex justify-center items-center w-20 h-20 border-dashed border my-5 hover:cursor-pointer [border-width:3px] [border-image:repeating-linear-gradient(90deg,black 0,black 10px,transparent 10px,transparent 20px)_1]">
                    <span className="font-semibold text-2xl">+</span>
                </div>
            </div>
            <p className="text-lg text-green-700">Or</p>
            <h1 className="text-sm text-green-800">Use our available sample</h1>
            <div className="w-full flex justify-center gap-5">
                <div className={"flex justify-center items-center my-5 border-5 hover:cursor-pointer " + (choice === 1 ? currentImage : "border-transparent")}>
                    <img 
                        src="./sample1.jpg"
                        alt=""
                        className="h-20"
                        draggable={false}
                        onClick={handleChoice1}
                    />
                </div>
                <div className={"flex justify-center items-center my-5 border-5 hover:cursor-pointer " + (choice === 2 ? currentImage : "border-transparent")}>
                    <img 
                        src="./sample2.jpg" 
                        alt=""
                        className="h-20"
                        draggable={false}
                        onClick={handleChoice2}
                    />
                </div>
            </div>
            <h1 className="text-sm text-green-800">Currently Selected: <strong>{filename}</strong></h1>
        </div>
    )
}