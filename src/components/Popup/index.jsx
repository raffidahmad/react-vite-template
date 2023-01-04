import Modal from 'react-bootstrap/Modal';
function CenteredModal(props) {
  return (
    <Modal
      size="lg"
      centered
      style={{ padding: '10px' }}
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton />
      {props.children}
    </Modal>
  );
}

function Popup(props) {
  return (
    <>
      <CenteredModal
        show={props.show}
        onHide={() => props.setShow(false)}
        children={props.children}
      />
    </>
  );
}

export default Popup;