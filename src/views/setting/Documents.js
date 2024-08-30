import FileUploaders from "../../components/fileuploader/FileUploaders";
import view from '../../assets/svg/view.svg';
import Delete from '../../assets/svg/trash.svg';
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

function Documents() {
  return (
    <div className="user-wrapper-box card">
      <div className="heading-name">
        <label>Company Deatails</label>
      </div>
      <div className="basic-detail file-uploade-wrap">
        <div className="saperate-section">
          <label className="heading">Certification of Incorporation</label>
          <div className="upload-section">
              <div className="drag-section">
                <FileUploaders />
              </div> 
              <div className="file-action">
                <a href="#">
                <img src={view} alt="google" width={16} height={21} />                                  
                </a>  
                <a href="#">
                <img src={Delete} alt="google" width={16} height={21} />                                        
                </a>              
              </div>
          </div>
        </div>        

        <div className="saperate-section">
          <label className="heading">Business License</label>
          <div className="upload-section">
              <div className="drag-section">
                <FileUploaders />
              </div> 
              <div className="file-action">
                <a href="#">
                <img src={view} alt="google" width={16} height={21} />                                  
                </a>  
                <a href="#">
                <img src={Delete} alt="google" width={16} height={21} />                                        
                </a>              
              </div>
          </div>
        </div> 

        <div className="saperate-section">
          <label className="heading">Tax Registration Document</label>
          <div className="upload-section">
              <div className="drag-section">
                <FileUploaders />
              </div> 
              <div className="file-action">
                <a href="#">
                <img src={view} alt="google" width={16} height={21} />                                  
                </a>  
                <a href="#">
                <img src={Delete} alt="google" width={16} height={21} />                                        
                </a>              
              </div>
          </div>
        </div>
        <div className="saperate-section">
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">
                Proof of Identity for Authorized Representative
              </Label>
              <Input
                id="IndustryType"
                name="IndustryType"
                type="select"
              >
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
              </Input>
            </FormGroup>
          </Col>
          <div className="upload-section">
              <div className="drag-section">
                <FileUploaders />
              </div> 
              <div className="file-action">
                <a href="#">
                <img src={view} alt="google" width={16} height={21} />                                  
                </a>  
                <a href="#">
                <img src={Delete} alt="google" width={16} height={21} />                                        
                </a>              
              </div>
          </div>

          <FormGroup className="passowrd-regex" column>
                  <button className="save-change-btn">Save changes</button>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Documents;