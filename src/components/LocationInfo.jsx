import React from "react";

const LocationInfo = () => {
  return (
    <div>
      <div className="LocationInfo container">
        <div className="title">
          <h3>Where to Find</h3>
          <span>Have an Event Coming Up?</span>
          <p>
            Don’t miss out on this exotic fusion of cultures! The kitchen is
            gorgeous in every way.
          </p>
        </div>
        <div className="content">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24314.60114355638!2d49.959146737524605!3d40.37948586450815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030649b906e4d39%3A0x5bf31674360301e!2zWWVuaSBHw7xuyZnFn2xpLCBCYWvEsQ!5e0!3m2!1saz!2saz!4v1729196702880!5m2!1saz!2saz"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="OpeningHours">
            <span className="title">Opening Hours</span>
            <ul>
              <li>
                <span>Monday</span>
                <span>CLOSED</span>
              </li>
              <li>
                <span>Tuesday</span>
                <span>02:00PM - 11:00PM</span>
              </li>
              <li>
                <span>Wednesday</span>
                <span>02:00PM - 11:00PM</span>
              </li>
              <li>
                <span>Thursday</span>
                <span>02:00PM - 11:00PM</span>
              </li>
              <li>
                <span>Friday</span>
                <span>02:00PM - 11:00PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>02:00PM - 11:00PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>02:00PM - 12:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
