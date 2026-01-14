import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblMailingLists: z.boolean().optional(),
  tblTitSubClass: z.boolean().optional()
}).strict();
export const DictTitSubClassCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictTitSubClassCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassCountOutputTypeSelect>;
export const DictTitSubClassCountOutputTypeSelectObjectZodSchema = makeSchema();
