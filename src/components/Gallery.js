import { useEffect, useState } from "react";

import { Box, Button, TextField } from "@mui/material";

import {
  ImageGeneratorUnsplash,
  UnsplashCarrousel,
} from "../components/Unsplash.js";
import mock from "../mock.json";

function Home() {
  const [keyword, setkeyword] = useState("dev");
  const [images, setimages] = useState(mock);

  const handleGenerate = (keyword, imagenum) => {
    ImageGeneratorUnsplash(keyword, imagenum).then((results) => {
      setimages(results);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setkeyword(event.target.value);
    }
  };

  useEffect(() => {
    // handleGenerate(`dev`, 6);
  }, []);

  return (
    <Box>
      <Box width={"50vw"}>
        {images?.length > 0 && <UnsplashCarrousel images={images} />}
      </Box>
      <Box marginTop={5}>
        <TextField
          onChange={(e) => setkeyword(e.target.value)}
          onKeyUp={(e) => handleGenerate(e.target.value)}
          id="standard-basic"
          variant="standard"
          sx={{ width: "50%", marginBottom: "50px" }}
          onKeyDown={handleKeyPress}
          label="Enter a value"
          value={keyword}
        />
        <Button onClick={() => handleGenerate()} variant="contained">
          Generate
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
