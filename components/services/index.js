import serviceData from "../../data/services.json";

import {
  Container,
  Content,
  Title,
  Description,
  Box,
  List,
  ServiceList,
  RequestButton,
} from "./styles";
import Carousel from "nuka-carousel";
import {
  FaAngleRight,
  FaAngleLeft,
  FaClipboardCheck,
  FaAngleDown,
  FaAngleUp,
  FaSquareFull,
} from "react-icons/fa";
import { themeConfig } from "../../styles/theme";

export function ServiceContent() {
  return (
    <>
      <Container className={"grid section-xl"}>
        <Content>
          <article>
            <h3>
              Improving quality of life with an integrated unified approach.
            </h3>
            <p>
              Sed posuere consectetur est at lobortis. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
          </article>
          <article>
            <ServiceList>
              {serviceData.map((service, key) => {
                return (
                  <Box key={key} dark>
                    <h4>
                      <FaSquareFull size={8} fill={themeConfig.colors.orange} />{" "}
                      {service.title}
                    </h4>
                    <p>{service.description}</p>
                    <RequestButton
                      className={"button-requestService"}
                      href={`/estimate?type=${service.slug}`}
                    >
                      <FaClipboardCheck
                        size={20}
                        fill={themeConfig.colors.orange}
                      />
                      Request Service
                    </RequestButton>
                  </Box>
                );
              })}
            </ServiceList>
          </article>
        </Content>
      </Container>
    </>
  );
}

export function Services() {
  return (
    <>
      <Container className={"grid section-xl"}>
        <Content>
          <header>
            <Title>Services</Title>
            <Description>
              Donec id elit non mi porta gravida at eget metus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget
              risus varius blandit sit amet non magna.
            </Description>
          </header>
          <List>
            <Carousel
              className={"carousel carousel-xl"}
              framePadding={"0 50px"}
              slidesToShow={3}
              autoplay={true}
              wrapAround
              dragging
              renderBottomCenterControls={null}
              renderCenterLeftControls={({ previousSlide }) => (
                <button className={"controlButton"} onClick={previousSlide}>
                  <FaAngleLeft size={30} fill={themeConfig.colors.black} />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className={"controlButton"} onClick={nextSlide}>
                  <FaAngleRight size={30} fill={themeConfig.colors.black} />
                </button>
              )}
            >
              {serviceData.map((service, key) => {
                return (
                  <Box key={key}>
                    <h4>
                      <FaSquareFull size={8} fill={themeConfig.colors.orange} />{" "}
                      {service.title}
                    </h4>
                    <p>{service.description}</p>
                  </Box>
                );
              })}
            </Carousel>
            <Carousel
              className={"carousel carousel-xs"}
              framePadding={"50px 0"}
              slidesToShow={1}
              autoplay={true}
              wrapAround
              vertical
              dragging
              renderBottomCenterControls={null}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              renderTopCenterControls={({ previousSlide }) => (
                <button className={"controlButton"} onClick={previousSlide}>
                  <FaAngleUp size={30} fill={themeConfig.colors.black} />
                </button>
              )}
              renderBottomCenterControls={({ nextSlide }) => (
                <button className={"controlButton"} onClick={nextSlide}>
                  <FaAngleDown size={30} fill={themeConfig.colors.black} />
                </button>
              )}
            >
              {serviceData.map((service, key) => {
                return (
                  <Box key={key}>
                    <h4>
                      <FaSquareFull size={8} fill={themeConfig.colors.orange} />{" "}
                      {service.title}
                    </h4>
                    <p>{service.description}</p>
                  </Box>
                );
              })}
            </Carousel>
          </List>
          <RequestButton className={"button-requestService"} href={"/estimate"}>
            <FaClipboardCheck size={20} fill={themeConfig.colors.orange} />
            Request Service
          </RequestButton>
        </Content>
      </Container>
    </>
  );
}
