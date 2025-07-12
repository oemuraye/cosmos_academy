import React from "react";
import { ReactComponent as CosmosLogo } from "../../../assets/icons/cosmos.svg";
import { ReactComponent as OrangeArrow } from "../../../assets/icons/orange-arrow.svg";
import { ReactComponent as PurpleArrow } from "../../../assets/icons/purple-arrow.svg";
import { ReactComponent as DPurpleArrow } from "../../../assets/icons/d-purple-arrow.svg";
import { ReactComponent as GreenArrow } from "../../../assets/icons/green-arrow.svg";
import { ReactComponent as BlueArrow } from "../../../assets/icons/blue-arrow.svg";
import { ReactComponent as CalenderIcon } from "../../../assets/icons/calenda.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { ReactComponent as TimeIcon } from "../../../assets/icons/carbon_time.svg";
import { ReactComponent as GoogleMeet } from "../../../assets/icons/logos_google-meet.svg";
import trustImage from "../../../assets/images/trustImg.png";
import piusImage from "../../../assets/images/piusImage.png";
import menaImage from "../../../assets/images/menaImage.png";
import blessingImage from "../../../assets/images/blessingImage.png";
import hopeImage from "../../../assets/images/deraImage.png";
import fonaImage from "../../../assets/images/fonaImage.png";
import danielImage from "../../../assets/images/danielImage.png";
import israelImage from "../../../assets/images/israelImage.png";
import obadaImage from "../../../assets/images/obadaImage.png";

import IconLabel from "../../Common/IconLabel";

import "./style.css";

const collageImagesRt = [
  { src: <OrangeArrow />, type: 1 },
  { src: trustImage, type: 0 },
  { src: israelImage, type: 0 },
  { src: <DPurpleArrow />, type: 1 },
  { src: danielImage, type: 0 },
];

const collageImagesBt = [
  { src: menaImage, type: 0 },
  { src: <PurpleArrow />, type: 1 },
  { src: blessingImage, type: 0 },
  { src: piusImage, type: 0 },
  { src: <OrangeArrow />, type: 1 },
  { src: hopeImage, type: 0 },
  { src: <GreenArrow />, type: 1 },
  { src: fonaImage, type: 0 },
  { src: obadaImage, type: 0 },
  { src: <BlueArrow />, type: 1 },
  { src: israelImage, type: 0 },
  { src: <OrangeArrow />, type: 1 },
];

const WebinarAnnouncement = () => {


  return (
    <div
      className="announcement p-4 mx-auto"
      style={{
        maxWidth: "700px",
        backgroundColor: "#1E1E1E",
        color: "#fff",
        borderRadius: "12px",
      }}

    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span className="cosmos-logo">
          <CosmosLogo />
        </span>
        <div className="cosmos-logo-text" style={{ display: "flex", flexDirection: "column" }}>
          <span>
            Cosmos
          </span>
          <span>
            Academy
          </span>
        </div>
      </div>
      <div className="events-desc">
        <div className="lt">
          <div className="">

            <h1>
              DEAR<br />INNOVATORS
            </h1>
            <p className="events-text mb-0">
              Join us for our <strong>Live Webinar</strong> as we introduce our
              programs for the Cosmos Academy.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2 align-items-center my-1" style={{ maxWidth: '250px' }}>
            <IconLabel icon={<CalenderIcon />} size='16.15px' font_size='10.37px' >
              <span>19th March, 2025</span>
            </IconLabel>
            <IconLabel icon={<TimeIcon />} size='16.15px' font_size='10.37px' >
              <span>3:00PM (WAT)</span>
            </IconLabel>
            <IconLabel icon={<LocationIcon />} icon2={<GoogleMeet />} size='16.15px' font_size='10.37px' >
              <span>Google Meet</span>
            </IconLabel>
          </div>

          <div className="events-reg">
            <strong>
              Register:{" "}
            </strong>
            <a
              href="https://wfy37fhnnamm89.ru.xy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning"
            >
              wfy37fhnnamm89.ru.xy
            </a>
          </div>

          <div className="collage-container">
            <div className="collage collage-row">
              {collageImagesBt.map((collage, index) => (
                <div className="img-collage" key={index}>
                  {!collage.type && <img
                    src={collage.src}
                    alt={`Attendee ${index + 1}`}
                  />}
                  {!!collage.type && collage.src}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rt d-flex align-items-end">
          <div className="collage collage-col">
            {collageImagesRt.map((collage, index) => (
              <div className="img-collage" key={index}>
                {!collage.type && <img
                  src={collage.src}
                  alt={`Attendee ${index + 1}`}
                />}
                {!!collage.type && collage.src}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WebinarAnnouncement;
