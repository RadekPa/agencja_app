import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgreements: z.boolean().optional(),
  tblCustContacts: z.boolean().optional(),
  tblCustTypes: z.boolean().optional(),
  tblCustUsers: z.boolean().optional(),
  tblMailingLists: z.boolean().optional(),
  tblSeries: z.boolean().optional(),
  tblSubmissions: z.boolean().optional(),
  tblTitles: z.boolean().optional()
}).strict();
export const TblCustomersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblCustomersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersCountOutputTypeSelect>;
export const TblCustomersCountOutputTypeSelectObjectZodSchema = makeSchema();
