import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function DishModal({ dish, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
        tabIndex="-1"
        ref={modalRef}
      >
        <h2 id="dish-modal-title">{dish.name}</h2>

        <p>{dish.description}</p>

        <p>{dish.price} ETB</p>

        {dish.spicy && <p>🌶️ Spicy</p>}

        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body,
  );
}

export default DishModal;
