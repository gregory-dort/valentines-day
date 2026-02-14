// Home page are of the web app
import React from 'react'
import CardContainer from './card-components/CardContainer';

const ValentinesCard = () => {

    return (
        <div className = "bg-gradient-to-r from-pink-200 to-purple-400 h-screen flex flex-col items-center justify-center p-4">
            <h3 className="text-4xl font-bold text-center text-white mb-2 z-10">
                Happy Valentine's Day
            </h3>
            <h2 className="text-2xl font-bold text-center text-white mb-6 z-10 animate-pulse">
                To My Love, My Best Friend, My Partner in Crime, My Everything...
            </h2>
            <CardContainer />
        </div>
    )
}

export default ValentinesCard;