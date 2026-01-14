import * as z from 'zod';
// prettier-ignore
export const tblCustUsersModelSchema = z.object({
    CustID: z.number().int(),
    Login: z.string(),
    tblCustomers: z.unknown(),
    tblUsers: z.unknown()
}).strict();

export type tblCustUsersPureType = z.infer<typeof tblCustUsersModelSchema>;
