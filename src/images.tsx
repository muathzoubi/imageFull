import { useState } from 'react';
import ModalImage from 'react-modal-image';

export const ImageModal = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="modal" style={{ display: show ? '' : 'none' }}>
        <div id="container2">
          Images
          <div id="flip">
            <div>
              <div>Full page</div>
            </div>
            <div>
              <div>Image filters</div>
            </div>
            <div>
              <div>Save Image</div>
            </div>
          </div>
          AweSoMe!
        </div>
        <div>
          <button
            style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              right: '40%',
              fontSize: 12,
            }}
            onClick={() => setShow(false)}
          >
            Get Started
          </button>
          <p>This app created by Muath alzoubi</p>
        </div>
      </div>
    </>
  );
};
const ImageLists = (props: { images: any }) => {
  return (
    <ul>
      {props.images.map((i: any) => (
        <li key={i.id}>
          <ModalImage small={i.src} large={i.src} />;
        </li>
      ))}
    </ul>
  );
};
export default ImageLists;
