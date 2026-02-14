import React from 'react'
import PhotoCarousel from './PhotoCarousel';
import QuestionScreen from './QuestionScreen';

const CardContainer = () => {
    const [showCarousel, setShowCarousel] = React.useState(false);

    return (
        <div className = "w-108 h-108 bg-white rounded-xl shadow-2xl overflow-hidden">
            {!showCarousel ? (
                <QuestionScreen onYesClick={() => setShowCarousel(true)} />
                ) : (
                <PhotoCarousel />
                )
            }
        </div>
    )
}

export default CardContainer;