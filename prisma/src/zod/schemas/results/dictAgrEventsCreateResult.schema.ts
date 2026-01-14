import * as z from 'zod';
export const dictAgrEventsCreateResultSchema = z.object({
  AgrEventCode: z.number().int(),
  AgrEventDesc: z.string(),
  Status: z.string().optional(),
  tblAgrEvents: z.array(z.unknown())
});