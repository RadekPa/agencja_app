import * as z from 'zod';
export const dictArticlesDeleteManyResultSchema = z.object({
  count: z.number()
});