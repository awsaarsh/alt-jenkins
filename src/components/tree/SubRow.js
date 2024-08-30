import React, { useState } from 'react';
import FolderSVG from '../../svgIcons/Folder';
import FileSVG from '../../svgIcons/File';

const SubRow = (props) => {
    const {child} = props;
    const [show, setShow] =  useState(false);
    return (

        
                            <>
                                <tr>
                                    <td style={{ paddingLeft: 20 }} 
                                    
                                    onClick={
                                        ()=> child.children.length > 0 && setShow(!show)
                                    }
                                    
                                    >
                                        {
                                            child.children.length > 0 ? <FolderSVG /> : <FileSVG />
                                        }
                                        {child.name}
                                    </td>
                                    <td>880 M</td>
                                    <td>44%</td>
                                </tr>
                                {
                                   show && child.children.length > 0 &&
                                    child.children.map(childChild => (
                                        <tr>
                                            <td style={{ paddingLeft: 40 }}>
                                                {
                                                    childChild.children.length > 0 ? <FolderSVG /> : <FileSVG />
                                                }
                                                {childChild.name}
                                            </td>
                                            <td>880 M</td>
                                            <td>44%</td>
                                        </tr>
                                    ))
                                }
                            </>

                    

          

    );
};
export default SubRow;