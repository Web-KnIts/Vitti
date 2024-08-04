import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Content } from "../common/content";
import { SecondHeading } from "../common/secondHeading";
import { Container } from "../common/container";
import {Button} from "../common/button"

const StyledInput = {
    width: "100%",
    border: "none",
    fontSize: "16px",
    borderRadius: "8px",
    fontWeight: 400,
    outline: "none",
    fontFamily: "Poppins",
    padding: "15px 20px",
    marginBottom:"10px"
};


const PlannerWrapper = styled.div`
    width: 72vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    @media (max-width:1280px){
        width:80vw;
    }

`;

export const Heading = styled.div`
    line-height: 1;
    font-family: Visby;
    padding: 20px 0px;
    h1{
    font-weight: 500;
    font-size: 75px;
    }

    @media (max-width:1280px)
    {
        h1{
        font-size:60px;
        }
    }

`;


const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


function TravelPlanner() {
    const [formData, setFormData] = useState({
        startDestination: "",
        endDestination: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => (
            { ...prev, [name]: value }
        ));
        console.log(formData); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }
    return (
        <>
        <Container $height="auto" $backgroundcolor="black" id="Travel-Planner">
            <PlannerWrapper>
                <div style={{ flexBasis: "43%" }}>
                    <Heading>
                        <h1>Plan Your</h1>
                        <h1>Trips</h1>
                    </Heading>
                    <Content $color={"white"} $lg_responsive={{$size:"18px !important"}}>
                        <p>
                        Vitti makes planning your diverse travel desires effortless with just a click. Browse our extensive catalog of destinations, accommodations, and dining options to ensure a seamless travel experience.
                        </p>
                    </Content>
                </div>
                <div style={{ flexBasis: "35%", display: "flex", flexDirection: "column" }}>
                    <SecondHeading $color="white" style={{paddingBottom: "40px"}} $lg_responsive={{$paddingBottom:"30px !important",$size:"35px !important"}}>
                        Travel Planner
                    </SecondHeading>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="start" style={{ width: "100%" }}>
                            <input
                                autoComplete="off"
                                style={StyledInput}
                                type="text"
                                placeholder="Karachi"
                                name="startDestination"
                                value={formData.startDestination}
                                onChange={handleChange}
                                // disabled
                            />
                            <span className="align-text">Start Destination</span>
                        </label>
                        <label htmlFor="end" style={{ width: "100%" }}>
                            <input
                                autoComplete="off"
                                style={StyledInput}
                                type="text"
                                placeholder="Lucknow"
                                name="endDestination"
                                // disabled
                                value={formData.endDestination}
                                onChange={(e)=>handleChange(e)}
                            />
                            <span className="align-text">End Destination</span>
                        </label>
                        <Button type="submit">Let's go Travel Hunting!</Button>
                    </Form>
                </div>
            </PlannerWrapper>
        </Container>
        </>
    );
}

export default TravelPlanner;
