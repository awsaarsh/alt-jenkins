import AddSVG from "../../svgIcons/Add";
import React, { useState } from 'react';
import CollpaseMenu from "./CollpaseMenu";
import CollpaseConfigure from "./CollpaseConfigure";
import BlackPenSVG from "../../svgIcons/BlackPen";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function LiveChat() {
    return (
        <>
            <div className="chat-wrapper inner-container">
                <div className="add-component card">
                    <h3>Add Components here to create Hierarchy</h3>
                    <Link to='/choose-hierarchy/create-chart' className='add-attribute'><AddSVG /> Add Attribute</Link>
                </div>
                <div className="add-filter add-categories">
                    <h3 className="question-label">Add</h3>
                    <CollpaseMenu />
                    <CollpaseConfigure />
                    <Card>
                        <CardBody>
                            <div className="attribute-Name">
                                <label><BlackPenSVG /> Attribute Name</label>
                                <input type="text" placeholder="Attribute" />
                            </div>
                        </CardBody>
                    </Card>
                    <button className='add-attribute'>Apply Filter</button>
                </div>
            </div>
        </>
    )
}
export default LiveChat;