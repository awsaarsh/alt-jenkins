import SearchSVG from "../../svgIcons/Search";

function TableFilterSeach(props) {  
    return (
       
            <div className={`${"table-filter-top d-flex justify-content-between align-items-center"} ${props.className}`}>
                <div className='d-flex align-items-center'>Display <select className="form-select">
                    <option value="1" selected>5</option>
                    <option value="2">10</option>
                    <option value="3">20</option>
                </select> products</div>
                <div className='search-box'>
                    <span className='icon'><SearchSVG /></span>
                    <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </div>
    );
}

export default TableFilterSeach;