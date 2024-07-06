import styled from "styled-components";
import { Container } from "./FindSurfExplore";
import { Button, SecondHeading } from "./TravelPlanner";
import { checkbox, TravelCard } from "./Data.json";
import Card from "./Card";

export const SmallHeading = styled.h4`
  margin:auto;
  color: ${(props) => props.$color || "black"};
  font-size: ${(props)=>props.$size || "22px"};
  font-weight: ${(props) => props.$weight || "normal"};
`;
export const HeadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: ${(props) => props.$mb || "50px"};
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function ConnectTraveler() {
  return (
    <>
      <Container>
        <HeadingWrapper $mb="100px">
          <SecondHeading $weight="bolder">
            Connect with other travel bugs
          </SecondHeading>
          <SmallHeading $color="#707070" $weight="medium">
            Share your experience,reviews and stunning photos with the Vitti
            right in the app
          </SmallHeading>
        </HeadingWrapper>
        <Container
          $width="72vw"
          $padding="0px"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
           {/*<div>
          <img src="/MobilePhone.png" alt="Mobile-Image" style={{height:"900px",scale:2.8,objectFit:"cover"}} />
        </div>*/} 
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px",
              width: "410px",
            }}
          >
            <SmallHeading
              $color="#707070"
              $weight="medium"
              style={{ textTransform: "capitalize", textAlign: "center" }}
            >
              Max out your fun with your explorer buddies
            </SmallHeading>
            <ContentWrapper>
              {checkbox.map((val) => {
                return (
                  <div
                    style={{
                      display: "Flex",
                      gap: "10px",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                    key={val.id}
                  >
                    <img src="/checkIcon.svg" alt="" />
                    <span>{val.title}</span>
                  </div>
                );
              })}
            </ContentWrapper>
            <Button>Join Our Community</Button>
          </div>
        </Container>
      </Container>
      <Container
        style={{
          background:
            "linear-gradient(0deg, rgba(35,124,255,1) 0%, rgba(8,66,151,1) 100%)",
        }}
      >
        <HeadingWrapper>
          <SecondHeading $color="white" $weight="bold">
            Discover the true way of travelling
          </SecondHeading>
          <SmallHeading $color="white" $weight="medium">
            Check out the different features on our app to become a veteran
            explorer{" "}
          </SmallHeading>
        </HeadingWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {TravelCard.map((data) => {
            return (
              <Card key={data.id}>
                <img src={data.img} alt="" style={{objectFit:"cover"}}/>
                <p style={{ color: "white",position:"absolute",bottom:"20px" }}>{data.title}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default ConnectTraveler;

// issue :-
/*
Image size issue :
checkbox and card icons
*/