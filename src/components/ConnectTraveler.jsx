import styled, { keyframes } from "styled-components";
import { Container } from "../common/container";
import {Button} from "../common/button"
import { checkbox, TravelCard } from "./Data.json";
import Card from "./Card";
import { SecondHeading} from "../common/secondHeading"
import { HeadingWrapper } from "../common/headingWrapper";
import { SmallHeading } from "../common/smallHeading";
const scroll = keyframes`
0%{
    tarnsform:translateX(100%);
}
    100%{
    transform:translateX(-100%);
    }
`


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ScrollWrapper = styled.div`
position:relative;
display:flex;
width:100%;
overflow-x:hidden;
scrollbar-width:none;

`
const InnerWrapper = styled.div`
white-space:nowrap;
display: inherit;
animation:${scroll} 20s linear infinite;
`
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
            gap:"90px"
          }}
        >
        {/* <div>
          <img src="/mobile.png" alt="Mobile-Image" className='box-shadow' style={{height:"900px",scale:2.8,objectFit:"cover"}} />
        </div>  */}
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
            <Button className="btn-hover">Join Our Community</Button>
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
          <SecondHeading $color="white" $weight={400}>
            Discover the true way of travelling
          </SecondHeading>
          <SmallHeading $color="white" $weight={200}>
            Check out the different features on our app to become a veteran
            explorer{" "}
          </SmallHeading>
        </HeadingWrapper>
        <ScrollWrapper>
          <InnerWrapper>
          {TravelCard.map((data) => {
            return (
              <Card key={data.id}>
                <img src={data.img} alt="" style={{objectFit:"cover"}}/>
                <p style={{ color: "white",position:"absolute",bottom:"20px" }}>{data.title}</p>
              </Card>
            );
          })}
          </InnerWrapper>
          <InnerWrapper >
          {TravelCard.map((data) => {
            return (
              <Card key={data.id}>
                <img src={data.img} alt="" style={{objectFit:"cover"}}/>
                <p style={{ color: "white",position:"absolute",bottom:"20px" }}>{data.title}</p>
              </Card>
            );
          })}
          </InnerWrapper>
        </ScrollWrapper>
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