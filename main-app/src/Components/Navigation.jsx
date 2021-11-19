import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const TopContainer = styled.div`
    height: 200vh;
    width: 100%;
    background-color:white;
`;

const TitleContainer = styled.div `
    display: block;
    height:50%;
    width:100%;
    background-color:white;
`;

const Title = styled.h1`
    height:25%;
    width:100%;
    font-size:200px;
    padding:10px;
`;

const OptionContainer = styled.div`
    display:block;
    height:50%;
    width:100%;
    background-color:black;
    text-decoration:none;
`;

let NavigationOptions = styled.a`
    display:block;
    height: 25%;
    font-size: 150px;
    color:white;
    background-color:black;
    cursor: pointer;

    &:hover {
        outline:none;
        color:black;
        background-color:white;
        transition: 0.8s;
    }
`;

const FooterContainer = styled.div `
    display:block;
    height:50%;
    width:100%;
    background-color:white;
`;

const FooterText = styled.h2 `
    height:50%;
    width:100%;
    font-size:200px;
    padding:10px;
`;

function Navigation (){
    return <TopContainer>
            <TitleContainer>
                <Title>Fake</Title>
                <Title>Company.</Title>
            </TitleContainer>
            <OptionContainer>
                <Link to="/Components/AboutPage">
                    <NavigationOptions>About.</NavigationOptions>
                </Link>
                <Link to="/Components/ProjectsPage">
                     <NavigationOptions>Projects.</NavigationOptions>
                </Link>
                <Link to="/Components/AboutPage">
                    <NavigationOptions>Technology.</NavigationOptions>
                </Link>
                <Link to="/Components/AboutPage">
                    <NavigationOptions>Carrier.</NavigationOptions>
                </Link>
            </OptionContainer>
            <FooterContainer>
                <FooterText>
                    Contact us.
                </FooterText>
            </FooterContainer>
        </TopContainer>
} 

export default Navigation;