import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import DownArrowSVG from "../../svgIcons/DownArrow";
import TreeViewSVG from '../../svgIcons/TreeView';
import { Link } from 'react-router-dom';

function CollpaseConfigure(args) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
            <div className="collapse-menu">
                <label onClick={toggle}>Configure <DownArrowSVG /> </label>
                <Collapse isOpen={isOpen} {...args}>
                    <Card>
                        <CardBody>
                            <ul className='shape-drap'>
                                <li><Link to=''><span><TreeViewSVG /> </span>Equity</Link></li>
                                <li><Link to=''><span><TreeViewSVG /></span>Fixed Incomes</Link></li>
                                <li><Link to=''><span><TreeViewSVG /></span>Hedge Funds</Link></li>
                                <li><Link to=''><span><TreeViewSVG /></span>Alternatives</Link></li>
                            </ul>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
    )
}

export default CollpaseConfigure;