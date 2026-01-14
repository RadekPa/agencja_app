import * as z from 'zod';
// prettier-ignore
export const tblUserAccessInputSchema = z.object({
    Login: z.string(),
    PlaceID: z.number().int(),
    tblPlaces: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblUserAccessInputType = z.infer<typeof tblUserAccessInputSchema>;
