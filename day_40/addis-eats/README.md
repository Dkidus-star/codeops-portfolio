## API Endpoints

| Endpoint           | Method | Status Codes | Description                                                           |
| :----------------- | :----- | :----------- | :-------------------------------------------------------------------- |
| `/api/dishes`      | `GET`  | 200          | Returns the full menu as JSON.                                        |
| `/api/dishes/[id]` | `GET`  | 200, 404     | Returns a specific dish, or a standard 404 error shape if unknown.    |
| `/api/orders`      | `POST` | 201, 422     | Creates a new order; returns 422 with `fieldErrors` on invalid input. |
