import * as z from 'zod';
// prettier-ignore
export const tblUserParamsResultSchema = z.object({
    Login: z.string(),
    Name: z.string(),
    Value: z.string(),
    tblUsers: z.unknown()
}).strict();

export type tblUserParamsResultType = z.infer<typeof tblUserParamsResultSchema>;
