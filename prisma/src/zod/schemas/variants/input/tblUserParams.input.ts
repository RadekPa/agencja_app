import * as z from 'zod';
// prettier-ignore
export const tblUserParamsInputSchema = z.object({
    Login: z.string(),
    Name: z.string(),
    Value: z.string(),
    tblUsers: z.unknown()
}).strict();

export type tblUserParamsInputType = z.infer<typeof tblUserParamsInputSchema>;
