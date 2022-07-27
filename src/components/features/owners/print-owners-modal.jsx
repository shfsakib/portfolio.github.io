import { Modal } from 'react-bootstrap';
import React, { Fragment, useRef } from 'react'
import TextField from '../../core/text-field';
import TextArea from '../../core/text-area';
import { Table } from '../../core/table';
import ReactToPrint, { PrintContextConsumer, useReactToPrint } from 'react-to-print';

const tableConstants = () => {
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
    ];
};
const PrintOwnerModal = ({ setModalShow, modalShow }) => {
    const componentRef = useRef();
    const modalClick = (e) => {
        if (e.target.className == "fade modal show") {
            setModalShow(!modalShow);
        }
    };

    return (
        <Fragment>
            <div onClick={(e) => modalClick(e)}>
                <Modal show={modalShow} size="xl" centered>
                    <Modal.Header className="p-0 border-0">
                        <div className="d-block w-100">
                            <div className="col-12 p-2 pe-3 text-right">
                                <span className="cursor-pointer" onClick={(e) => {
                                    setModalShow(!modalShow);
                                }}><i className="fas fa-times"></i></span>
                            </div>
                            <div className="col-12 p-2 text-right">
                                <ReactToPrint
                                    trigger={() => {
                                        return <button className='btn btn-dark'>Print</button>
                                    }}
                                    content={() => componentRef.current}
                                    documentTitle={'Own Details'}
                                    pageStyle={'print'}
                                />
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <Fragment>
                            <div className="row ownerDiv" id='ownerDiv' ref={componentRef}>
                                <div className="col-12 title">
                                    <h1 className="text-custom fw-bolder owner-title">Owner Details</h1>
                                </div>
                                <div className="col-12 mt-4">
                                    <Table
                                        isSerial={true}
                                        cols={tableConstants()}
                                        data={[{
                                            Name: 'Sakib Hossain', Address: 'Khatib para, Before Siddik Market, Bohaddarhat, Chandgaon-4212, Chittagong'
                                        }]}
                                        NoDataText={'No Owners Found'}
                                        className={'table-striped table-bordered table-hover'}
                                    />
                                </div>
                            </div>
                        </Fragment>
                    </Modal.Body>
                </Modal>
            </div>
        </Fragment>
    )
}

export default PrintOwnerModal