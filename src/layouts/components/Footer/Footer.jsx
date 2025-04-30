export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-between px-4 pt-10 pb-6 lg:px-32 lg:flex-row">
            <div className="mb-6 md:mb-0">
                <div>
                    <p className="font-bold text-2xl uppercase">
                        <span className="text-lime-500">Tree</span>Care
                    </p>
                </div>
                <div className="max-w-full pt-4">
                    <p className="text-base md:text-lg">
                        Identify plant diseases from leaf photos and get tailored care solutions instantly.
                    </p>
                </div>
                <div className="pt-4">
                    Social Icon
                </div>
            </div>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-16">
                <div>
                    <p className="text-lg font-semibold uppercase truncate">Home</p>
                    <ul className="text-sm font-semibold pt-3 flex flex-col gap-2">
                        <li>Why choose us</li>
                        <li>Our Experience</li>
                        <li>What They Said</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold uppercase truncate">Event</p>
                    <ul className="text-sm font-semibold pt-3 flex flex-col gap-2">
                        <li>Travel</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold uppercase truncate">About</p>
                    <ul className="text-sm font-semibold pt-3 flex flex-col gap-2">
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>Feedback</li>
                        <li>Contact Us</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold uppercase truncate">Social Media</p>
                    <ul className="text-sm font-semibold pt-3 flex flex-col gap-2">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Patreon</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}