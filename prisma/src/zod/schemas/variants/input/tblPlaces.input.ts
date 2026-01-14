import * as z from 'zod';
// prettier-ignore
export const tblPlacesInputSchema = z.object({
    PlaceID: z.number().int(),
    PlaceDesc: z.string(),
    tblUserAccess: z.array(z.unknown())
}).strict();

export type tblPlacesInputType = z.infer<typeof tblPlacesInputSchema>;
