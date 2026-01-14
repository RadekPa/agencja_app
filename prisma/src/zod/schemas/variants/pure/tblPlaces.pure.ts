import * as z from 'zod';
// prettier-ignore
export const tblPlacesModelSchema = z.object({
    PlaceID: z.number().int(),
    PlaceDesc: z.string(),
    tblUserAccess: z.array(z.unknown())
}).strict();

export type tblPlacesPureType = z.infer<typeof tblPlacesModelSchema>;
