import * as z from 'zod';
export const tblUserParamsCreateResultSchema = z.object({
  Login: z.string(),
  Name: z.string(),
  Value: z.string(),
  tblUsers: z.unknown()
});