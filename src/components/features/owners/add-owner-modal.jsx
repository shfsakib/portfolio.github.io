import { Modal } from 'react-bootstrap';
import React, { Fragment } from 'react'
import TextField from '../../core/text-field';
import TextArea from '../../core/text-area';

const AddOwnerModal = ({ setModalShow, modalShow }) => {
    const modalClick = (e) => {
        if (e.target.className == "fade modal show") {
            setModalShow(!modalShow);
        }
    };
    return (
        <Fragment>
            <div onClick={(e) => modalClick(e)}>
                <Modal show={modalShow} size="md" centered>
                    <Modal.Header className="p-0 border-0">
                        <div className="col-6 p-3 ps-4">
                            <h4>Add Owner</h4>
                        </div>
                        <div className="col-6 p-2 pt-0 pe-3 text-right">
                            <span className="cursor-pointer" onClick={(e) => {
                                setModalShow(!modalShow);
                            }}><i className="fas fa-times"></i></span>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <Fragment>
                            <div className="row">
                                <TextField
                                    label={'Owner Name'}
                                    name={'Name'}
                                    placeholder={'e.g. John Doe'}
                                    className={'mb-2'}
                                />
                                <TextArea
                                    label={'Address'}
                                    name={'Address'}
                                    placeholder={'Write full address'}
                                    style={{ resize: 'none' }}
                                />
                                <div className="col-12 mt-3">
                                    <button className="btn btn-primary w-100">Add</button>
                                </div>
                            </div>
                        </Fragment>
                    </Modal.Body>
                </Modal>
            </div>
        </Fragment>
    )
}

export default AddOwnerModal