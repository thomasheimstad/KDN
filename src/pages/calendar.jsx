import React, {useEffect, useState} from "react";
import ajax from "superagent";
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import Events from "../components/calendar/Events";
import Seo from '../components/modules/Seo';
import config from '../../data/Siteconfig';

const Calendar = (props) => {
  let calendarID="testtesttest";
  let apiKey="testtesttest";

  const [calendarItems, setCalendarItems] = useState({});

  useEffect(()=>{

    ajax.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?&key=${apiKey}&singleEvents=true&orderBy=starttime`)
      .end((error, response) => {
        if(!error && response ) {
          setCalendarItems(response.body);
          console.log(response.body);
        } else {
          console.log("Errors: ", error);
        }
      });
  },[])
  /* Events savedState stores the returned Ajax call in state. */
  return (
    <Layout location={props.location}>
      <Helmet>
        <title>{`Calendar | ${config.siteTitle}`}</title>
      </Helmet>
      <Seo />
      <div className="calendar flex center basePad">
        <Events savedState={calendarItems} />
      </div>
    </Layout>
  );
}
export default Calendar;
