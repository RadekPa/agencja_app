import * as z from 'zod';
export const tblUserParamsDeleteResultSchema = z.nullable(z.object({
  Login: z.string(),
  Name: z.string(),
  Value: z.string(),
  tblUsers: z.unknown()
}));