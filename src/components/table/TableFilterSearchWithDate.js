import SearchSVG from "../../svgIcons/Search";
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

function TableFilterSearchWithDate(props) {  
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
       
            <div className={`${"table-filter-top d-flex justify-content-between align-items-center"} ${props.className}`}>
                <div className='d-flex align-items-center couple-of-search'>
                   <div className="filter-date">
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        isClearable={true}
                    />                    
                   </div>
                   <div className="selection-box">
                    <select className="form-select">
                            <option value="1" selected>Endpoint</option>
                            <option value="2">10</option>
                            <option value="3">20</option>
                        </select>                    
                   </div>
                   <div className="selection-box">
                    <select className="form-select">
                            <option value="1" selected>Supplier</option>
                            <option value="2">10</option>
                            <option value="3">20</option>
                        </select>                    
                   </div>
                </div>
                <div className='search-box'>
                    <span className='icon'><SearchSVG /></span>
                    <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
    );
}

export default TableFilterSearchWithDate;