import * as z from 'zod';
// prettier-ignore
export const tblUserAccessModelSchema = z.object({
    Login: z.string(),
    PlaceID: z.number().int(),
    tblPlaces: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblUserAccessPureType = z.infer<typeof tblUserAccessModelSchema>;
