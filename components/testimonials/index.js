import testimonialsData from "../../data/testimonials.json";
import { useState } from "react";

import { Container, Content, Box, List, Button } from "./styles";

import Carousel from "nuka-carousel";

import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDown,
  FaAngleUp,
  FaSquareFull,
  FaStar,
} from "react-icons/fa";
import { themeConfig } from "../../styles/theme";

export function Testimonials() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    await fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        location,
        message,
      }),
    });
  }
  return (
    <>
      <Container className={"grid section-xl"}>
        <Content>
          <List>
            <Carousel
              className={"carousel carousel-xl"}
              framePadding={"0 50px"}
              slidesToShow={3}
              autoplay={false}
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
              {testimonialsData.map(
                ({ client, testimonial, city, state }, key) => {
                  return (
                    <Box key={key}>
                      <p>{testimonial}</p>

                      <div className="testimonial-detail">
                        <div style={{ display: "flex" }}>
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                        </div>
                        <h4>
                          <FaSquareFull
                            size={8}
                            fill={themeConfig.colors.orange}
                          />{" "}
                          {client}
                        </h4>
                        <small>
                          {city}, {state}
                        </small>
                      </div>
                    </Box>
                  );
                }
              )}
            </Carousel>
            <Carousel
              className={"carousel carousel-xs"}
              framePadding={"50px 0"}
              slidesToShow={1}
              autoplay={false}
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
              {testimonialsData.map(
                ({ client, testimonial, city, state }, key) => {
                  return (
                    <Box key={key}>
                      <p>{testimonial}</p>

                      <div className="testimonial-detail">
                        <div style={{ display: "flex" }}>
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                          <FaStar fill="orange" />
                        </div>
                        <h4>
                          <FaSquareFull
                            size={8}
                            fill={themeConfig.colors.orange}
                          />{" "}
                          {client}
                        </h4>
                        <small>
                          {city}, {state}
                        </small>
                      </div>
                    </Box>
                  );
                }
              )}
            </Carousel>
          </List>
        </Content>

        <Content>
          <header>
            <h3>Send us your feedback. We appreciate it!</h3>
          </header>
          <article>
            <form method={"POST"} onSubmit={handleSubmit}>
              <fieldset>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  required
                  onBlur={(e) => setName(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  required
                  pattern={"[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+"}
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  required
                  onBlur={(e) => setLocation(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  onBlur={(e) => setMessage(e.target.value)}
                ></textarea>
              </fieldset>
              <Button type="submit">Submit</Button>
            </form>
          </article>
        </Content>
      </Container>
    </>
  );
}
