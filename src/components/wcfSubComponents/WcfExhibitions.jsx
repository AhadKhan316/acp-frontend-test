import React from "react";
import ExhibitionGrid from "../wcfReusableComponents/WcfLandingPageExhibitionCard";

<<<<<<< HEAD
import exhbition1 from "/src/assets/wcf-assets/Wcf-Exhibition.jpeg";
import exhbition2 from "/src/assets/venues/Audi1/1.jpg";
=======
import exhbition1 from "/src/assets/wcf-assets/wcf-exhibition/wcf-exhibition1.jpg";
import exhbition2 from "/src/assets/wcf-assets/wcf-exhibition/wcf-exhibition2.jpg";
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

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
<<<<<<< HEAD
      maxImageHeight="400px"
=======
      maxImageHeight="570px"
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
      useHexClip={false}
    />
  );
}

export default WcfExhibitions;