import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Layout from './components/Layout';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import About from './components/About';
// import PresidentMessage from './components/PresidentMessage';
import StayUpdated from './components/StayUpdated';
<<<<<<< HEAD
import Academy from './components/Academy';
=======
import Sovapa from './components/Academy';
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
import CommunityFeedback from './components/CommunityFeedback';
import Production from './components/Production';
// import OurSocial from './components/OurSocial';
import OurSponsors from './components/Sponsors';
import ContactUs from './Pages/ContactUs';

// Pages
<<<<<<< HEAD
import AcademiesPage from './Pages/AcademyPage';
import VenuesPage from './Pages/VenuePage';
=======
import SovapaPage from './Pages/SovapaPage';
import VenuesPage from './Pages/Venue';
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
import AboutUs from './Pages/AboutUs';
import GoverningBody from './Pages/GoverningBody';
import TeamMembers from './Pages/TeamMember';
import MembersVerification from './Pages/MembersVerification';
import Career from './Pages/Careers';
import Tenders from './Pages/Tenders';

// ACP Sub Pages
import UpcomingEventsPage from './Pages/AcpSubPages/UpcomingEventsPage';
<<<<<<< HEAD
import AcademyCoursePage from './Pages/AcpSubPages/AcademyCoursePage';
import VenueSubPage from './Pages/AcpSubPages/VenuesPage';

=======
import SovapaCoursePage from './Pages/AcpSubPages/SovapaCoursePage';
import VenueSubPage from './Pages/AcpSubPages/VenuesPage';


>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
// WCF Page
import WorldCultureFestival from './Pages/WorldCulturalFestival';

// PLF Page
import PakistanLiteratureFestival from './Pages/PakistanLiteratureFestival';

// AUC Page
import AalmiUrduConference from './Pages/AalmiUrduConference';

// PYF Page
import PakistanYouthFestival from './Pages/PakistanYouthFestival';

// Women Conference Page
import WomenConference from './Pages/WomenConference'

// PTF Pages
import PakistanTheatreFestival from './Pages/PakistanTheatreFestival';

<<<<<<< HEAD
//registration page

import Registrations  from './Pages/Registrations';
=======
// AAF Pages
import ArtsAlumniFestival from './Pages/AlumniFestival';
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <UpcomingEvents />
              {/* <PresidentMessage /> */}
<<<<<<< HEAD
              <Academy />
=======
              <Sovapa />
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

              <Production />
              {/* <OurSocial /> */}
              <StayUpdated />
              <CommunityFeedback />
              <OurSponsors />
            </>
          } />

          {/* ACP Sub Pages */}
          <Route path="/upcomingEvents" element={<UpcomingEventsPage />}></Route>
<<<<<<< HEAD
          <Route path="/academies/:department" element={<AcademyCoursePage />}></Route>
          <Route path="/venues/:venueId" element={<VenueSubPage />} />


          <Route path="/academies" element={<AcademiesPage />} />
=======
          <Route path="/sovapa/:department" element={<SovapaCoursePage />}></Route>
          <Route path="/facilities/:venueId" element={<VenueSubPage />} />

          {/* Arts Alumni Festival Route */}
          <Route path="/alumni" element={<ArtsAlumniFestival />} />

          {/* Contact Us */}

          <Route path="/sovapa" element={<SovapaPage />} />
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad
          <Route path="/facilities" element={<VenuesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/governingBody" element={<GoverningBody />} />
          <Route path="/teamMembers" element={<TeamMembers />} />
          <Route path="/membersVerification" element={<MembersVerification />} />
          <Route path="/career" element={<Career />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>

        {/* Routes without Navbar and Footer */}

        {/* WCF */}
        <Route path="/festival/wcf/*" element={<WorldCultureFestival />} />

        {/* PLF */}
        <Route path="/festival/plf/*" element={<PakistanLiteratureFestival />} />

        {/* AUC */}
        <Route path="/festival/auc/*" element={<AalmiUrduConference />} />

        {/* PYF */}
        <Route path="/festival/pyf/*" element={<PakistanYouthFestival />} />

        {/* WC */}
        <Route path="/festival/wc/*" element={<WomenConference />} />

        {/* PTF */}
        <Route path="/festival/ptf/*" element={<PakistanTheatreFestival />} />

<<<<<<< HEAD
        <Route path="/Registrations/*" element={<Registrations/>} />
=======
        {/* AAF */}
        {/* <Route path="/festival/aaf/*" element={<ArtsAlumniFestival />} /> */}
>>>>>>> fbfb84323d75946017973a822635bbc57c7f31ad

      </Routes>
    </Router>
  );
};

export default App;
