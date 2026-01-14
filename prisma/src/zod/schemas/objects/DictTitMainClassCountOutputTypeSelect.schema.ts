import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dictTitSubClass: z.boolean().optional(),
  tblMailingLists: z.boolean().optional(),
  tblTitles: z.boolean().optional()
}).strict();
export const DictTitMainClassCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictTitMainClassCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictTitMainClassCountOutputTypeSelect>;
export const DictTitMainClassCountOutputTypeSelectObjectZodSchema = makeSchema();
