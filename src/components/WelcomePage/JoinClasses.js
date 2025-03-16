import { useState } from "react";
import { Link } from "react-router-dom";

import exploreIcon from '../../assets/icons/go-icon.png';
import dividerIcon from '../../assets/icons/y-divider.png';
import nigerianFlag from '../../assets/images/nigeria-logo.png';

export default function JoinClasses() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="pageModal liveClasses_section text-center">
        <h2 className="">Start Your Journey!</h2>
        <p className="my-2">
            Stay connected and never miss an update! 
            All important information about your live classes, schedules, 
            and announcements will be shared in our exclusive community group. 
            Connect with instructors, engage with fellow learners, 
            and access valuable resources—all in one place!
        </p>

        <div className="mt-5 d-flex flex-column gap-4">
            <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
            />
            <div className="input-group">
                <span className="input-group-text gap-2 border-0">
                    <img src={nigerianFlag} alt="Nigeria Flag" width="24" height="24" className="" />
                    +234
                    <img src={dividerIcon} alt="Nigeria Flag" width="2px" height="24" className="" />
                </span>
                <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
        </div>

        <div className="btn-action_div justify-content-center my-4 mb-5">
            <Link className="customBtn" data-bs-toggle="modal" data-bs-target="#regModal">
                <span>Join Community</span> <img src={exploreIcon} alt="icon" />
            </Link>
        </div>
    </section>
  );
}
