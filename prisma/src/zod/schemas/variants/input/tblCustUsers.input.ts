import * as z from 'zod';
// prettier-ignore
export const tblCustUsersInputSchema = z.object({
    CustID: z.number().int(),
    Login: z.string(),
    tblCustomers: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblCustUsersInputType = z.infer<typeof tblCustUsersInputSchema>;
