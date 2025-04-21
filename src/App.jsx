import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Layout from './components/Layout';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import About from './components/About';
// import PresidentMessage from './components/PresidentMessage';
import StayUpdated from './components/StayUpdated';
import Academy from './components/Academy';
import CommunityFeedback from './components/CommunityFeedback';
import Production from './components/Production';
// import OurSocial from './components/OurSocial';
import ContactUs from './Pages/ContactUs';

// Pages
import AcademiesPage from './Pages/AcademyPage';
import VenuesPage from './Pages/VenuePage';
import AboutUs from './Pages/AboutUs';
import GoverningBody from './Pages/GoverningBody';
import TeamMembers from './Pages/TeamMember';
import MembersVerification from './Pages/MembersVerification';
import Career from './Pages/Careers';
import Tenders from './Pages/Tenders';

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
              <Academy />
              <CommunityFeedback />
              <Production />
              {/* <OurSocial /> */}
              <StayUpdated />
            </>
          } />
          <Route path="/AcademiesPage" element={<AcademiesPage />} />
          <Route path="/VenuesPage" element={<VenuesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/GoverningBody" element={<GoverningBody />} />
          <Route path="/TeamMembers" element={<TeamMembers />} />
          <Route path="/MembersVerification" element={<MembersVerification />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Tenders" element={<Tenders />} />
          <Route path="/ContactUs" element={<ContactUs />} />
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

      </Routes>
    </Router>
  );
};

export default App;
