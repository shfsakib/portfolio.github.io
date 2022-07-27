import React from "react";

export const TableRowEvent = ({ cols, data, className, event, config = null }) => {
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
        <div className="table-responsive">
            <table className={`table ${className}`}>
                <thead>
                    <tr>
                        {cols.map((headerItem, index) => (
                            <th className="tableFixHead" key={index} onClick={() => requestSort(headerItem.title.replace(/\s+/g, ''))}>{headerItem.title}&nbsp;{(headerItem.title.trim() !== 'Action') ? (headerItem.title.trim() !== 'SDG') && <i className={`fas fa-right-left fa-rotate-90 fa-sm`}></i> : <i className={`fas fa-right-left fa-rotate-90 fa-sm`}></i>}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedItems && sortedItems.map((item, index) => (
                        <tr key={index} onClick={() => event(item)}>
                            {cols.map((col, key) => (
                                <td key={key}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                    {
                        sortedItems && sortedItems.length <= 0 &&
                        <tr>
                            <td colSpan={cols.length}> <h6>No Data Found</h6></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    )
}
