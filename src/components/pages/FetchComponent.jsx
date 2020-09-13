import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Section from "./Section";
import styled from "styled-components";

import formImage from "../../images/formImage.svg";

import { PageLayout } from "../common/PageLayout";

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
    font-family: "Poppins", sans-serif;
    background-color: #f1f1f6;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /*stretch container*/
    width: 100.6vw;
    margin-left: -25rem;

    /*  Media Queries  */
    @media (min-width: 800px) {
      width: 101.6vw;
      margin-left: -2rem;
    }

    @media (min-width: 700px) {
      width: 101.6vw;
      margin-left: -2rem;
    }

    @media (min-width: 600px) {
      width: 103.6vw;
      margin-left: -2rem;
    }

    @media (min-width: 500px) {
      width: 108.6vw;
      margin-left: -2rem;
    }

    @media (min-width: 400px) {
      width: 113.6vw;
      margin-left: -2rem;
    }

    @media (min-width: 300px) {
      margin-left: -1.5rem;
      width: 122%;
    }
  `;

  const Form = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3b3153;
    border-radius: 0.7rem;
    height: 5rem;
    width: 60%;
    padding: 1.6rem;
    margin: 1.6rem;
    margin-top: -4rem;

    @media (min-width: 800px) {
      width: 76%;
    }

    @media (min-width: 700px) {
      width: 85%;
    }

    @media (min-width: 600px) {
      width: 76%;
    }

    @media (min-width: 500px) {
      flex-direction: column;
      width: 70%;
    }

    @media (min-width: 400px) {
      flex-direction: column;
      width: 70%;
    }

    @media (min-width: 300px) {
      flex-direction: column;
      width: 70%;
    }
  `;

  const Input = styled.input`
    border-radius: 0.3rem;
    width: 60%;
    height: 2.5rem;
    padding-left: 1rem;
    outline: none;

    @media (min-width: 500px) {
      margin-bottom: 0.5rem;
      width: 90%;
      height: 70%;
    }

    @media (min-width: 400px) {
      margin-bottom: 0.5rem;
      width: 90%;
      height: 70%;
    }

    @media (min-width: 300px) {
      margin-bottom: 0.5rem;
      width: 90%;
      height: 70%;
    }
  `;

  const InputText = styled.p`
    color: white;
    font-style: italic;
    text-align: left;
    position: absolute;
    margin-left: -35rem;
    margin-top: 100px;
  `;

  const InputText2 = styled.p`
    position: absolute;
    margin-left: -40rem;
    color: #d54062;
    font-style: italic;
    text-align: left;
    margin-top: 100px;
  `;

  const Button = styled.button`
    background-color: #5ad2cf;
    border-radius: 0.3rem;
    width: 10rem;
    height: 2.5rem;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;

    @media (min-width: 500px) {
      width: 95%;
      height: 72%;
    }

    @media (min-width: 400px) {
      width: 95%;
      height: 72%;
    }

    @media (min-width: 300px) {
      width: 100%;
      height: 72%;
    }
  `;

  const ResultsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;

    background-color: #ffffff;
    border-radius: 0.3rem;
    width: 59rem;

    @media (min-width: 800px) {
      width: 40rem;
    }

    @media (min-width: 700px) {
      width: 39rem;
    }

    @media (min-width: 600px) {
      width: 31rem;
      flex-direction: column;
    }

    @media (min-width: 500px) {
      width: 25rem;
      flex-direction: column;
    }

    @media (min-width: 400px) {
      width: 20rem;
      flex-direction: column;
    }

    @media (min-width: 300px) {
      width: 15rem;
      flex-direction: column;
    }
  `;

  const ShortContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ShortURL = styled.p`
    margin-left: -18%;
    color: #5ad2cf;

    @media (min-width: 600px) {
      margin-left: 0%;
    }

    @media (min-width: 500px) {
      margin-left: 0%;
    }

    @media (min-width: 200px) {
      margin-left: 0%;
    }
  `;

  const CopyIcon = styled.p`
    color: #5ad2cf;
  `;

  return (
    <PageLayout>
      <Container>
        <Form
          style={{ backgroundImage: `url(${formImage})` }}
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
            <InputText className="text-color">
              Shortening Your Long Link...
            </InputText>
          )}

          {errors.linkShortener && (
            <InputText2 className="error-text">Please add a link</InputText2>
          )}
        </Form>

        <div>
          {links.map((data) => {
            return (
              <ResultsContainer>
                <p>{data.url.toString().substr(0, 20)}...</p>

                <ShortContainer>
                  <ShortURL>{data.shortenUrl}</ShortURL>

                  <CopyIcon>
                    {data.shortenUrl && (
                      <CopyToClipboard text={data.shortenUrl}>
                        <i className="text-color jello-horizontal copy-icon fas fa-copy"></i>
                      </CopyToClipboard>
                    )}
                  </CopyIcon>
                </ShortContainer>
              </ResultsContainer>
            );
          })}
        </div>
        <Section />
      </Container>
    </PageLayout>
  );
};
export default FetchComponent;
