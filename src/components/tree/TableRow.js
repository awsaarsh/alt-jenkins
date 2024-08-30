import React, { useState } from 'react';
import FolderSVG from '../../svgIcons/Folder';
import SubRow from './SubRow';
import DownArrowSVG from '../../svgIcons/DownArrow';
import GrayDownArrowSVG from '../../svgIcons/GrayDownArrow';

const TableRow = (props) => {
    const { rootNode } = props;
    const [show, setShow] = useState(false);
    return (


        <>
            <tr>
                <td onClick={() => setShow(!show)}>
                <GrayDownArrowSVG /><FolderSVG />{rootNode.name}
                </td>
                <td>GO%</td>
                <td>51200 M</td>

            </tr>
            {
                show &&

                rootNode.children.length > 0 &&
                rootNode.children.map(child => (
                   <SubRow child={child}/>

                ))
            }
        </>




    );
};
export default TableRow;