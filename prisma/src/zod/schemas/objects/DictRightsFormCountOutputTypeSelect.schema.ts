import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrRights: z.boolean().optional()
}).strict();
export const DictRightsFormCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictRightsFormCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictRightsFormCountOutputTypeSelect>;
export const DictRightsFormCountOutputTypeSelectObjectZodSchema = makeSchema();
