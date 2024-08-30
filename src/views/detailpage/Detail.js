import DataTable from 'react-data-table-component';
import Accessibility from '../../components/table/Accessibility';
import CommnentSVG from '../../svgIcons/comment';
import EmailSVG from '../../svgIcons/email';
import CallSVG from '../../svgIcons/call';
import EditSVG from '../../svgIcons/Edit';
import TrashSVG from '../../svgIcons/Trash';
import TableFilter from '../../components/table/TableFilter';
import TableFilterSeach from '../../components/table/TableFilterSeach';
import company from '../../assets/svg/clarity_building-line.png';
import mNumber from '../../assets/svg/akar-icons_mobile-device.png';
import email from '../../assets/svg/ic_twotone-alternate-email.png';
import address from '../../assets/svg/akar-icons_location.png';
import { Col, FormGroup, Input, Label } from 'reactstrap';
import Mobile from '../../assets/svg/mobile-device-icons.svg';
import EditISVG from '../../svgIcons/EditIcon';
import ExportSVG from '../../svgIcons/Export';
import { Link } from 'react-router-dom';

function Detail() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            width: '15%'
        },
        {
            name: 'Joined Date',
            selector: row => row.date,
            width: '12%'
        },
        {
            name: 'Department',
            selector: row => row.department,
            width: '10%'
        },
        {
            name: 'Registred Email',
            selector: row => row.email,
        },
        {
            name: 'Accessibility',
            selector: row => <div>
                <Accessibility selected={row.accessibility} />
            </div>,
        },
        {
            name: 'Contact',
            selector: row => <div className='contact-action'>
                <a href="#"><CommnentSVG /></a>
                <a href="#"><EmailSVG /></a>
                <a href="#"><CallSVG /></a>
            </div>,
            width: '12%'
        },
        {
            name: 'Action',
            selector: row => <div className='contact-action'>
                <a href="#"><EditSVG /></a>
                <a href="#"><TrashSVG /></a>
            </div>,
            width: '10%'
        },
    ];

    const data = [
        {
            id: 1,
            name: 'Mathew Johnson',
            date: '07/20/2023',
            department: 'Executive',
            email: 'mathew@gmail.com',
            accessibility: 'View only',


        },
        {
            id: 2,
            name: 'Brian Scott',
            date: '07/20/2023',
            department: 'Executive',
            email: 'brian@gmail.com',
            accessibility: 'Edit',
        },
        {
            id: 3,
            name: 'Nathan Wood',
            date: '07/20/2023',
            department: 'Manager',
            email: 'nathan@gmail.com',
            accessibility: 'All',
        },
        {
            id: 4,
            name: 'Elizabeth Jones',
            date: '07/20/2023',
            department: 'Employee',
            email: 'elizabeth@gmail.com',
            accessibility: 'All',
        },
        {
            id: 5,
            name: 'Mathew Johnson',
            date: '07/20/2023',
            department: 'Executive',
            email: 'mathew@gmail.com',
            accessibility: 'View only',


        },
        {
            id: 6,
            name: 'Brian Scott',
            date: '07/20/2023',
            department: 'Executive',
            email: 'brian@gmail.com',
            accessibility: 'Edit',
        },
        {
            id: 7,
            name: 'Nathan Wood',
            date: '07/20/2023',
            department: 'Manager',
            email: 'nathan@gmail.com',
            accessibility: 'All',
        },
        {
            id: 8,
            name: 'Elizabeth Jones',
            date: '07/20/2023',
            department: 'Employee',
            email: 'elizabeth@gmail.com',
            accessibility: 'All',
        },

    ]
    return (
        <div className="wrapper-box logs-wrap">
            <h1 className="component-name">Smooze Shift / ABC Corp</h1>
            <div className="dashboard-wrapper flex-column">
                <div className='card flex-row'>
                    <div className='disable-detail'>
                        <div className="grid-container">
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={company} alt="company" /></li>
                                    <li className='name'>Company</li>
                                    <li className='e-dtl'>ABC Corp</li>
                                </ul>
                            </div>
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={address} alt="company" /></li>
                                    <li className='name'>Address</li>
                                    <li className='e-dtl'>San Francisco</li>
                                </ul>
                            </div>
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={mNumber} alt="company" /></li>
                                    <li className='name'>Phone Number</li>
                                    <li className='e-dtl'>+1 (609) 972-22-22 </li>
                                </ul>
                            </div>
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={Mobile} alt="company" /></li>
                                    <li className='name'>Phone Number</li>
                                    <li className='e-dtl'>+1 (609) 972-22-22 </li>
                                </ul>
                            </div>
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={email} alt="company" /></li>
                                    <li className='name'>Email</li>
                                    <li className='e-dtl'>janesaymour@gmail.com</li>
                                </ul>
                            </div>
                            <div className="grid-item">
                                <ul>
                                    <li className='icon'><img src={Link} alt="company" /></li>
                                    <li className='name'>Asset Details</li>
                                    <li className='e-dtl'><a href='#' className='link'>Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='btn-group-section'>
                        <div className='status-dropdown'>
                            <Label
                            >
                                Status
                            </Label>
                            <Input
                                id="IndustryType"
                                name="IndustryType"
                                type="select"
                            >
                                <option>
                                    Active
                                </option>
                                <option>
                                    Pending
                                </option>
                                <option>
                                    Rejected
                                </option>
                            </Input>
                        </div>
                        <div className='edit-export-btn'>
                        <Link to="/detail/edit" className='common-btn edit-btn'><EditISVG />Edit</Link>
                        <Link to="/detail/edit" className='common-btn export-btn'><ExportSVG />Export</Link>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='tab-selection'>
                        <TableFilterSeach className={'mb-3'} />
                        <DataTable
                            columns={columns}
                            data={data}
                        />
                        <TableFilter className={'mt-3'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;