import { Link } from "react-router-dom";
import { ArrowCurve1, ArrowCurve2, ArrowCurve3, DropletIcon, PlayIcon, SunIcon, WeatherIcon } from "../../components/Icons";
import SlideShow from "../../layouts/SlideShow/SlideShow";

export default function Home() {
    const handleRickRoll = () => {
        const trollURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        window.open(trollURL, '_blank')
        window.location.href = trollURL
    }
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-row flex-wrap relative">
                <div className="w-full flex flex-col-reverse flex-wrap">
                    <div>
                        <div className="flex flex-col flex-wrap justify-center px-12 pt-24 sm:px-32">
                            <p className="uppercase text-6xl font-bold max-w-full text-center xl:text-left xl:max-w-1/2">Detect. <br /> Protect.</p>
                            <p className="uppercase text-6xl font-bold max-w-full text-center xl:text-left xl:max-w-1/2">Grow <span className="text-lime-500">Green</span>.</p>
                            <p className="text-neutral-500 py-10 max-w-full text-center xl:text-left xl:max-w-1/3">TreeCare is an innovative AI-powered app that helps users diagnoses and treat diseases on trees.</p>
                        </div>
                        <div className="flex flex-row flex-wrap-reverse gap-8 px-12 pt-5 justify-center sm:px-32 xl:justify-start">
                            <Link to={'/demo'}>
                                <button className="uppercase bg-lime-500 px-14 py-5 rounded-xl text-white font-semibold hover:shadow-2xl hover:cursor-pointer w-50">Try it out</button>
                            </Link>
                            <div onClick={handleRickRoll} className="flex flex-row justify-center gap-3 hover:cursor-pointer sm:justify-start">
                                <div className="flex justify-center items-center rounded-full w-14 h-14 bg-black">
                                    <PlayIcon className="w-4"/>
                                </div>
                                <div className="flex items-center justify-center max-w-1/2 sm:justify-start sm:max-w-3/4">
                                    <p className="leading-none text-neutral-500">Learn how to take care a plant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex justify-center z-1 filter drop-shadow-[0_0_200px_rgba(163,230,53,0.7)] xl:absolute xl:right-40 xl:-top-5">
                            <img src="./TreeCarePot.png" alt="TreeCarePot" className="w-140"/>
                        </div>
                        <div className="flex flex-row justify-center gap-2 pt-1 pr-4 z-2 rounded-2xl hover:cursor-pointer hover:shadow-2xl hover:bg-white xl:absolute xl:top-4 xl:right-20 ">
                            <div className="flex justify-center items-center">
                                <WeatherIcon />
                            </div>
                            <div>
                                <p className="font-bold text-xl text-green-800">Weather</p>
                                <p className="font-semibold">9 to 10 Days</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center gap-2 py-2 px-4 z-2 rounded-2xl hover:cursor-pointer hover:shadow-2xl hover:bg-white xl:absolute xl:top-24 xl:right-160">
                            <div className="flex justify-center items-center">
                                <SunIcon />
                            </div>
                            <div>
                                <p className="font-bold text-xl text-green-800">Daylight</p>
                                <p className="font-semibold">9 to 10 Hours</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center gap-2 py-2 px-4 z-2 rounded-2xl hover:cursor-pointer hover:shadow-2xl hover:bg-white xl:absolute xl:top-72 xl:right-168">
                            <div className="flex justify-center items-center">
                                <DropletIcon />
                            </div>
                            <div>
                                <p className="font-bold text-xl text-green-800">Wetness</p>
                                <p className="font-semibold">90%</p>
                            </div>
                        </div>
                        <div className="absolute top-20 right-46 hidden xl:block">
                            <ArrowCurve1 />
                        </div>
                        <div className="absolute top-16 right-150 hidden xl:block">
                            <ArrowCurve2 />
                        </div>
                        <div className="absolute top-88 right-160 hidden xl:block">
                            <ArrowCurve3 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center gap-5 pt-30">
                <div className="">
                    <img src="./AboutUs.jpg" alt="" className="w-150" />
                </div>
                <div className="flex flex-col flex-wrap gap-2 text-center w-full justify-center px-16 xl:w-1/3 xl:pl-12 xl:pr-0 xl:text-left">
                    <p className="tracking-wider text-xl text-green-800">About</p>
                    <p className="uppercase text-4xl font-bold leading-relaxed">We Preserve Your <br /> Living World</p>
                    <p className="text-neutral-400">With just a simple scan, you can detect problems early, apply expert treatments, and keep your green spaces thriving. Our mission is to make tree care smarter, easier, and accessible for everyone who loves nature.</p>
                    <div className="flex flex-row flex-wrap justify-center gap-5 pt-5 xl:justify-start">
                        <Link to={'/demo'}>
                            <button className="uppercase bg-lime-500 px-12 py-4 rounded-xl text-white font-semibold hover:shadow-2xl hover:cursor-pointer w-50">Try Now</button>
                        </Link>
                        <Link to={'/demo'}>
                            <button className="uppercase border-3 border-lime-500 px-12 py-4 rounded-xl text-lime-500 font-semibold hover:shadow-2xl hover:cursor-pointer w-50">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col pt-30">
                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="tracking-wider text-xl text-green-800">Gallery</p>
                    <h1 className="uppercase font-bold text-4xl tracking-wider">Our Gallery</h1>
                </div>
                <div className="flex justify-center w-full mt-24 mb-16">
                    <div className="rounded-xl w-100 h-1 bg-gradient-to-r from-lime-600 to-white"></div>
                </div>
                <div className="overflow-hidden">
                    <SlideShow />
                </div>
            </div>
            <div className="w-full flex flex-col flex-wrap pt-30">
                <div className="flex flex-col flex-wrap justify-center items-center gap-8">
                    <p className="tracking-wider font-semibold text-xl text-green-800">Contact Us</p>
                    <h1 className="uppercase font-bold text-4xl tracking-wider text-center">Stay tuned for more updates</h1>
                </div>
                <div className="w-full flex flex-row justify-center items-center py-10 text-lg">
                    <input
                        type="email"
                        className="w-100 px-6 py-4 bg-neutral-100 rounded-l-xl outline-0"
                        placeholder="Enter your email address..."
                        required
                    />
                    <button onClick={handleRickRoll} className="px-8 py-4 bg-lime-500 text-white font-semibold rounded-r-lg hover:cursor-pointer">Submit</button>
                </div>
            </div>
        </div>
    )
}