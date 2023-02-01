import React from 'react'
import Leftsidebar from '../../Components/LeftSidebar/Leftsidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import QuestionsDetails from '../Questions/QuestionsDetails'

const DisplayQuestions = () => {
    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <QuestionsDetails/>
                <RightSidebar />
            </div>
        </div>
    )
}

export default DisplayQuestions