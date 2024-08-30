import DataTable from 'react-data-table-component';
import Accessibility from '../../components/table/Accessibility';
import CommnentSVG from '../../svgIcons/comment';
import EmailSVG from '../../svgIcons/email';
import CallSVG from '../../svgIcons/call';
import EditSVG from '../../svgIcons/Edit';
import TrashSVG from '../../svgIcons/Trash';
import TableFilter from '../../components/table/TableFilter';
import TableFilterSeach from '../../components/table/TableFilterSeach';
import { Button, Card, CardText, CardTitle, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import React, { useState } from 'react'
import HistroySVG from '../../svgIcons/Histroy';
import ErrorSVG from '../../svgIcons/Error';
import TableFilterSearchWithDate from '../../components/table/TableFilterSearchWithDate';
import DatePicker from "react-datepicker";

function LogsPage() {
    const columns = [
        {
            name: 'Date',
            selector: row => row.name,
            width: '15%'
        },
        {
            name: 'API',
            selector: row => row.date,
            width: '12%'
        },
        {
            name: 'Endpoint',
            selector: row => row.department,
            width: '10%'
        },
        {
            name: 'Supplier',
            selector: row => row.supplier,
        },
        {
            name: 'Request',
            selector: row => row.request,
        },
        {
            name: 'Response',
            selector: row => row.response,
            width: '10%'
        },
    ];

    const data = [
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },                                
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },
        {
            id: 1,
            name: '07/20/21',
            date: 'Benchamark',
            department: '/benchmark',
            supplier: 'SmartSpaces',
            request: 'IP:Path:Content:Request Time:',   
            response: 'error: message:',            
        },                                        
    ]
    // State for current active Tab 
    const [currentActiveTab, setCurrentActiveTab] = useState('1');

    // Toggle active state for Tab 
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    return (
        <div className="wrapper-box logs-wrap">
            <h1 className="component-name">Logs</h1>
            <div className="dashboard-wrapper">
                <div className='card'>
                    <div className='tab-selection'>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active:
                                                currentActiveTab === '1'
                                        })}
                                        onClick={() => { toggle('1'); }}
                                    ><HistroySVG />
                                        Historial Logs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            active:
                                                currentActiveTab === '2'
                                        })}
                                        onClick={() => { toggle('2'); }}
                                    > <ErrorSVG />
                                        Error Logs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={currentActiveTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <TableFilterSearchWithDate className={'mb-3'} />
                                            <DataTable
                                                columns={columns}
                                                data={data}
                                            />
                                            <TableFilter className={'mt-3'} />                                           
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h5>Same table will be come as Historial table</h5>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogsPage;