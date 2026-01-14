import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgreements: z.boolean().optional(),
  tblSubmissions: z.boolean().optional(),
  tblTitAuthors: z.boolean().optional(),
  tblTitEvents: z.boolean().optional(),
  tblTitSubClass: z.boolean().optional()
}).strict();
export const TblTitlesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblTitlesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesCountOutputTypeSelect>;
export const TblTitlesCountOutputTypeSelectObjectZodSchema = makeSchema();
