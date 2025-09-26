import React, { useState, useEffect } from "react";

import "./styles.css";

import Button from "./Button/Button";
import Card from "./Card/Card";
import TextField from "./TextField/TextField";
import Form from "./Form/Form";
import ID from "./ID/ID";
import ErrorAlert from "./ErrorAlert/ErrorAlert";
import Option from "./Option/Option";

const idBackgroundUrls = [
  {
    color: "White Tiles",
    imageUrl: "https://images.unsplash.com/photo-1648743790035-a6dbddf7c0cf",
  },
  {
    color: "Green Blockscapes",
    imageUrl: "https://images.unsplash.com/photo-1616197151166-93dc9b4528d8",
  },
  {
    color: "Indigo Triangles",
    imageUrl: "https://images.unsplash.com/photo-1605106702734-205df224ecce",
  },
  {
    color: "Black Memphis",
    imageUrl: "https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4",
  },
  {
    color: "Red Tapes",
    imageUrl: "https://images.unsplash.com/photo-1652212976544-f385a3b484f0",
  },
  {
    color: "Yellow Brickwall",
    imageUrl: "https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57",
  },
  {
    color: "Blue Clouds",
    imageUrl: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5",
  },
  {
    color: "Orange Molecules",
    imageUrl: "https://images.unsplash.com/photo-1613216512260-494def845d68",
  },
  {
    color: "Fire Flame",
    imageUrl: "https://images.unsplash.com/photo-1643229901471-3dd0f780c6fe",
  },
];
const loadingTips = [
  "Finding a suitable cat...",
  "Swswswswsws...",
  "Generating your cat ID card...",
  "Please wait...",
  "Waiting for cataas.com...",
];
const errorTips = [
  "Try to describe your cat in one word.",
  "Try 'gif' :3",
  "You may want to be less specific (e.g. use 'gray' instead of 'tilapia-colored cat').",
  "You may use commas to separate your description (e.g. 'orange,cute' instead of 'orange cute')",
];

const year = new Date().getFullYear();

const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [error, setError] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [idDetails, setIdDetail] = useState({
    name: "",
    position: "",
    cat: "",
    imageId: "",
  });
  const [triggerCatFetch, setTriggerCatFetch] = useState(false);
  const [loadingTipIndex, setLoadingTipIndex] = useState(0);
  const [idUrlIndex, setIdUrlIndex] = useState(0);
  const [errorTipIndex, setErrorTipIndex] = useState(0);
  const [errorAttemptCount, setErrorAttemptCount] = useState(0);

  /*
    Dev Notes:
    - My favorite cat IDs (just guess where you can put these):
        1. nRctx0kIX5KHxnDj (baby yoda ahh cat)
        2. I90fZglRU609llF5 (nihao)
        3. JYpbBMDo6Hexm6OB (alien cat)
        4. JlhogZSez6mA8e9o (the hell you doin bruh)
        5. cQpiLvShgIksYW0p (nyan cat?)
        6. 0ztFbDrgDV2K7yJ1 (man ts is Garfield wtf)
        7. 765FX3jfOdu7HTC7 (salad)
        8. 5xkciWGhgeTnMyPj (mfw I woke up late)
        9. aZqzqH91SF832zig (I miss my cat, he kinda looked like this)
        10. L7BIY1Hnb0DFfPyV (pls let the cat...)
        11. E33ndMSJJrorXS9Y (gigacat)
        12. BYXdya8kT9QeOovW (you okay dude?)
        13. m8YjVISLzb0EGEPW (don't ask me what famous guy this cat looked like)
        14. y0K5oX101g33eNeJ (mfw I can't fix the errors in this app)
        15. GAg8aks8Rq2yQh6j (broken yeah but I liked it regardless)
        16. KjXFF7AvE2wrtEcs (magic)
        17. fEaxXcG5uK0pzu6A (I from FBI)
        18. QaUH1r3CqtVD389i (this is cute :3)
        19. VYLBb86IBQNRMCa9 (freaky ahh cat)
        20. SAImCwHIfuVEevkd (nice cat design)
        21. ngfJ6lSzEdJQ9GO8 (cat in a box)
        22. RIiyaSyMjYr3l8EE (mesmerizing)
        23. QebA39uBBU5vkL94 (why the cat decided to do that?)
        24. ixRk1RsDeH1MGBZ3 (nyam nyam nyam)
        25. LjpA3VsCrQqMManN (nyan cat)
    - i swear to God I saw a fucking cow in this API like bruh
      I thought we are having cats here? I'll find it again
    - update, I found the goddamn cow and there are TWO
        1. o7eRI6OgNZOcot0Z
        2. nUD43sba4OqC4wPR
  */

  useEffect(() => {
    if (triggerCatFetch) {
      const fetchRandomCat = async () => {
        try {
          const response = await fetch(
            `https://cataas.com/cat${
              idDetails.cat != "" ? "/" + idDetails.cat : ""
            }?type=square&position=center&json=true`
          );
          const data = await response.json();
          if (data.id == "o7eRI6OgNZOcot0Z" || data.id == "nUD43sba4OqC4wPR") {
            setTimeout(() => {
              alert(
                "Wow! You just found an unusual cat; a COW! Seriously, what the actual fuck is that?"
              );
              console.log(
                "Wow! You just found an unusual cat; a COW! Seriously, what the actual fuck is that?"
              );
            }, 3000);
          }
          if (data == "Cat not found") {
            if (errorAttemptCount == 5) {
              setErrorTipIndex(generateRandomNumber(0, errorTips.length - 1));
              setError(`Tip: ${errorTips[errorTipIndex]}`);
            } else {
              setError("Unable to find a cat that matches your description.");
              setErrorAttemptCount((prev) => ++prev);
            }
            reset();
          } else {
            setProfilePictureUrl(data.url);
            setIdDetail((prev) => {
              return {
                ...prev,
                imageId: data.id,
              };
            });
            setErrorAttemptCount(0);
            setError(null);
          }
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        } finally {
          setLoadingState(false);
        }
        setTriggerCatFetch(false);
      };

      fetchRandomCat();
    }
  }, [triggerCatFetch]);

  const handleSubmit = (e) => {
    setLoadingState(true);
    setTriggerCatFetch(true);
    setLoadingTipIndex(generateRandomNumber(0, loadingTips.length - 1));
  };

  function reset() {
    setProfilePictureUrl("");
    setIdDetail({
      name: "",
      position: "",
      cat: "",
    });
    setIdUrlIndex(0);
  }

  return (
    <div className="App">
      {isLoading ? (
        <Card padding="1.5rem">
          <img
            src="https://rxaliman.github.io/assets/cat-Cv5UEnNK.gif"
            style={{
              justifySelf: "center",
              marginBottom: "1rem",
              width: "120px",
              height: "auto",
            }}
            alt="Cat Loading GIF"
          />
          <div
            style={{
              color: "gray",
              textAlign: "center",
            }}
          >
            {loadingTips[loadingTipIndex]}
          </div>
        </Card>
      ) : profilePictureUrl != "" ? (
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          <ID
            name={idDetails.name == "" ? "Tukmol" : idDetails.name}
            position={idDetails.position == "" ? "Wala" : idDetails.position}
            imageUrl={profilePictureUrl}
            backgroundUrl={idBackgroundUrls[idUrlIndex].imageUrl}
            subtitle={"ID: " + idDetails.imageId}
          />
          <div
            style={{
              textAlign: "center",
              color: "gray",
            }}
          >
            Click on the ID card to change orientation
          </div>
          <Button
            onClick={reset}
            label="Generate another one!"
            backgroundColor="#00CCDD"
            isOutlined={true}
          />
        </div>
      ) : (
        <Card
          title="Cat ID Card Generator"
          subtitle="Create a random cat ID card in seconds"
          padding="2rem"
          width="380px"
        >
          <Form onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              placeholder="Ex.: Biggus Dickus"
              onChange={(e) => {
                setIdDetail((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
            />
            <TextField
              name="position"
              label="Position/Job"
              placeholder="Ex.: International Tambay"
              onChange={(e) => {
                setIdDetail((prev) => {
                  return {
                    ...prev,
                    position: e.target.value,
                  };
                });
              }}
            />
            <Option
              name="color"
              label="ID Background"
              options={idBackgroundUrls.map((bg) => {
                return bg.color;
              })}
              onChange={(e) => {
                setIdUrlIndex(
                  idBackgroundUrls
                    .map((obj) => obj.color)
                    .indexOf(e.target.value)
                );
              }}
            />
            <TextField
              name="description"
              label="Describe your Cat"
              placeholder="Leave this blank for a true random cat"
              onChange={(e) => {
                setIdDetail((prev) => {
                  return {
                    ...prev,
                    cat: e.target.value,
                  };
                });
              }}
            />
            {error && <ErrorAlert message={error} />}
            <Button type="submit" label="Generate!" backgroundColor="#00CCDD" />
          </Form>
        </Card>
      )}
      <div className="attribution">
        ©{" "}
        <a
          style={{
            color: "gray",
          }}
          href="https://rxaliman.github.io/"
        >
          Rovic Aliman
        </a>{" "}
        {year}
      </div>
    </div>
  );
};

export default App;