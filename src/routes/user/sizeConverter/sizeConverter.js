import React, { Component } from 'react';

import converterBackground from './img/SizeConverterBackground.png';
import rightWheel from './img/SCWheelRight.png';
import leftWheel from './img/SCWheelLeft.png';
import leftHightlight from './img/SCLeftHighlight.png';
import rightHightlight from './img/SCRightHighlight.png';
import leftShadow from './img/SCShadowLeft.png';
import rightShadow from './img/SCShadowRight.png';
import pressBtnGrey from './img/SCPressButtonGrey.png';
import pressBtnRed from './img/SCPressButtonRed.png';
import tape from './img/SCTape.png';
import SelectInput from './selectInput/selectInput';
import stepBtn1 from './img/SCStep1.png';
import stepBtn2 from './img/SCStep2.png';
import stepBtn3 from './img/SCStep3.png';
import stepBtn4 from './img/SCStep4.png';
import './sizeConverter.css'


class SizeConverter extends Component {
    state = {
        running: false,
        runnable: false,
        inputBrand: null,
        inputTop: null,
        inputBottom: null,
        outputBrand: null,
        outputTop: null,
        outputBrand: null,
        brandList: ["Nike", "Adidas", "Vans", "H&M", "Converse", "Club Monaco", "Levis", "G-Star", "Banana Republic", "A & F", "Hollister"],
        sizeList: ["XS", "S", "M", "L", "XL"],
    }
    startCalculation = () => {
        if (this.state.runnable) {
            this.setState({running: true, runnable: false});
            setTimeout(() => this.setState({runnable: false, running: false, outputTop: "M", outputBottom: "M",}), 1500);
        }
    }
    selectHandler = (Type) => {
        return (choice) => {
            var newState = {};
            newState[Type] = choice;
            newState["outputTop"] = null;
            newState["outputBottom"] = null;
            this.setState(newState);
        }
    }
    componentDidUpdate() {
        console.log("in componetdidupdate")
        if (this.state.runnable === false && 
            this.state.inputBrand !== null && 
            this.state.inputTop !== null && 
            this.state.inputBottom !== null && 
            this.state.outputBrand !== null && 
            this.state.outputTop === null &&
            this.state.outputBottom === null) {
                this.setState({runnable: true})
            }
    }
    render() {
        console.log(this.state);
        const inputStyles = {
            inputBrand: ["size-converter-input-brand", "size-converter-dropdown-list"].join(" "),
            outputBrand: ["size-converter-output-brand", "size-converter-dropdown-list"].join(" "),
            inputTop: ["size-converter-input-top", "size-converter-dropdown-list"].join(" "),
            outputTop: ["size-converter-output-top", "size-converter-dropdown-list"].join(" "),
            inputBottom: ["size-converter-input-bottom", "size-converter-dropdown-list"].join(" "),
            outputBottom: ["size-converter-output-bottom", "size-converter-dropdown-list"].join(" "),
        };
        return (
            <div className={"size-converter-container"}>
                <img className={"size-converter-background"} src={converterBackground} alt={""} />
                <img className={["size-converter-left-wheel", 
                                 this.state.running? "size-converter-wheel-spinning": null].join(' ')} 
                     src={leftWheel} alt={""} />
                <img className={["size-converter-right-wheel", 
                                 this.state.running? "size-converter-wheel-spinning": null].join(' ')} 
                                 src={rightWheel} alt={""} />
                <img className={"size-converter-left-highlight"} src={leftHightlight} alt={""} />
                <img className={"size-converter-right-highlight"} src={rightHightlight} alt={""} />
                <img className={"size-converter-left-shadow"} src={leftShadow} alt={""} />
                <img className={"size-converter-right-shadow"} src={rightShadow} alt={""} />
                <img className={"size-converter-press-button"} 
                     onClick={this.startCalculation}
                     src= {this.state.runnable?pressBtnRed: pressBtnGrey} 
                     alt={""} />
                <img className={"size-converter-tape"} src={tape} alt={""} />
                <div className={"size-converter-step-buttons"}>
                    <img alt={""} src={stepBtn1}/>
                    <img alt={""} src={stepBtn2}/>
                    <img alt={""} src={stepBtn3}/>
                    <img alt={""} src={stepBtn4}/>
                </div>

                <div className={inputStyles.inputBrand}>
                    <SelectInput listName={this.state.brandList.sort()} 
                                 entryName={"BRAND YOUR KNOW"}
                                 selector = {this.selectHandler("inputBrand")}
                                 selectedItem = {this.state.inputBrand}
                                 filterOn={true}/>
                </div>
                <div className={inputStyles.outputBrand}>
                    <SelectInput listName={this.state.brandList.sort()} 
                                 entryName={"FIND BRAND SIZE"}
                                 selector = {this.selectHandler("outputBrand")}
                                 selectedItem = {this.state.outputBrand}
                                 filterOn={true}/>
                </div>
                <div className={inputStyles.inputTop}>
                    <SelectInput listName={this.state.sizeList} 
                                 entryName={"TOP SIZE"}
                                 selector = {this.selectHandler("inputTop")}
                                 selectedItem = {this.state.inputTop}
                                 filterOn={false}/>
                </div>
                <div className={inputStyles.outputTop}>
                    <SelectInput selectedItem={this.state.outputTop}
                                 entryName={"TOP SIZE"}
                                 displayOnly={true}/>
                </div>
                <div className={inputStyles.inputBottom}>
                    <SelectInput listName={this.state.sizeList} 
                                 entryName={"BOTTOM SIZE"}
                                 selector = {this.selectHandler("inputBottom")}
                                 selectedItem = {this.state.inputBottom}
                                 filterOn={false}/>
                </div>
                <div className={inputStyles.outputBottom}>
                    <SelectInput selectedItem={this.state.outputBottom}
                                 entryName={"BOTTOM SIZE"}
                                 displayOnly={true}/>
                </div>
            </div>
        );
    };
};

export default SizeConverter;