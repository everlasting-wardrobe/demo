import React, { Component } from 'react';
import './withModeSelectorFunction.css';

const withModeSelectorFunction = (Top) => {
    return class ModeSelector extends Component {
        state = {
            mode: this.props.initMode,
            direction: 1,
        }

        static defaultProps = {
            initMode: 2,
            modeCount: 5,
            startDeg: -60,
            endDeg: 60, 
        }
        modeSet = [];
        changeMode = () => {
            let dir = this.state.direction;
            if (this.state.direction === 1 && this.state.mode === this.props.modeCount - 1) {
                dir = -1;
            } 
            if (this.state.direction === -1 && this.state.mode === 0) {
                dir = 1;
            }
            const modeNum = this.state.mode + dir;
            const degree = this.modeSet[modeNum];
            this.spinner.style.transform = 'rotate(' + degree + 'deg)';
            this.setState({mode: modeNum, direction: dir});
        }

        render() {
            const self = this;
            if (this.modeSet.length === 0) {
                const stepSize = (this.props.endDeg - this.props.startDeg) / (this.props.modeCount-1);
                for (let deg = this.props.startDeg; deg <= this.props.endDeg; deg += stepSize) {
                    this.modeSet.push(deg);
                }
                console.log(this.modeSet);
            }
            const initAngle = 'rotate(' + this.modeSet[this.props.initMode] + 'deg)';
            return (
                <div className={"with-mode-selector-function-container"}
                     onClick={this.changeMode}
                     ref={function(el) {self.spinner = el}}
                     style={{transform: initAngle}}
                     >
                    <Top />
                </div>
            );
        }
    };
}

export default withModeSelectorFunction;