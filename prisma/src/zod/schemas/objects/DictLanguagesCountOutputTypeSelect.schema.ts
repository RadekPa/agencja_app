import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dictArticles: z.boolean().optional(),
  tblAgreements: z.boolean().optional(),
  tblCustomers: z.boolean().optional(),
  tblTitles: z.boolean().optional()
}).strict();
export const DictLanguagesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictLanguagesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguagesCountOutputTypeSelect>;
export const DictLanguagesCountOutputTypeSelectObjectZodSchema = makeSchema();
