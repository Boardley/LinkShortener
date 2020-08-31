import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Button, Input } from "../../components/common";

import "../../images/bg-shorten-desktop.svg";

const Form = styled.form`
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50vh;
  max-height: 80%;
  max-width: 70%;

  background-image: url("bg-shorten-desktop.svg"); /* The image used */
  height: 5rem; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  background: #3a3054;
  padding: 30px;
  color: black;
  border-radius: 6px;

  > ${Button}:first-of-type {
    float: right;
    width: 10rem;
    margin: auto;
    margin-top: 1rem;
    padding: 0.9rem;
  }

  > ${Input} {
    margin-top: 1rem;
    padding: 1.4rem;
    width: 80%;
  }

  .text-color {
    color: #59d1d0;
    margin-left: 0.5rem;
  }

  .error-text {
    color: red;
    margin-left: 0.5rem;
  }
`;

const Results = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem;
  max-width: 70%;
  padding: 30px;
  color: black;
  border-radius: 6px;

  .text-color {
    color: #59d1d0;
    margin-left: 0.5rem;
  }

  .short-link {
    margin-left: 3rem;
  }

  .copy-icon {
    margin: 1.2rem;
  }

  .jello-horizontal {
    -webkit-animation: jello-horizontal 1.5s both;
    animation: jello-horizontal 1.5s both;
  }

  @-webkit-keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;

/* localStorage.setItem("links", JSON.stringify([]));
 */ const SaveDataToLocalStorage = (data) => {
  let a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("links")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(data);
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("links", JSON.stringify(a));
};

const FetchComponent = () => {
  const [link, setLink] = useState({});
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem("links") || []));
  }, []);
  console.log(links);

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
        setLink(newUrl);
        setLoading(false);
        SaveDataToLocalStorage(newUrl);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="linkShortener"
          placeholder="Shorten Link Here..."
          type="text"
          ref={register({ required: true })}
        />

        <Button type="submit"> Shorten Link </Button>
        {loading && <p className="text-color">Shortening Your Long Link...</p>}

        {errors.linkShortener && (
          <p className="error-text">Please add a link.</p>
        )}
      </Form>

      <Results>
        {links.map((data) => {
          return (
            <>
              <p>{link.url}</p>

              <p className="short-link text-color">{link.shortenUrl}</p>

              {link.shortenUrl && (
                <CopyToClipboard text={link.shortenUrl}>
                  <i className="text-color jello-horizontal copy-icon fas fa-copy"></i>
                </CopyToClipboard>
              )}
            </>
          );
        })}
      </Results>
    </>
  );
};

export default FetchComponent;
