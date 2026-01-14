import * as z from 'zod';
// prettier-ignore
export const tblPlacesResultSchema = z.object({
    PlaceID: z.number().int(),
    PlaceDesc: z.string(),
    tblUserAccess: z.array(z.unknown())
}).strict();

export type tblPlacesResultType = z.infer<typeof tblPlacesResultSchema>;
