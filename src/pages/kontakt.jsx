import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ContactInfo from '../components/modules/ContactInfo';
import Seo from "../components/modules/Seo";
import config from "../../data/SiteConfig";


const Kontakt = (props) => {
  return (
    <Layout>
      <div className="getInTouch">
        <Helmet title={config.siteTitle} />
        <ContactInfo />
      </div>
    </Layout>
  );
}
export default Kontakt;
