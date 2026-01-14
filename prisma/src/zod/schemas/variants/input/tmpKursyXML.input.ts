import * as z from 'zod';
// prettier-ignore
export const tmpKursyXMLInputSchema = z.object({
    Id: z.number().int(),
    XMLData: z.string().optional().nullable(),
    LoadedDateTime: z.date().optional().nullable()
}).strict();

export type tmpKursyXMLInputType = z.infer<typeof tmpKursyXMLInputSchema>;
