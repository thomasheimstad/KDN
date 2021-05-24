import React, {useState} from "react";
import { useSpring, animated, config } from 'react-spring';
import FadeInWrapper from '../modules/FadeInWrapper';
const Events = (props) => {
    const [showAll, setShowAll] = useState(false);
    const [pastEvents, setPastEvents] = useState(false);
    const [pastYear, setPastYear] = useState(new Date().getFullYear()-1);
    const [allYears, setAllYears] = useState([]);

  /* The following function returns the first 3 upcoming events from your Google Calendar, and filters out the finished events.
     The switch deals with two cases, where the second one, true, returns ALL the next calendar events.*/
  let reduceTo10events = (e) => {
    let temp = [];
    for(let i of e.events)
    i && temp.push(i);
    switch(showAll) {
      case false: return [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9]];
      case true: return [...temp];
    }
  }
  /* Event handler for the button. It toggles the state between false and true, which will reveal either 3 or ALL your Google calendar events. */
  let handleClick = () => {
    /* Sets the state to the opposite of the previous state. Basically toggles between true and false.  */
    setShowAll(!showAll)
  }
  let handlePastClick = (o,e) => {
    e = e || window.event;
    e.preventDefault();

    if(o==="Upcoming"){
      setPastEvents(false)
    } else {
      setPastEvents(true);
    }
  }
  let buttonText = showAll ? "Show fewer events" : "Show all events";
  let buttonPastText = pastEvents ? "Upcoming" : "Past events";
    /* The following .map method returns some of the object parameters from the Google Calendar Event, which is retrieved thorugh an Ajax call
       in the Calendar component. Now, it returns the data in a presentable manner, which makes css styling a breeze. The .map method retrieves the parameters
       for all the Calendar Events. */
    /* props.savedState fetches the saved return from the Ajax call in the Calendar component. */

    let events = (props.savedState.items || []).map((item, index) => {
      let summary = item.summary;
      let id = item.id;
      let description = item.description;
      let location = item.location;
      let start = item.start.dateTime;
      let number = [...start];
      let year = new Date(item.start.dateTime).getFullYear();

      if(start.slice(0,15) < new Date().toJSON().slice(0,15) ) {
        if(allYears === null && allYears.length <= 0){
          setAllYears([year])
        } else if(allYears.includes(year) === true) {
        } else {
          setAllYears([year, ...allYears])
        }
      }
      /* If the events' start time is later than today, it will return the events */

      if(item.start.dateTime.slice(0,15) > new Date().toJSON().slice(0,15) && pastEvents === false ) {
          return (
            <FadeInWrapper key={index} id={id} showAll={showAll} class="eventsContainer flex row">
                <div className="timeContainer flex column">
                  <h3 className="date">{number[8]}{number[9]}.{number[5]}{number[6]}.{number[2]}{number[3]}</h3>
                  <h3 className="time">{number[11]}{number[12]}{number[13]}{number[14]}{number[15]}</h3>
                </div>
                <div className="descriptionContainer">
                  <h2 className="summary">{summary}</h2>
                  <p className="description">{description}</p>
                  {
                      location ? <a href={location} className="location" target="_blank">Tickets/Info</a> : ''
                  }
                </div>
                </FadeInWrapper>
            )
          } else if(item.start.dateTime.slice(0,15) < new Date().toJSON().slice(0,15) && pastEvents === true  && year === pastYear) {
              return (
                <FadeInWrapper key={index} id={id} showAll={showAll} class="eventsContainer flex row">
                    <div className="timeContainer flex column">
                      <h3 className="date">{number[8]}{number[9]}.{number[5]}{number[6]}.{number[2]}{number[3]}</h3>
                      <h3 className="time">{number[11]}{number[12]}{number[13]}{number[14]}{number[15]}</h3>
                    </div>
                    <div className="descriptionContainer">
                      <h2 className="summary">{summary}</h2>
                      <p className="description">{description}</p>
                      {
                          location ? <a href={location} className="location" target="_blank">Tickets/Info</a> : ''
                      }
                    </div>
                    </FadeInWrapper>
                )
              }
        }
      )
    /* Using the ReactCSSTransitionGroup to create some simple transitions between the two states (true/false). See the css file for the styling
       for these transitions. Beware: when choosing a transition time in the css file which is longer than the "transitionEnterTimeout",
       the "transitionEnterTimeout"s number will cancel the css' number. In this case, it's set to 500ms. I added "transitionLeaveTimeout" only because
       the console threw a warning.

       The function this.reduceTo3events() returns the total number of events retrieved from the .map, and enables a toggle between states.

       The buttons onClick method calls the handleClick function, which toggles between states. */

    return (
      <div className="events">
        <div className="flex center basePad buttons" style={{paddingBottom: '2rem'}}>
          <div className="button" onClick={(()=>setPastEvents(false))}><h3>Upcoming</h3></div>
          <div className="button" onClick={(()=>setPastEvents(true))}><h3>Past</h3></div>
        </div>
        <FadeInWrapper id="chooseYearButtons">
          <div className="flex center buttons wrap" style={{paddingTop: 0}}>
          { pastEvents ?
            allYears.map(x=>{
              // filter out future years
              if(x <= new Date().getFullYear()){
                  return (<div key={x} className="button" onClick={(()=>setPastYear(x))}><h3>{`${x}`}</h3></div>)
              } else {
                ''
              }
            })
          : ''
          }
          </div>
        </FadeInWrapper>
        <div className="eventsWrapper">
          {reduceTo10events({events})}
        </div>
        <div className="buttons flex center">
          <div className="button eventButton" onClick={handleClick}><h3>{buttonText}</h3></div>
        </div>

      </div>
    );
  }
export default Events;
