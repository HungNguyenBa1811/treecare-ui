import Header from '../components/Header'
import Footer from '../components/Footer'
import { act, createContext, useState } from 'react'

export const AppContext = createContext()

export default function DefaultLayout({ children }) {
    const [activeTab, setActiveTab] = useState(window.location.pathname)
    return (
        <AppContext.Provider value={[
            activeTab,
            setActiveTab
        ]}>
            <div className='w-screen transition-all duration-300 ease-in-out'>
                <Header currentTab={activeTab} />
                {children}
                <Footer />
            </div>
        </AppContext.Provider>
    )
}