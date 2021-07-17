import React from 'react';
import Lottie from 'react-lottie'

import animationData from '../../assets/8991-restaurant-loading.json'

export default () => {
    const defaultOption = {
        loop:true,
        autoplay:true,
        animationData,
        rendererSetting:{
            preserveAspectRadio:'xMidYMid slice',
        }
    }
    return <Lottie options={defaultOption}/>
}