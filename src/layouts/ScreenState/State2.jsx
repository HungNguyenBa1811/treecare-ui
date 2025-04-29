import { useState, useEffect } from 'react'
import { BeatLoader, CircleLoader, ClipLoader, PuffLoader, PulseLoader, RingLoader, RotateLoader, SyncLoader } from "react-spinners"

export default function State2({ className }) {
    const [loaderIndex, setLoaderIndex] = useState(0);
    const loaderConfig = {
        speedMultiplier: 1.2,
        color: "#016630"
    };
    const loaders = [
        (props) => <BeatLoader {...props} />,
        (props) => <PulseLoader {...props} />,
        (props) => <SyncLoader {...props} />,
        (props) => <RotateLoader {...props} />,
        (props) => <ClipLoader {...props} />,
        (props) => <CircleLoader {...props} />,
        (props) => <RingLoader {...props} />,
        (props) => <PuffLoader {...props} />,
    ];
    const loadersText = [
        "Analyzing image",
        "Extracting details",
        "Connecting to model",
        "Exposing user's IP & location",
        "Collecting user's credit card info",
        "Predicting result",
        "Classifying",
        "Scoring"
    ];
    const customLoadTime = [
        2000,
        1800,
        1500,
        600,
        600, 
        2200, 
        1600,
        5000 
    ]

    useEffect(() => {
        const loadInterval = setTimeout(() => {
            setLoaderIndex(prev => (prev + 1) % loaders.length);
        }, customLoadTime[loaderIndex]);
        return () => clearTimeout(loadInterval);
    }, [loaderIndex]);

    return (
        <div className={className}>
            <h2 className="text-2xl font-semibold text-green-800">
                {loadersText[loaderIndex]}
            </h2>
            <div className="flex items-center justify-center mt-10">
                {loaders[loaderIndex](loaderConfig)}
            </div>
        </div>
    )
}
