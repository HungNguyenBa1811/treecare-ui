import State0 from "./State0"
import State1 from "./State1"
import State2 from "./State2"
import State3 from "./State3"
import State4 from "./State4"

export default function ScreenState({ state }) {
    let ScreenComponent
    switch(state) {
        case 0:
            ScreenComponent = State0
            break
        case 1:
            ScreenComponent = State1
            break
        case 2:
            ScreenComponent = State2
            break
        case 3:
            ScreenComponent = State3
            break
        case 4:
            ScreenComponent = State4
            break
        default:
            return (
                <div>
                    <h2 className="text-2xl font-semibold text-green-800">Error</h2>
                    <p className="text-sm text-green-700">
                        Page not found
                    </p>
                </div>
            ) 
    }
    return (
        <ScreenComponent className="mt-6 text-center flex flex-col"/>
    )
}