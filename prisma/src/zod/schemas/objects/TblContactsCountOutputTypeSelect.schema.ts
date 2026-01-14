import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblCustContacts: z.boolean().optional()
}).strict();
export const TblContactsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblContactsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblContactsCountOutputTypeSelect>;
export const TblContactsCountOutputTypeSelectObjectZodSchema = makeSchema();
