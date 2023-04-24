import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsModal(true)}>Open Modal</button>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)} xButton={true}>
        <div>
          <h1>Hello World</h1>
          <h3>hihihi</h3>
        </div>
      </Modal>
    </div>
  );
}

export default App;
