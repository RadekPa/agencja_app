import * as z from 'zod';
// prettier-ignore
export const tmpKursyXMLModelSchema = z.object({
    Id: z.number().int(),
    XMLData: z.string().nullable(),
    LoadedDateTime: z.date().nullable()
}).strict();

export type tmpKursyXMLPureType = z.infer<typeof tmpKursyXMLModelSchema>;
