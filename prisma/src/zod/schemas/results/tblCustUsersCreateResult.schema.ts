import * as z from 'zod';
export const tblCustUsersCreateResultSchema = z.object({
  CustID: z.number().int(),
  Login: z.string(),
  tblCustomers: z.unknown(),
  tblUsers: z.unknown()
});