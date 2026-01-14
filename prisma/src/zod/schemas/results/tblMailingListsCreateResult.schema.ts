import * as z from 'zod';
export const tblMailingListsCreateResultSchema = z.object({
  ClassCode: z.string(),
  SubClassCode: z.string(),
  CustID: z.number().int(),
  dictTitMainClass: z.unknown(),
  dictTitSubClass: z.unknown(),
  tblCustomers: z.unknown()
});