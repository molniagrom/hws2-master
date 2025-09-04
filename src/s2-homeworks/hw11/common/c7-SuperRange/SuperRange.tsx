import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: "#00CC22",
                // Цвет ползунка
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid #00CC22',
                },
                // Цвет трека (линии)
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
            }}
            {...props}
        />
    )
}

export default SuperRange