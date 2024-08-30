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
import Link from '../../assets/svg/link.svg';
import Mobile from '../../assets/svg/mobile-device-icons.svg';
import EditISVG from '../../svgIcons/EditIcon';
import ExportSVG from '../../svgIcons/Export';
import TaxSVG from '../../svgIcons/Tax';
import ViewSVG from '../../svgIcons/View';
import DownloadSVG from '../../svgIcons/Download';
import BusinesSVG from '../../svgIcons/BusinessLicence';

function EditDetail() {
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
                <div className='card'>
                    <div className='edit-detail'>
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
                </div>
                <div className='card tax-document-wrap'>
                    <ul className='tax-registration-name'>
                        <li className='icon'><TaxSVG /></li>
                        <li className='name'>Tax Registration Documents</li>
                        <li className='e-dtl'><a href='#'>ABC Corp.Pdf</a></li>
                    </ul>

                    <div className='edit-export-btn'>
                        <button className='common-btn view-btn'><ViewSVG />View</button>
                        <button className='common-btn download-btn'><DownloadSVG />Download</button>
                    </div>
                </div>

                <div className='card tax-document-wrap'>
                    <ul className='tax-registration-name'>
                        <li className='icon'><BusinesSVG /></li>
                        <li className='name'>Business License</li>
                        <li className='e-dtl'><a href='#'>ABC Corp License.pdf</a></li>
                    </ul>

                    <div className='edit-export-btn'>
                        <button className='common-btn view-btn'><ViewSVG />View</button>
                        <button className='common-btn download-btn'><DownloadSVG />Download</button>
                    </div>
                </div>

                <div className='column-btn-group'>
                    <button className='decline-btn btn'>Decline</button>
                    <button className='accept-btn btn'>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default EditDetail;