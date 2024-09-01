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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064073197!2d-0.43123970044350396!3d51.52860701956136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZG9uLCBCaXJsyZnFn21pxZ8gS3JhbGzEsXE!5e0!3m2!1saz!2saz!4v1725190280459!5m2!1saz!2saz"
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
