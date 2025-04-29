export default function State4({ className }) {
    const DownloadURL = {
        ios: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        android: "https://drive.google.com/file/d/1cppxti2xPGmIkXCfTOhBTNnzpOt1lF28/view?usp=sharing"
    }
    const handleDownloadIOS = () => {
        window.open(DownloadURL.ios, '_blank')
    }
    const handleDownloadAndroid = () => {
        window.open(DownloadURL.android, '_blank')
    }

    return (
        <div className={className}>
            <h2 className="text-2xl font-semibold text-green-800">Download our app for the full experience! 🚀</h2>
            <div className="flex flex-row justify-center mt-8 gap-5">
                <div className="w-50" onClick={handleDownloadIOS}>
                    <img
                        src="./appstore.png" 
                        alt=""
                        className=""
                    />
                </div>
                <div className="w-50" onClick={handleDownloadAndroid}>
                    <img 
                        src="./googleplay.png" 
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
