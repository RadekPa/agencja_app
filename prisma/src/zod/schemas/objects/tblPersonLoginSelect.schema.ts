import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.boolean().optional(),
  Login: z.boolean().optional(),
  DateBegin: z.boolean().optional(),
  DateEnd: z.boolean().optional()
}).strict();
export const tblPersonLoginSelectObjectSchema: z.ZodType<Prisma.tblPersonLoginSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginSelect>;
export const tblPersonLoginSelectObjectZodSchema = makeSchema();
