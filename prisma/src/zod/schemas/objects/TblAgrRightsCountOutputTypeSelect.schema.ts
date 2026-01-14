import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dictRoyType: z.boolean().optional(),
  tblRoyRates: z.boolean().optional()
}).strict();
export const TblAgrRightsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblAgrRightsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrRightsCountOutputTypeSelect>;
export const TblAgrRightsCountOutputTypeSelectObjectZodSchema = makeSchema();
