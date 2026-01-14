import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblSubmEvents: z.boolean().optional()
}).strict();
export const TblSubmissionsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblSubmissionsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmissionsCountOutputTypeSelect>;
export const TblSubmissionsCountOutputTypeSelectObjectZodSchema = makeSchema();
