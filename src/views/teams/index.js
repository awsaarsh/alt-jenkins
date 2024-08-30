import { Modal, ModalBody } from "reactstrap";
import TreeView from "../benchmarking/TreeView";
import { useState } from "react";

export default function Teams() {
    const [modal, setModal] = useState(true);
    const toggle = () => setModal(!modal);
    return (
        <div>      
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalBody>
                    <TreeView />
                </ModalBody>
            </Modal>
        </div>
    );
}