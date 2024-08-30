import React, { useState } from 'react';
import treeData from './data';
import TableRow from '../../components/tree/TableRow';


const TreeView = () => {
    return (

        //   {treeData.map(rootNode => (
        //     <TreeNode key={rootNode.id} node={rootNode} />
        //   ))}
        <table className='table table-bordered'>
            <tr>
                <th>Assets Class</th>
                <th>% of Allocation</th>
                <th>Total AUM</th>
            </tr>
            {treeData.map(rootNode => (
                <TableRow rootNode={rootNode} />


            ))}

        </table>

    );
};
export default TreeView;