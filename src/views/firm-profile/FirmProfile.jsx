import { useState } from "react";
import avatar from "../../assets/icons/profile.jpg";
import camera from "../../assets/icons/camera.png";
import EditISVG from "../../svgIcons/EditIcon";
import CancleSVG from "../../svgIcons/Cancel";
import FileSVG from "../../svgIcons/File";

function UserProfile() {
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [isContactEditing, setIsContactEditing] = useState(false);
  const [isProfileEditing, setIsProfileEditing] = useState(false);

  const AbouthandleEditClick = () => {
    setIsAboutEditing(true);
  };

  const AbouthandleCancelClick = () => {
    setIsAboutEditing(false);
  };

  const ContacthandleEditClick = () => {
    setIsContactEditing(true);
  };

  const ContacthandleCancelClick = () => {
    setIsContactEditing(false);
  };

  const ProfilehandleEditClick = () => {
    setIsProfileEditing(true);
  };

  const ProfilehandleCancelClick = () => {
    setIsProfileEditing(false);
  };

  const AbouthandleSaveClick = () => {
    setIsAboutEditing(false);
  };
  const ContacthandleSaveClick = () => {
    setIsContactEditing(false);
  };

  const ProfilehandleSaveClick = () => {
    setIsProfileEditing(false);
  };

  return (
    <div className="wrapper-box">
      <div className="profile-wrapper">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 gap-in">
              <div
                className={`your-profile user-cmn-section ${
                  isAboutEditing ? "edit-section" : ""
                }`}
              >
                <div className="head">
                  <label>Basic Details</label>
                  <span>Joined 2/6/23</span>
                </div>
                <div className="user-profile-avt">
                  <div className="avt-img">
                    <img src={avatar} alt="" />
                    {isAboutEditing && (
                      <span className="upload-over">
                        <img src={camera} alt="" />
                        <input type="file" />
                      </span>
                    )}
                  </div>

                  <div className="action-icons">
                    {!isAboutEditing && (
                      <div
                        className="edit-btn"
                        title="Edit"
                        onClick={AbouthandleEditClick}
                      >
                        <EditISVG />
                      </div>
                    )}
                    {isAboutEditing && (
                      <div
                        className="save-btn"
                        title="Save"
                        onClick={AbouthandleSaveClick}
                      >
                        <FileSVG />
                      </div>
                    )}
                    {isAboutEditing && (
                      <div
                        className="can-btn"
                        title="Cancel"
                        onClick={AbouthandleCancelClick}
                      >
                        <CancleSVG />
                      </div>
                    )}
                  </div>
                </div>
                <div className="user-prf-name">
                  <div className="detail-box">
                    <input
                      className="name"
                      type="text"
                      value="Jane Eyre"
                      readOnly={!isAboutEditing}
                    />
                    <div className="About-section">
                      <label className="mb-2">
                        <b>About us</b>
                      </label>
                      <textarea readOnly={!isAboutEditing}>
                        Based in California, 500 Startups is an early stage
                        venture capital firm and accelerator program for
                        start-ups. The firm invests globally across a diverse
                        range of technology sectors including internet,
                        software, mobile platforms, and business and information
                        services.
                      </textarea>
                    </div>
                  </div>
                  {/* <button className="edit-btn"><img src={pencil} /> Edit</button> */}
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className={`user-cmn-section ${
                      isContactEditing ? "edit-section" : ""
                    }`}
                  >
                    <div className="title-name">
                      Contact Details
                      <div className="action-icons">
                        {!isContactEditing && (
                          <div
                            className="edit-btn"
                            title="Edit"
                            onClick={ContacthandleEditClick}
                          >
                            <EditISVG />
                          </div>
                        )}
                        {isContactEditing && (
                          <div
                            className="save-btn"
                            title="Save"
                            onClick={ContacthandleSaveClick}
                          >
                            <FileSVG />
                          </div>
                        )}
                        {isContactEditing && (
                          <div
                            className="can-btn"
                            title="Cancel"
                            onClick={ContacthandleCancelClick}
                          >
                            <CancleSVG />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="user-field-section">
                      <span className="category">Primary</span>
                      <div className="cate-one">
                        <div className="col-box">
                          <label>City</label>
                          <span>
                            <input
                              type="text"
                              value="San Francisco"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Address</label>
                          <span>
                            <input
                              type="text"
                              value="San Francisco"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>State/Country</label>
                          <span>
                            <input
                              type="text"
                              value="CA"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Zip Code</label>
                          <span>
                            <input
                              type="text"
                              value="94103"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Website</label>
                          <span>
                            <input
                              type="text"
                              value="http://www.500.co"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Email</label>
                          <span>
                            <input
                              type="text"
                              value="press@500.co"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Telephone</label>
                          <span>
                            <input
                              type="text"
                              value="+1 212 476 8000"
                              readOnly={!isContactEditing}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 gap-in">
                  <div
                    className={`user-cmn-section ${
                      isProfileEditing ? "edit-section" : ""
                    }`}
                  >
                    <div className="title-name">
                      Fund Manager Profile
                      <div className="action-icons">
                        {!isProfileEditing && (
                          <div
                            className="edit-btn"
                            title="Edit"
                            onClick={ProfilehandleEditClick}
                          >
                            <EditISVG />
                          </div>
                        )}
                        {isProfileEditing && (
                          <div
                            className="save-btn"
                            title="Save"
                            onClick={ProfilehandleSaveClick}
                          >
                            <FileSVG />
                          </div>
                        )}
                        {isProfileEditing && (
                          <div
                            className="can-btn"
                            title="Cancel"
                            onClick={ProfilehandleCancelClick}
                          >
                            <CancleSVG />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="user-field-section">
                      <span className="category">Primary</span>
                      <div className="cate-one">
                        <div className="col-box">
                          <label>Firm Type</label>
                          <span>
                            <input
                              type="text"
                              value="Private Equity Firm (Investor)"
                              readOnly
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Year EST</label>
                          <span>
                            <input
                              type="text"
                              value="2020"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>Currency of fund managed</label>
                          <span>
                            <input
                              type="text"
                              value="USD"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>PE: Main Firm Strategy</label>
                          <span>
                            <input
                              type="text"
                              value="USD"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>AUM (CURR MN)</label>
                          <span>
                            <input
                              type="text"
                              value="170"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>AUM (USD MN)</label>
                          <span>
                            <input
                              type="text"
                              value="170"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                        <div className="col-box">
                          <label>AUM (EUR MN)</label>
                          <span>
                            <input
                              type="text"
                              value="150.2"
                              readOnly={!isProfileEditing}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Section */}
    </div>
  );
}

export default UserProfile;
