import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.literal(true).optional()
}).strict();
export const LkpPayTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.LkpPayTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LkpPayTypeSumAggregateInputType>;
export const LkpPayTypeSumAggregateInputObjectZodSchema = makeSchema();
