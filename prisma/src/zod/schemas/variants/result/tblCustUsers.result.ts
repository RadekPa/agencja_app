import * as z from 'zod';
// prettier-ignore
export const tblCustUsersResultSchema = z.object({
    CustID: z.number().int(),
    Login: z.string(),
    tblCustomers: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblCustUsersResultType = z.infer<typeof tblCustUsersResultSchema>;
