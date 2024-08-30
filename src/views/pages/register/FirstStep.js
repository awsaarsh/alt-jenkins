import { FormGroup, Input, Label } from "reactstrap";

function FirstStep({ formData, setFormData }) {
    return (
            <div className="common-box">
                <FormGroup tag="fieldset">
                    <legend>
                        I'm...
                    </legend>
                    <FormGroup check>
                        <Input
                            name="Investor"
                            type="radio"
                            value="Investor"
                            onChange={(e) => {
                                setFormData({ ...formData, female: e.target.value });
                            }}
                        />
                        {' '}
                        <Label check>
                        Investor / Limited Partner
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="Investor"
                            type="radio"
                            value="Investor"
                            defaultChecked
                            onChange={(e) => {
                                setFormData({ ...formData, female: e.target.value });
                            }}
                        />
                        {' '}
                        <Label check>
                        Fund manager / General Partner      
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>            
    )
}
export default FirstStep;   