import React, { useState } from "react";
import { Modal } from "qds";
import BottomSheet from "./BottomSheet";
import { css } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isSheet, setIsSheet] = useState(false);
  const notify = () => toast("Wow so easy!");

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <button onClick={() => setIsModal(true)}>Open Modal</button>
      <button onClick={() => setIsSheet(true)}>Open BottomSheet</button>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <Modal isOpen={isModal} onClose={() => setIsModal(false)} xButton={true}>
        <div>
          <h1>Hello World</h1>
          <h3>hihihi</h3>
        </div>
      </Modal>
      <BottomSheet
        isOpen={isSheet}
        onClose={() => setIsSheet(false)}
        xButton={true}
        ratio={80}
      >
        <div>
          <h1>Hello World</h1>
          <h3>hihihi</h3>
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;
