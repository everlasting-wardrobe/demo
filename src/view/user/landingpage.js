import React, { Component } from 'react';

import { IMAGE_STORAGE } from '../../api/constants';
import {
    H3,
    H5,
    Img,
} from '../../components/globals';
import {
    SloganBackgroundWrapper,
    HIWStepIcon,
    HugeTitle,
    SubTitle,
    HIWStepTitle,
    RockButton,
    SectionWrapper,
    HIWTitle,
    HIWStepWrapper,
    HIWStepComboWrapper,
    DscrptText,
    BenefitWrapper,
    BenefitTitle,
    BenefitLink,
    BenefitLinksWrapper,
    RecIcon,
    RecTitle,
    RecDscrpt,
    RecStepWrapper,
    RecStepComboWrapper,
} from './style';

const backgroundURL = IMAGE_STORAGE + 'v1537286281/work/LandingPagePanel.jpg';

const HIWStepsInfo = [
    {
        name: "Set Up",
        imgSrc: IMAGE_STORAGE + "v1537291767/work/setUp.png",
        dscrpt: "Use Your Backstage Access to help our stylists dress your little superstar! Click on the button above to get started!",
    },
    {
        name: "Sample",
        imgSrc: IMAGE_STORAGE + "v1537291856/work/sample.png",
        dscrpt: "Rock each piece of clothing as often as you'd like for 30 days! Discover clothing brands from all across the world.",
    },
    {
        name: "Showtime",
        imgSrc: IMAGE_STORAGE + "v1537291919/work/showtime.png",
        dscrpt: "No pressure to purchase anything! Free shipping both ways! Find a piece or brand you love? Use Everlasting Wardrobe exclusive discount codes to shop your new favorites!",
    },
    {
        name: "Set Up",
        imgSrc: IMAGE_STORAGE + "v1537291940/work/share.png",
        dscrpt: "Send it back! Remix and Mashup your Preferences in your personal Studio. Each Wardrobe we send is curated based on your item reviews and style preferences.",
    },
];

const RecycleInfo = [
    {
        name: "Play it back",
        imgSrc: IMAGE_STORAGE + "w_200/v1537468155/work/playitback.png",
        dscrpt: "Apparel is donated in Refurbished Wardrobes with charity partners after it is taken out of a service",
    },
    {
        name: "Play it forward",
        imgSrc: IMAGE_STORAGE + "w_200/v1537468173/work/playitforward.png",
        dscrpt: "Any inventory that is too damaged, is sent to recycling partners for repurposing",
    }
];

const HIWStep = (props) => (
    <HIWStepWrapper>
        <HIWStepIcon src={props.imgSrc} />
        <HIWStepTitle>
            {props.name}
        </HIWStepTitle>
        <DscrptText>
            {props.dscrpt}
        </DscrptText>
    </HIWStepWrapper>
    );

const HIWSteps = () => (
    <HIWStepComboWrapper>
    {HIWStepsInfo.map(step => (
        <HIWStep imgSrc={step.imgSrc}
                 name={step.name}
                 dscrpt={step.dscrpt} />
    ))}
    </HIWStepComboWrapper>
);

const RecStep = (props) => (
    <RecStepWrapper>
        <RecIcon src={props.imgSrc} />
        <RecTitle>
            {props.name}
        </RecTitle>
        <RecDscrpt>
            {props.dscrpt}
        </RecDscrpt>
    </RecStepWrapper>
    );

    const RecSteps = () => (
        <RecStepComboWrapper>
        {RecycleInfo.map(step => (
            <RecStep imgSrc={step.imgSrc}
                     name={step.name}
                     dscrpt={step.dscrpt} />
        ))}
        </RecStepComboWrapper>
    );

const LandingPage = () => {
    return (
        <div>
        <SloganBackgroundWrapper url={backgroundURL}>
            <SectionWrapper height={"100vh"}>
            <HugeTitle>
                {"Kids Grow. Clothing Doesn't."}
            </HugeTitle>
            <SubTitle>
                {"The First Rental Clothing Service for Growing Children"}
            </SubTitle>
            <RockButton to={""}> {"LET'S ROCK!!"}</RockButton>
            </SectionWrapper>
        </SloganBackgroundWrapper>
        <HIWTitle>
            {"Discover New Brands Each Month"}
        </HIWTitle>
        <HIWSteps/>
        <BenefitWrapper>
            <BenefitTitle>
                {"JOIN THE CLUB TODAY FOR AS LITTLE AS $40/MONTH"}
            </BenefitTitle>
            <BenefitLinksWrapper>
                <BenefitLink to={""}>
                    {"BECOME A MEMBER"}
                </BenefitLink>
                <BenefitLink to={""}>
                    {"GIVE AS A GIFT"}
                </BenefitLink>
            </BenefitLinksWrapper>
        </BenefitWrapper>
        <RecSteps />
        </div>
    );
};

export default LandingPage;