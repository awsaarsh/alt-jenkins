import AddSVG from "../../svgIcons/Add";
import React, { useState } from 'react';
import CollpaseMenu from "./CollpaseMenu";
import CollpaseConfigure from "./CollpaseConfigure";
import BlackPenSVG from "../../svgIcons/BlackPen";
import { Card, CardBody } from "reactstrap";
import TreeView from "../benchmarking/TreeView";

function LiveChat() {
    return (
        <>
            <div className="chat-wrapper inner-container create-chart">
                <div className="add-component card">
                   <TreeView />

                   <div className="center-box">
                    <p>Define Level Of Your Hierarchy</p>
                    <button className='add-attribute'>Save</button>
                   </div>
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