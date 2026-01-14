import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblCustTypes: z.boolean().optional()
}).strict();
export const DictCustTypesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictCustTypesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCustTypesCountOutputTypeSelect>;
export const DictCustTypesCountOutputTypeSelectObjectZodSchema = makeSchema();
