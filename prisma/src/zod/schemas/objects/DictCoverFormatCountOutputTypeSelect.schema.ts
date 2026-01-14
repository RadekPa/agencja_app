import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblTitles: z.boolean().optional()
}).strict();
export const DictCoverFormatCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictCoverFormatCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatCountOutputTypeSelect>;
export const DictCoverFormatCountOutputTypeSelectObjectZodSchema = makeSchema();
