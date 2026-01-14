import * as z from 'zod';
export const tblPlacesDeleteManyResultSchema = z.object({
  count: z.number()
});