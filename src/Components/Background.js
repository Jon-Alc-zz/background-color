import React from 'react';
import MySlider from './MySlider';

class Background extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redValue: 0,
            blueValue: 0,
            greenValue: 0
        };
    }

    render() {
        return (
            <div className="Parent-background-sliders">
                <div className="Background-sliders">
                    <MySlider />
                </div>
            </div>
        );
    }

}

export default Background;