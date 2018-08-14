import React, { Component } from 'react';
import './withSpinningFunction.css';

const withSpinningFunction = (Top) => {
    return class SpinningComponent extends Component {
        state = {
            initialAngle: 0
        };

        angleCalculator = (transformInfo) => {
            let values = transformInfo.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            const a = values[0];
            const b = values[1];
            const scale = Math.sqrt(a*a + b*b);
            const sin = b/scale;
            let angle = Math.round(Math.asin(sin) * (180/Math.PI));
            if (a < 0) {
                angle = 180 - angle;
            }
            if (a > 0 && b < 0) {
                angle = 360 + angle;
            }
            return angle;
        }

        rotateKnob = () => {
            if (this.state.initialAngle < 355) {
                let targetAngle = 360;
                this.spinner.style.transform = 'rotate(' + targetAngle + 'deg)';
                this.setState({
                    rotating: true,
                });
            }
        }
    
        stopRatating = () => {
            let transformInfo = window.getComputedStyle(this.spinner).transform;
            const angle = this.angleCalculator(transformInfo);
            this.spinner.style.transform = 'rotate(' + angle + 'deg)';
            this.setState({
                rotating: false,
                initialAngle: angle
            })
        }
    
        backToOrigin = () => {
            if (this.state.initialAngle >= 355) {
                this.spinner.style.transform = 'rotate(' + 0 + 'deg)';
            }
        }

        render () {
            const self = this;
    
            return (
                <div className={'with-spinning-function-container'}
                    onClick={this.backToOrigin}
                    onMouseDown={this.rotateKnob}
                    onMouseUp={this.stopRatating}
                    ref={function(el) {
                        self.spinner = el;
                    }}>
                    <Top />
                </div>
            );
        }
    };
};

export default withSpinningFunction;