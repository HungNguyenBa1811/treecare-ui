import React from 'react'

export default function SupportUs() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
            <h1 className="text-3xl font-bold mb-4 text-center text-green-800">Help Us Grow</h1>
            <p className="text-lg mb-6 text-center max-w-md text-green-700">
                Your donation helps us continue our mission to care for trees and the environment. Every contribution makes a difference!
            </p>
            <p className="text-center font-semibold mb-2 text-green-800">Scan the QR code below to donate:</p>
            </div>
            <div className='w-100'>
                <img
                    src="./QRDonation.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}