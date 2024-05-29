import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ onClose }) => {
  return (
    <>
      <div className="outlay" onClick={onClose}></div>
      <div className="modal">
        <h1>This is modal window</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          fermentum vitae augue vel suscipit. Vestibulum sollicitudin pulvinar
          odio, eget laoreet nisi bibendum ut. Quisque euismod ullamcorper eros,
          ut gravida ante. Vestibulum finibus sit amet erat eget aliquam. Donec
          rhoncus turpis sem, in finibus erat mollis non. Morbi semper semper
          imperdiet. Duis vitae lectus iaculis, vulputate risus ac, consequat
          lectus. Duis vitae sodales sem, ut lobortis ante. Suspendisse potenti.
          Sed quam neque, vulputate sit amet nisl ultrices, pretium tristique
          tortor. Duis eget lacus sit amet eros dictum fermentum id commodo
          magna. Vestibulum id ligula et nibh mollis posuere. Sed tincidunt, est
          eu commodo mattis, dolor enim iaculis metus, eget venenatis felis
          dolor at velit. Sed quis accumsan dui, sit amet pulvinar justo.
          Maecenas pretium dui sodales consequat sodales. In rutrum lorem et
          ullamcorper consectetur.
        </p>
        <IoMdCloseCircle
          className="btn-close-model"
          size={30}
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default Modal;
