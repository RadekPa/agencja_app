import * as z from 'zod';
// prettier-ignore
export const tmpKursyXMLResultSchema = z.object({
    Id: z.number().int(),
    XMLData: z.string().nullable(),
    LoadedDateTime: z.date().nullable()
}).strict();

export type tmpKursyXMLResultType = z.infer<typeof tmpKursyXMLResultSchema>;
