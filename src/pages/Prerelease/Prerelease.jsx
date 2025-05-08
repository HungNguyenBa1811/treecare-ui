import React from 'react'

export default function SupportUs() {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center text-green-800">Pre-release Version</h1>
                <p className="text-lg mb-2 text-center max-w-md text-green-700">
                    Scan the QR code below to access the latest beta version of our app.
                </p>
            </div>
            <div className='w-100 flex justify-center'>
                <img
                    src="./QRDonation.png"
                    alt="QR code to access pre-release version"
                />
            </div>
        </div>
    )
}