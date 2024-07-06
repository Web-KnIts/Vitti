import { useState } from "react";
import styled from "styled-components";
import { Container } from "./FindSurfExplore";

const StyledInput = {
    width: "100%",
    border: "none",
    fontSize: "16px",
    borderRadius: "8px",
    fontWeight: 400,
    outline: "none",
    fontFamily: "Poppins",
    padding: "15px 20px"
};

export const SecondHeading = styled.h3`
color:${(props)=>props.$color || "black"};
font-size:${(props)=>props.$size || "32px"};
font-weight:${(props)=>props.$weight || 500};
`

const PlannerWrapper = styled.div`
    width: 72vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;

export const Heading = styled.div`
    line-height: 1;
    font-family: Poppins;
    font-size: 36px;
    font-weight: bolder;
    padding: 20px 0px;
`;

export const Content = styled.div`
    color:${(props)=>props.$color ||"black" };
    font-size:${(props)=> props.$size || "18px"};
    font-weight: normal;
    text-align: left;
    width: 100%;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Button = styled.button`
    width: 100%;
    font-size: 20px;
    padding: 15px 15px;
    border-radius: 10px;
    color: white;
    background-color: rgb(35, 124, 255);
    background: linear-gradient(0deg, rgba(35, 124, 255, 1) 0%, rgba(3, 115, 243, 1) 100%);
    text-transform: capitalize;
    font-weight: 700;
    font-family: Poppins; 
    transition: background-color 10s ease, box-shadow 0.3s ease;
    &:hover {
        background: rgb(249, 109, 0);
        background: linear-gradient(0deg, rgba(249, 109, 0, 1) 0%, rgba(235, 153, 110, 1) 100%);
        box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.25);
    }
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
                    <Content>
                        <p>
                            Vitti helps you plan your multitude of travel cravings with the click of a button. Access our catalogues list of places to visit, stay and dine at to ensure a seamless travel experience.
                        </p>
                    </Content>
                </div>
                <div style={{ flexBasis: "35%", display: "flex", flexDirection: "column" }}>
                    <SecondHeading $color="white" style={{paddingBottom: "40px" }}>
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
                            <span id="align-text">Start Destination</span>
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
                            <span id="align-text">End Destination</span>
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
