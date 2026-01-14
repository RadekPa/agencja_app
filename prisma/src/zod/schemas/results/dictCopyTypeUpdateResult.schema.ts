import * as z from 'zod';
export const dictCopyTypeUpdateResultSchema = z.nullable(z.object({
  CopyTypeID: z.number().int(),
  CopyType: z.string().optional(),
  tblSubmissions: z.array(z.unknown()),
  tblTitEvents: z.array(z.unknown())
}));