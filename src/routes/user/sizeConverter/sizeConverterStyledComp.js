import React, { Component } from 'react';
import { SizeConverterContainer,
        SmartContainer,
        SmartImg,
        PressBtn,
        StepBtnContainer,
        InputComboWrapper,
        SearchBarWrapper,
        SpinningImg,
        BackDrop } from './style';

import { Img } from '../../../components/globals';
 
import converterBackground from './img/SizeConverterBackground.png';
import rightWheel from './img/SCWheelRight.png';
import leftWheel from './img/SCWheelLeft.png';
import leftHighlight from './img/SCLeftHighlight.png';
import rightHighlight from './img/SCRightHighlight.png';
import leftShadow from './img/SCShadowLeft.png';
import rightShadow from './img/SCShadowRight.png';
import pressBtnGrey from './img/SCPressButtonGrey.png';
import pressBtnRed from './img/SCPressButtonRed.png';
import tape from './img/SCTape.png';
import SelectInput from './selectInput/selectInputSC';
import stepBtn1 from './img/SCStep1.png';
import stepBtn2 from './img/SCStep2.png';
import stepBtn3 from './img/SCStep3.png';
import stepBtn4 from './img/SCStep4.png';
import logo from './img/SCLogo.png';
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
        brandList: ["Nike", "Adidas", "Vans", "H&M", "Converse", "Club Monaco", "Levis", "G-Star", "Banana Republic", "A & F", "Hollister"],
        sizeList: [null, "XS", "S", "M", "L", "XL"],
    }
    startCalculation = () => {
        if (this.state.runnable) {
            this.setState({running: true, runnable: false});
            let res = {runnable: false, running: false};
            if (this.state.inputTop !== null) res["outputTop"] = "M";
            if (this.state.inputBottom !== null) res["outputBottom"] = "M";
            setTimeout(() => this.setState(res), 1500);
        }
    }
    selectHandler = (Type) => {
        return (choice) => {
            let newState = {};
            newState[Type] = choice;
            newState["outputTop"] = null;
            newState["outputBottom"] = null;
            this.setState(newState);
        }
    }
    turnOnBackDrop = () => {
        this.setState({selecting: true});
    }
    componentDidUpdate() {
        console.log("in componetdidupdate")
        if (this.state.runnable === false && 
            this.state.inputBrand !== null && 
            this.state.outputBrand !== null && 
            this.state.outputTop === null &&
            this.state.outputBottom === null &&
            (this.state.inputTop !== null ||
            this.state.inputBottom !== null )) {
                this.setState({runnable: true})
            }
    }
    render() {
        console.log(this.state);
        return (
            <SizeConverterContainer >
                <Img src={converterBackground} alt={""} />
                <SmartContainer params={['46%', '6%', '2%']}>
                    <SpinningImg src={leftWheel} alt={""} params={['100%','0','0', '20']} spinning={this.state.running}/>
                    <SmartImg src={leftHighlight} alt={""} params={['16%','14%','43%', '20']} />
                    <SmartImg src={leftShadow} alt={""} params={['65%','75%','18%', '10']} />
                </SmartContainer>
                <SmartContainer params={['46%', '6%', '52%']}>
                    <SpinningImg src={rightWheel} alt={""} params={['100%','0%','0%', '20']} spinning={this.state.running}/>
                    <SmartImg src={rightHighlight} alt={""} params={['16%','23%','42%', '20']} />
                    <SmartImg src={rightShadow} alt={""} params={['57%','65%','22%', '10']} />
                </SmartContainer>
                <PressBtn src= {this.state.runnable?pressBtnRed: pressBtnGrey} alt={""} params={['31%','57%','34%', '10']} 
                          onClick={this.startCalculation}/>
                <SmartImg src={tape} params={['67%', '39%', '16%', '1']}/>
                <SmartImg src={logo} params={['28%', '84%', '35%', '1']} />
                <InputComboWrapper params={['100%', '50%', '0%']}>
                    <SearchBarWrapper params={['26%', '34%', '4%', '1.3vw']}>
                        <SelectInput listName={this.state.brandList.sort()} 
                                        entryName={"BRAND YOUR KNOW"}
                                        selector = {this.selectHandler("inputBrand")}
                                        selectedItem = {this.state.inputBrand}
                                        filterOn={true}/>
                    </SearchBarWrapper>
                    <SearchBarWrapper params={['26%', '52%', '4%', '1.3vw']}>
                        <SelectInput listName={this.state.sizeList} 
                                        entryName={"TOP SIZE"}
                                        selector = {this.selectHandler("inputTop")}
                                        selectedItem = {this.state.inputTop}
                                        filterOn={false}
                                        />
                    </SearchBarWrapper>
                    <SearchBarWrapper params={['26%', '70%', '4%', '1.3vw']}>
                        <SelectInput listName={this.state.sizeList} 
                                        entryName={"BOTTOM SIZE"}
                                        selector = {this.selectHandler("inputBottom")}
                                        selectedItem = {this.state.inputBottom}
                                        filterOn={false}/>
                    </SearchBarWrapper>
                    <SearchBarWrapper params={['26%', '34%', '69%', '1.3vw']}>
                        <SelectInput listName={this.state.brandList.sort()} 
                                        entryName={"BRAND YOUR KNOW"}
                                        selector = {this.selectHandler("outputBrand")}
                                        selectedItem = {this.state.outputBrand}
                                        filterOn={true}/>
                    </SearchBarWrapper>
                    <SearchBarWrapper params={['26%', '52%', '69%', '1.3vw']}>
                        <SelectInput listName={this.state.sizeList} 
                                        entryName={"TOP SIZE"}
                                        selectedItem = {this.state.outputTop}
                                        displayOnly={true}/>
                    </SearchBarWrapper>
                    <SearchBarWrapper params={['26%', '70%', '69%', '1.3vw']}>
                        <SelectInput listName={this.state.outputBottom} 
                                        entryName={"BOTTOM SIZE"}
                                        selectedItem = {this.state.outputBottom}
                                        displayOnly={true}/>
                    </SearchBarWrapper>
                </InputComboWrapper>
                <StepBtnContainer params={['37%', '91%', '31%']}>
                    <img alt={""} src={stepBtn1}/>
                    <img alt={""} src={stepBtn2}/>
                    <img alt={""} src={stepBtn3}/>
                    <img alt={""} src={stepBtn4}/>
                </StepBtnContainer>
            </SizeConverterContainer >
        );
    };
};

export default SizeConverter;