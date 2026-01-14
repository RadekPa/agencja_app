import * as z from 'zod';
export const tmpKursyXMLCreateResultSchema = z.object({
  Id: z.number().int(),
  XMLData: z.string().optional(),
  LoadedDateTime: z.date().optional()
});