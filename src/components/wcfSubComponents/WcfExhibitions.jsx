import React from "react";
import ExhibitionGrid from "../wcfReusableComponents/WcfLandingPageExhibitionCard";

import exhbition1 from "/src/assets/wcf-assets/Wcf-Exhibition.jpeg";
import exhbition2 from "/src/assets/venues/Audi1/1.jpg";

// Exhibition Data
const exhibitions = [
  {
    title: "Sindh Artists Exhibition",
    image: exhbition1,
  },
  {
    title: "Art Exhibition Masters' & Contemporary Art",
    image: exhbition2,
  },
  {
    title: "Candy Forest",
    image: exhbition1,
  },
  {
    title: "Candy Forest",
    image: exhbition2,
  },
  {
    title: "Candy Forest",
    image: exhbition1,
  },
  {
    title: "Candy Forest",
    image: exhbition2,
  },
];

function WcfExhibitions() {
  return (
    <ExhibitionGrid
      exhibitions={exhibitions}
      title="Exhibitions"
      gridCols={{ base: 1, sm: 2, lg: 3 }}
      imageAspectRatio="1/1"
      maxImageHeight="400px"
      useHexClip={false}
    />
  );
}

export default WcfExhibitions;