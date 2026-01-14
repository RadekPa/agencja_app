import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.literal(true).optional()
}).strict();
export const LkpPayTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.LkpPayTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LkpPayTypeAvgAggregateInputType>;
export const LkpPayTypeAvgAggregateInputObjectZodSchema = makeSchema();
