import { z } from 'zod';
export const orderSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dishId: z.string().min(1, "Please select a dish")
});
