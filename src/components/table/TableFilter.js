import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function TableFilter(props) {
   

    return (
       
            <div className={`${"table-filter-top d-flex justify-content-between align-items-center"} ${props.className}`}>
                <div className='d-flex align-items-center'>Display <select className="form-select">
                    <option value="1" selected>5</option>
                    <option value="2">10</option>
                    <option value="3">20</option>
                </select> products</div>
                <Pagination>
                   
                    <PaginationItem>
                        <PaginationLink
                            href="/"
                            previous
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            ...
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">
                            52
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="/"
                            next
                        />
                    </PaginationItem>
                    
                </Pagination>
            </div>
       

    );
}

export default TableFilter;