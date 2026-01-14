import * as z from 'zod';
export const tblCustUsersUpdateResultSchema = z.nullable(z.object({
  CustID: z.number().int(),
  Login: z.string(),
  tblCustomers: z.unknown(),
  tblUsers: z.unknown()
}));