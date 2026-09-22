import { Link } from "react-router-dom";
import { Profiler, memo, useRef, useState } from "react";

import useCartStore from "./store/cartStore";
import DishModal from "./DishModal";

function onDishRender(id, phase, actualDuration) {
  console.log(`${id} ${phase}: ${actualDuration.toFixed(2)}ms`);
}

function Dish({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerRef = useRef(null);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);

    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }

  return (
    <Profiler id={`Dish-${dish.id}`} onRender={onDishRender}>
      <article>
        <h3>{dish.name}</h3>

        <p>{dish.price} ETB</p>

        {dish.spicy && <p>🌶️ Spicy</p>}

        <Link to={`/menu/${dish.id}`}>View Dish</Link>

        <br />

        <button onClick={() => addItem(dish)}>Add to Cart</button>

        <button ref={triggerRef} onClick={openModal}>
          Quick View
        </button>

        {isModalOpen && <DishModal dish={dish} onClose={closeModal} />}
      </article>
    </Profiler>
  );
}

export default memo(Dish);
