import React, { useEffect, useState } from "react";

const TableSort = ({ cols, data, className, hiddenField, hiddenValue, config = null }) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    const sortedItems = React.useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="col-12 mt-2 table-responsive  h-100 table-responsive">

            <table className={`table ${className}`}>
                <thead>
                    <tr>
                        {cols.map((headerItem, key) => (
                            <th className="tableFixHead" key={key} onClick={() => requestSort(headerItem.alterTitle.root ? headerItem.alterTitle : headerItem.alterTitle.replace(/\s+/g, ''))}>{headerItem.title}&nbsp;{(headerItem.alterTitle !== 'Action' && headerItem.alterTitle !== 'None' && headerItem.alterTitle !== 'SDG') && <i className={`fas fa-right-left fa-rotate-90 fa-sm`}></i>}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedItems && sortedItems.map((item, index) => (

                        hiddenField && hiddenValue ?
                            (item[hiddenField] !== hiddenValue &&
                                (<tr key={item._id} >
                                    {
                                        cols.map((col, key) => (
                                            <td>{col.render(item)}</td>
                                        ))
                                    }
                                </tr>))
                            :
                            <tr key={item._id} >
                                {
                                    cols.map((col, key) => (
                                        <td>{col.render(item)}</td>
                                    ))
                                }
                            </tr>
                    ))}
                    {
                        data && data.length <= 0 &&
                        <tr>
                            <td colSpan={cols.length}> <h6>No Data Found</h6></td>
                        </tr>
                    }
                </tbody>
            </table>

        </div >
    )
}
export default TableSort;