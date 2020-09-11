import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

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

  const Form = styled.form`
    border: dotted pink 0.1rem;
    height: 5rem;
    width: 100%;
  `;

  const Input = styled.input`
    border: dotted yellowgreen 0.1rem;
    width: 50%;
    justify-items: center;
  `;

  return (
    <PageLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="linkShortener"
          placeholder="Shorten Link Here..."
          type="text"
          ref={register({ required: true })}
        />

        <button type="submit"> Shorten Link </button>
        {loading && <p className="text-color">Shortening Your Long Link...</p>}

        {errors.linkShortener && (
          <p className="error-text">Please add a link.</p>
        )}
      </Form>

      <div>
        {links.map((data) => {
          return (
            <>
              <p>{data.url.toString().substr(0, 30)}...</p>

              <p>{data.shortenUrl}</p>

              <p>
                {data.shortenUrl && (
                  <CopyToClipboard text={data.shortenUrl}>
                    <i className="text-color jello-horizontal copy-icon fas fa-copy"></i>
                  </CopyToClipboard>
                )}
              </p>
            </>
          );
        })}
      </div>
    </PageLayout>
  );
};
export default FetchComponent;
