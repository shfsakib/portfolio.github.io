import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from '../core/table';
import AddOwnerModal from '../features/owners/add-owner-modal';
import EditOwnerModal from '../features/owners/edit-owner-modal';
import PrintOwnerModal from '../features/owners/print-owners-modal';
const tableConstants = (handleEdit, handleRemove) => {
    return [
        {
            title: 'Name',
            alterTitle: 'Name',
            render: (rowData) => {
                return <span>{rowData.Name}</span>;
            },
        },
        {
            title: 'Address',
            alterTitle: 'Address',
            render: (rowData) => {
                return <span>{rowData.Address}</span>;
            },
        },
        {
            title: 'Action',
            render: (rowData) => {
                return (
                    <Fragment>
                        <div className="d-flex">
                            <button className='btn btn-primary mr-2 mb-2 ms-1' onClick={() => handleEdit(rowData)} title='Edit'><i className="fas fa-edit"></i></button>
                            <button className='btn btn-danger mr-2 mb-2 ms-1' onClick={() => handleRemove(rowData)} title='Remove'><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </Fragment>
                );
            },
        },
    ];
};
const Owners = () => {
    const [modalShow, setModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [printModalShow, setPrintModalShow] = useState(false);
    const handleEdit = (e) => {
        setEditModalShow(!editModalShow);
    }
    const handleRemove = () => {

    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-12">
                    <h3>Owners</h3>
                    <hr />
                </div>
                <div className="col-6 text-left">
                    <button className='btn btn-primary' onClick={() => setModalShow(!modalShow)}>Add Owner</button>
                </div>
                <div className="col-6 text-right">
                    <button className='btn btn-dark' onClick={() => setPrintModalShow(!printModalShow)}>Print</button>
                </div>
                <div className="col-12 mt-4">
                    <Table
                        cols={tableConstants(handleEdit, handleRemove)}
                        data={[{
                            Name: 'Sakib Hossain', Address: 'Khatib para, Before Siddik Market, Bohaddarhat, Chandgaon-4212, Chittagong'
                        }]}
                        NoDataText={'No Owners Found'}
                        className={'table-striped table-bordered table-hover'}
                    />
                </div>
            </div>
            <AddOwnerModal
                modalShow={modalShow}
                setModalShow={setModalShow}
            />
            <EditOwnerModal
                modalShow={editModalShow}
                setModalShow={setEditModalShow}
            />
            <PrintOwnerModal
                modalShow={printModalShow}
                setModalShow={setPrintModalShow}
            />
        </Fragment>
    )
}

export default Owners