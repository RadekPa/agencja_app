import * as z from 'zod';
// prettier-ignore
export const tblUserParamsModelSchema = z.object({
    Login: z.string(),
    Name: z.string(),
    Value: z.string(),
    tblUsers: z.unknown()
}).strict();

export type tblUserParamsPureType = z.infer<typeof tblUserParamsModelSchema>;
