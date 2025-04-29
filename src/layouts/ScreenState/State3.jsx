import { useContext } from "react";
import { DemoContext } from "../../pages/Demo/Demo";

export default function State3({ className }) {
    const [choice] = useContext(DemoContext)
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Bangkok"
    });
    return (
        <div className={className}>
            <h2 className="text-2xl font-semibold text-green-800">Disease Detection Report</h2>
            <div className="w-full flex flex-row justify-center items-center py-5">
                <div className="w-40">
                    <img
                        src={"./sample" + choice + ".jpg"}
                        alt=""
                    />
                </div>
            </div>
            <div className="text-left mt-4 px-10">
                <ul className="list-disc list-inside">
                    <li>
                        <strong>Leaf Type:</strong> Tomato
                    </li>
                    <li>
                        <strong>Image Captured:</strong> {"sample" + choice + ".jpg"}
                    </li>
                    <li>
                        <strong>Date & Time:</strong> {formattedDate} • {formattedTime} (Asia/Bangkok)
                    </li>
                    <li>
                        <strong>Detected Disease:</strong> Tomato Mold Disease
                    </li>
                    <li>
                        <strong>Severity Level:</strong> Moderate
                    </li>
                    <li>
                        <strong>Confidence Score:</strong> {Math.floor(Math.random() * 4) + 93}%
                    </li>
                </ul>
            </div>
            <h2 className="text-2xl font-semibold text-green-800 mt-8">Key Symptoms</h2>
            <ul className="text-left mt-4 px-10 list-disc list-inside">
                <li>
                    <strong>Powdery Patches:</strong> Fine white spores coalescing into irregular clusters
                </li>
                <li>
                    <strong>Chlorosis:</strong> Yellow halos (~3-5 mm) radiating from initial spots
                </li>
                <li>
                    <strong>Lesion Development:</strong> Small sunken centers that darken over 5-7 days
                </li>
                <li>
                    <strong>Spread Pattern:</strong> Concentrated on lower leaves (splash dispersal) with occasional upper-leaf specks (wind/aerosol)
                </li>
                <li>
                    <strong>Environmental Triggers:</strong> &gt;85% humidity for 8+ hours, 18-22°C nights
                </li>

            </ul>
        </div>
    )
}
