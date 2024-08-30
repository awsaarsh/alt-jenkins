import DataTable from 'react-data-table-component';
import Accessibility from '../../components/table/Accessibility';
import CommnentSVG from '../../svgIcons/comment';
import EmailSVG from '../../svgIcons/email';
import CallSVG from '../../svgIcons/call';
import EditSVG from '../../svgIcons/Edit';
import TrashSVG from '../../svgIcons/Trash';
import TableFilter from '../../components/table/TableFilter';
import TableFilterSeach from '../../components/table/TableFilterSeach';
import CustomDropdown from '../../components/table/CustomDropdown';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import CircleDeleteSVG from '../../svgIcons/CircleDelete';
import CircleEditSVG from '../../svgIcons/CircleEdit';

function OnBoarding() {
    const columns = [
        {
            name: <Input type="checkbox" />,
            selector: row => <div className='select-item'>
                <Input type="checkbox" />
            </div>,
            width: '100px'
        },
        {
            name: 'Company Name',
            selector: row => <div className='name1'>
                <Link to="/detail">{row.department}</Link>
            </div>,
            width: '15%'
        },
        {
            name: 'Requested Date',
            selector: row => row.date,
            width: '12%'
        },
        {
            name: 'Assign to',
            selector: row => <div>
                <CustomDropdown selected={row.customDropdown} />
            </div>,
        }, 
        {
            name: 'Status',
            selector: row => <div>
                <Accessibility selected={row.accessibility} />
            </div>,
        },
        {
            name: 'Updated Date',
            selector: row => row.date,
            width: '12%'
        },
        {
            name: 'Decline',
            selector: row => <div className='contact-action'>
                <Link href="#"><CircleEditSVG /></Link>
            </div>,
            width: '100px'
        },
        {
            name: 'Accept',
            selector: row => <div className='contact-action'>
                <Link to="/detail/edit"><CircleDeleteSVG /></Link>
            </div>,
            width: '100px'
        },
    ];

    const data = [
        {
            id: 1,
            name: 'Mathew Johnson',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'mathew@gmail.com',
            accessibility: 'View only',
            customDropdown: 'Ravi',        
        },
        {
            id: 2,
            name: 'Brian Scott',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'brian@gmail.com',
            accessibility: 'Edit',
            customDropdown: 'Ravi',
        },
        {
            id: 3,
            name: 'Nathan Wood',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'nathan@gmail.com',
            accessibility: 'All',
            customDropdown: 'Ravi',
        },
        {
            id: 4,
            name: 'Elizabeth Jones',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'elizabeth@gmail.com',
            accessibility: 'All',
            customDropdown: 'Ravi',
        },
        {
            id: 5,
            name: 'Mathew Johnson',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'mathew@gmail.com',
            accessibility: 'View only',
            customDropdown: 'Ravi',


        },
        {
            id: 6,
            name: 'Brian Scott',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'brian@gmail.com',
            accessibility: 'Edit',
            customDropdown: 'Ravi',
        },
        {
            id: 7,
            name: 'Nathan Wood',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'nathan@gmail.com',
            accessibility: 'All',
            customDropdown: 'Ravi',
        },
        {
            id: 8,
            name: 'Elizabeth Jones',
            date: '07/20/2023',
            department: 'ABC Corp',
            email: 'elizabeth@gmail.com',
            accessibility: 'All',
            customDropdown: 'Ravi',
        },

    ]
    return (
        <div className="wrapper-box logs-wrap">
            <h1 className="component-name">Onboarding Requests</h1>
        <div className='card'>
            <TableFilterSeach className={'mb-3'} />
            <DataTable
                columns={columns}
                data={data}
            />
            <TableFilter className={'mt-3'} />
        </div>
        </div>
    );
}

export default OnBoarding;