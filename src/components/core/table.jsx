import React from "react";

export const Table = ({ cols, data, className, isDark, id, NoDataText, isSerial }) => {

    return (
        <div className="table-responsive">
            <table className={`table ${className}`}>
                <thead>
                    <tr>
                        {
                            isSerial &&
                            <th className={`tableFixHead`}>Serial</th>
                        }
                        {cols.map((headerItem, index) => (
                            <th className={`tableFixHead ${headerItem.class && headerItem.class}`} key={index}>{headerItem.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={index}>
                            {isSerial &&
                                <td>{index + 1}</td>}
                            {cols.map((col, key) => (
                                <td key={key}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                    {
                        data && data.length <= 0 &&
                        <tr>
                            <td colSpan={isSerial ? cols.length + 1 : cols.length}> <h6>{NoDataText ? NoDataText : 'No Data Found'}</h6></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    )
} 