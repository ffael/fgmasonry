import services from "../../data/services.json";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Content, Button } from "./styles";
import { ToastContainer, toast } from "react-toastify";

export default function Estimate() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState(() => {
    if (router.query.type) {
      return router.query.type;
    }
    return "none";
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (router.query.type) {
      setType(router.query.type);
    }
  }, [router.query]);

  async function handleSubmit(e) {
    await fetch("/api/estimate", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        type,
        area,
        message,
      }),
    }).then(toast.success("Hurray!"));
    return e.preventDefault();
  }
  return (
    <Container className="grid section-xl">
      <Content>
        <article>
          <h3>Get a free estimate</h3>
          {/* <p>
            Sed posuere consectetur est at lobortis. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p> */}
        </article>
        <article>
          <form method="POST" onSubmit={(e) => handleSubmit(e)}>
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
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                required
                pattern={"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"}
                onBlur={(e) => setPhone(e.target.value)}
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
              <label htmlFor="project-type">Project Type:</label>
              <select
                name="project-type"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}
              >
                <option value="none" selected disabled>
                  Please select an option
                </option>
                {services.map((service, key) => {
                  return (
                    <option key={key} value={service.slug}>
                      {service.title}
                    </option>
                  );
                })}
                <option value="varios">
                  Multiple Services (please describe)
                </option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="area">Project Area (in sqft):</label>
              <input
                type="number"
                min="1"
                id="area"
                onBlur={(e) => setArea(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="message">Description:</label>
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
      <ToastContainer />
    </Container>
  );
}
