import { createContext, useEffect, useState } from "react";
import ScreenState from "../../layouts/ScreenState";

export const DemoContext = createContext()

export default function Demo() {
    const [progress, setProgress] = useState(0);
    const [choice, setChoice] = useState(0)

    useEffect(() => {
        if (progress === 2) {
            const timer = setTimeout(() => {
                setProgress(3);
            }, 12250);
            return () => clearTimeout(timer);
        }
    }, [progress])

    return (
        <DemoContext.Provider value={[
            choice, 
            setChoice, 
            progress, 
            setProgress,
        ]}>
            <div className="bg-white flex flex-col items-center">
                <main className="flex-1 w-full max-w-4xl p-6 bg-green-50">
                    <div className="bg-white shadow-lg rounded p-6">
                        <div>
                            <div className="mb-4 flex justify-between items-center">
                                <span className="text-sm font-medium text-green-600">Progress</span>
                                <span className="text-sm">{progress * 25}%</span>
                            </div>
                            <div className="w-full bg-green-100 h-2 rounded">
                                <div
                                    className="bg-green-600 h-2 rounded"
                                    style={{ width: `${progress * 25}%` }}
                                ></div>
                            </div>
                        </div>
    
                        <ScreenState state={progress} />
    
                        <div className="flex justify-between py-10">
                            <button
                                disabled={progress === 0 || progress === 2 || progress === 4}
                                onClick={() => setProgress((prev) => Math.max(prev - 1, 0))}
                                className="border-1 border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100 disabled:bg-green-50 disabled:border-green-50"
                            >
                                Prev
                            </button>
                            <button
                                disabled={progress === 4 || progress === 2 || progress === 1 && choice === 0}
                                onClick={() => setProgress((prev) => Math.min(prev + 1, 4))}
                                className="border-1 border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100 disabled:bg-green-50 disabled:border-green-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </DemoContext.Provider>
    )
}