import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dictStates: z.boolean().optional(),
  tblAgreements: z.boolean().optional()
}).strict();
export const DictCountries_oldCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictCountries_oldCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCountries_oldCountOutputTypeSelect>;
export const DictCountries_oldCountOutputTypeSelectObjectZodSchema = makeSchema();
