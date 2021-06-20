import { useState } from "react";
import { Container, Content, Button } from "./styles";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const initialValues = {
    name: "Rafael",
    age: 29,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    age: Yup.string(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ name, age }, { resetForm }) => {
      alert(`${name}, ${age} years old.`);
      resetForm();
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
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
        phone,
        location,
        subject,
        message,
      }),
    });
  }
  return (
    <Container className="grid section-xl">
      <Content>
        {/* <article>
          <h3>
            Improving quality of life with an integrated unified approach.
          </h3>
          <p>
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
          </p>
        </article> */}
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
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                pattern={"^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"}
                required
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
              <label htmlFor="subject">Subject:</label>
              <select
                name="subject"
                required
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="none" selected disabled>
                  Please select an option
                </option>
                <option value="new-project">New Project</option>
                <option value="ongoing-project">Ongoing Project</option>
                <option value="general">General Question</option>
                <option value="review">Review</option>
                <option value="compaint">Complaint</option>
              </select>
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
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type your name"
          {...formik.getFieldProps("name")}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Type your age"
          {...formik.getFieldProps("age")}
        />
        <button type="submit">Send</button>
      </form>
    </Container>
  );
}
