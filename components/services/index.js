import { useState } from "react";

import {
  Container,
  Content,
  Title,
  Description,
  Box,
  List,
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
import Modal from '../modal'

export default function Services() {
  const services = [
    {
      title: "Stairs",
      slug: "stairs",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      title: "Retaining Wall",
      slug: "retaining-wall",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      title: "Pavers",
      slug: "pavers",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      title: "Driveway",
      slug: "driveway",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      title: "Walkways",
      slug: "walkways",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
    {
      title: "Excavation",
      slug: "excavation",
      description:
        "Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(true) 
  const [serviceType, setServiceType] = useState('general')

  function openModal(serviceSlug){
    setIsModalOpen(true)
    setServiceType(serviceSlug)
  }

  return (
    <>
    {isModalOpen && <Modal closeModal={setIsModalOpen} serviceType={serviceType}/>}
    <Container className={"grid"}>
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
            className={"carousel-xl"}
            framePadding={"0 50px"}
            slidesToShow={3}
            autoplay={false}
            wrapAround
            dragging={false}
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
            {services.map((service, key) => {
              return (
                <Box key={key}>
                  <h4>
                    <FaSquareFull size={8} fill={themeConfig.colors.orange} />{" "}
                    {service.title}
                  </h4>
                  <p>{service.description}</p>
                  <RequestButton className={"button-requestService"}
                  onClick={() => openModal(service.slug)
                  }>
                    <FaClipboardCheck
                      size={20}
                      fill={themeConfig.colors.orange}
                    />
                    Request Service
                  </RequestButton>
                </Box>
              );
            })}
          </Carousel>
          <Carousel
            className={"carousel-xs"}
            framePadding={"50px 0"}
            slidesToShow={1}
            autoplay={false}
            wrapAround
            vertical
            dragging={false}
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
            {services.map((service, key) => {
              return (
                <Box key={key}>
                  <h4>
                    <FaSquareFull size={8} fill={themeConfig.colors.orange} />{" "}
                    {service.title}
                  </h4>
                  <p>{service.description}</p>
                  <RequestButton
                    className={"button-requestService"}
                    onClick={() => console.log('fgffh')}
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
          </Carousel>
        </List>
      </Content>
    </Container>
    </>
  );
}
