import * as z from 'zod';
// prettier-ignore
export const tblUserAccessResultSchema = z.object({
    Login: z.string(),
    PlaceID: z.number().int(),
    tblPlaces: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblUserAccessResultType = z.infer<typeof tblUserAccessResultSchema>;
