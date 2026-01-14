import * as z from 'zod';
export const tmpKursyXMLDeleteResultSchema = z.nullable(z.object({
  Id: z.number().int(),
  XMLData: z.string().optional(),
  LoadedDateTime: z.date().optional()
}));