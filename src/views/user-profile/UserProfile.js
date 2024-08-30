import { useState } from "react";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import profileAvatar from "../../assets/man.png";
import verified from "../../assets/verified.png";
import EditISVG from "../../svgIcons/EditIcon";
import CancleSVG from "../../svgIcons/Cancel";
import FileSVG from "../../svgIcons/File";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="wrapper-box">
      <div className="user-profile-wrapper">
        <div className="col-sm-12">
          <div className="head-title">
            <h2>User Profile</h2>
            <p>Manage your details, view your tier status.</p>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="user-profile-avatar">
                <figure>
                  <img src={profileAvatar} alt="" />
                </figure>
                <h4>Jane Eyre</h4>
                <span>
                  +9426283050 <img src={verified} alt="" />
                </span>
              </div>
            </div>
            <div className="col-sm-9">
              <div
                className={`general-information ${
                  isEditing ? "edit-section" : ""
                }`}
              >
                <div class="col-sm-12 d-flex flex-row justify-content-between align-items-center mb-3 mb-sm-4 w-100">
                  <h3>General information</h3>

                  <span className="d-flex flex-row justify-content-between align-items-center gap-2">
                    <div className="action-icons">
                      {!isEditing && (
                        <div
                          className="edit-btn"
                          title="Edit"
                          onClick={handleEditClick}
                        >
                          <EditISVG />
                        </div>
                      )}
                      {isEditing && (
                        <div
                          className="save-btn"
                          title="Save"
                          onClick={handleSaveClick}
                        >
                          <FileSVG />
                        </div>
                      )}
                      {isEditing && (
                        <div
                          className="can-btn"
                          title="Cancel"
                          onClick={handleCancelClick}
                        >
                          <CancleSVG />
                        </div>
                      )}
                    </div>
                  </span>
                </div>
                <div className="col-sm-12">
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input
                          id="firstname"
                          name="lastname"
                          placeholder="Enter First Name"
                          type="text"
                          value="Jane"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Last Name</Label>
                        <Input
                          id="lastname"
                          name="lastname"
                          placeholder="Enter Last Name"
                          type="text"
                          value="Eyre"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          id="companyName"
                          name="CompanyName"
                          placeholder="Enter email"
                          type="text"
                          value="Jane@gmail.com"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Job Title</Label>
                        <Input
                          id="job-title"
                          name="jobtitle"
                          placeholder="Enter Job title"
                          type="text"
                          value="Senior consultant"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Telephone</Label>
                        <Input
                          id="telephone"
                          name="telepone"
                          placeholder="Enter number"
                          type="text"
                          value="9426283050"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">City</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Enter city"
                          type="text"
                          value="Torento"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          placeholder="Enter Country"
                          type="text"
                          value="Canada"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Zip code</Label>
                        <Input
                          id="zipcode"
                          name="zipcode"
                          placeholder="Enter zipcode"
                          type="text"
                          value="000123"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="examplePassword">Linkedin URL</Label>
                        <Input
                          id="url"
                          name="url"
                          placeholder="Enter Linkedin URL"
                          type="text"
                          value="https://www.linkedin.com/mynetwork/"
                          readOnly={!isEditing}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col md={12}>
                      <button className="updat-btn">Update</button>
                    </Col> */}
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
