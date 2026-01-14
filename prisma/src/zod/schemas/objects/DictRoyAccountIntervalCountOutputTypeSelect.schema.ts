import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrRights: z.boolean().optional()
}).strict();
export const DictRoyAccountIntervalCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalCountOutputTypeSelect>;
export const DictRoyAccountIntervalCountOutputTypeSelectObjectZodSchema = makeSchema();
