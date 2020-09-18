import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Section from "./Section";
import styled from "styled-components";

import boostDesktop from "../../images/boostDesktop.svg";

/* Saving in Local Storage */
const SaveDataToLocalStorage = (data) => {
  let a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("links")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  if (a.length >= 5) {
    a.pop();
  }
  a.unshift(data);
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("links", JSON.stringify(a));
};

const FetchComponent = () => {
  const [link, setLink] = useState({});
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  const readingLinks = () => {
    setLinks(JSON.parse(localStorage.getItem("links")) || []);
  };

  useEffect(() => {
    readingLinks();
  }, []);

  useEffect(() => {
    readingLinks();
  }, [link]);

  const { register, errors, handleSubmit } = useForm();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "__cfduid=d9160954faa4bd270b91e63679b6040f81598406033"
  );

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

  const onSubmit = (data) => {
    setLoading(true);

    const raw = JSON.stringify({
      url: `${data.linkShortener}`,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(CORSURL + `https://rel.ink/api/links/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newUrl = {
          url: result.url,
          shortenUrl: `https://rel.ink/${result.hashid}`,
        };
        SaveDataToLocalStorage(newUrl);
        setLink(newUrl);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  };

  const Container = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    text-align: center;
    background-color: #eff1f7;
    width: 100vw;
    margin-left: -1rem;

    @media (max-width: 1500px) {
      width: 101vw;
      margin-left: -1rem;
    }

    @media (max-width: 1024px) {
      width: 106.5vw;
    }

    @media (max-width: 768px) {
      width: 109.1vw;
    }

    @media (max-width: 700px) {
      width: 101vw;
    }

    @media (max-width: 540px) {
      width: 104.4vw;
    }

    @media (max-width: 414px) {
      width: 119vw;
    }

    @media (max-width: 411px) {
      width: 120.5vw;
    }

    @media (max-width: 360px) {
      width: 115.2vw;
    }

    @media (max-width: 320px) {
      width: 129vw;
    }

    @media (max-width: 300px) {
      width: 103vw;
    }

    @media (max-width: 280px) {
      width: 130vw;
    }
  `;

  const Form = styled.div`
    display: flex;
    background-color: hsl(257, 27%, 26%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.5rem;
    width: 70vw;
    padding: 1rem;
    margin-top: -6rem;

    @media (max-width: 2000px) {
      flex-direction: row;
      width: 89vw;
      padding: 1rem;
      height: 10rem;
    }

    @media (max-width: 1500px) {
      width: 89vw;
      padding: 1rem;
      height: 8rem;
    }

    @media (max-width: 1000px) {
      flex-direction: row;
      width: 89vw;
      padding: 1rem;
      height: 8rem;
    }

    @media (max-width: 800px) {
      flex-direction: row;
      width: 89vw;
      padding: 1rem;
      height: 8rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      width: 85%;
    }

    @media (max-width: 500px) {
      width: 80%;
      border-radius: 0.5rem;
    }

    @media (max-width: 200px) {
      width: 80%;
      margin: auto auto auto 0.7rem;
    }
  `;

  const Input = styled.input`
    font-size: 0.7rem;
    min-width: 80%;
    max-width: 80%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    margin-bottom: 0.5rem;

    @media (max-width: 2000px) {
      font-size: 1.4rem;
      height: 3rem;
      margin: auto;
      min-width: 70%;
      max-width: 70%;
    }

    @media (max-width: 1500px) {
      font-size: 1.2rem;
      height: 2rem;
      margin: auto;
      min-width: 70%;
      max-width: 70%;
    }

    @media (max-width: 1000px) {
      font-size: 1.2rem;
      height: 2rem;
      margin: auto;
      min-width: 70%;
      max-width: 70%;
    }

    @media (max-width: 800px) {
      font-size: 1.2rem;
      height: 2rem;
      margin: auto;
      min-width: 70%;
      max-width: 70%;
    }

    @media (max-width: 700px) {
      font-size: 1.2rem;
      min-width: 90%;
      max-width: 90%;
      height: 2rem;
    }

    @media (max-width: 600px) {
      font-size: 1.1rem;
      min-width: 90%;
      max-width: 90%;
      height: 1.4rem;
      padding: 1rem;
      border-radius: 0.3rem;
    }

    @media (max-width: 500px) {
      font-size: 1rem;
      min-width: 90%;
      max-width: 90%;
      padding: 1rem;
      border-radius: 0.3rem;
    }

    @media (max-width: 300px) {
      font-size: 0.9rem;
      min-width: 90%;
      max-width: 90%;
      padding: 0.8rem;
      border-radius: 0.3rem;
    }

    @media (max-width: 200px) {
      min-width: 85%;
      max-width: 85%;
      padding: 0.6rem;
    }
  `;

  const Button = styled.button`
    font-size: 1rem;
    background-color: hsl(180, 66%, 49%);
    color: white;
    font-weight: 700;
    border-radius: 0.3rem;
    max-width: 90%;
    min-width: 90%;
    padding: 0.6rem;
    align-content: center;
    margin-bottom: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;

    @media (max-width: 2000px) {
      font-size: 1.5rem;
      height: 4.1rem;
      max-width: 20%;
      min-width: 20%;
      margin: auto;
    }

    @media (max-width: 1500px) {
      height: 3.2rem;
      max-width: 20%;
      min-width: 20%;
      margin: auto;
    }

    @media (max-width: 1000px) {
      height: 3.2rem;
      max-width: 20%;
      min-width: 20%;
      margin: auto;
    }

    @media (max-width: 800px) {
      height: 3.2rem;
      max-width: 20%;
      min-width: 20%;
      margin: auto;
    }

    @media (max-width: 700px) {
      font-size: 1.7rem;
      max-width: 93%;
      min-width: 93%;
      margin-top: 0.5rem;
    }

    @media (max-width: 600px) {
      font-size: 1.6rem;
      max-width: 98%;
      min-width: 98%;
      padding: 0.7rem;
      margin-top: 0.5rem;
      border-radius: 0.3rem;
    }

    @media (max-width: 500px) {
      font-size: 1.5rem;
      max-width: 98%;
      min-width: 98%;
      padding: 1rem;
      border-radius: 0.3rem;
    }

    @media (max-width: 300px) {
      font-size: 1.5rem;
      max-width: 100%;
      min-width: 100%;
      padding: 0.7rem;
    }

    @media (max-width: 200px) {
      font-size: 1.2rem;
      max-width: 100%;
      min-width: 100%;
      padding: 0.3rem;
    }
  `;

  const Shortening = styled.div`
    color: red;
  `;

  return (
    <>
      <Container>
        <Form
          style={{ backgroundImage: `url(${boostDesktop})` }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            name="linkShortener"
            placeholder="Shorten Link Here..."
            type="text"
            ref={register({ required: true })}
          />

          <Button type="submit"> Shorten it! </Button>
          {loading && (
            <Shortening className="text-color">
              Shortening Your Long Link...
            </Shortening>
          )}

          {errors.linkShortener && (
            <div className="error-text">Please add a link</div>
          )}
        </Form>

        <div>
          {links.map((data) => {
            return (
              <div>
                <p>{data.url.toString().substr(0, 20)}...</p>

                <div>
                  <div>{data.shortenUrl}</div>

                  <div>
                    {data.shortenUrl && (
                      <CopyToClipboard text={data.shortenUrl}>
                        <i className="text-color jello-horizontal copy-icon fas fa-copy"></i>
                      </CopyToClipboard>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Section />
    </>
  );
};
export default FetchComponent;
