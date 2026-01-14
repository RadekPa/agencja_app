import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitSubClassMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblTitSubClassMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassMaxAggregateInputType>;
export const TblTitSubClassMaxAggregateInputObjectZodSchema = makeSchema();
