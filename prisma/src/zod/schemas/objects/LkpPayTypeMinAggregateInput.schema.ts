import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.literal(true).optional(),
  Description: z.literal(true).optional(),
  DescriptionPL: z.literal(true).optional()
}).strict();
export const LkpPayTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.LkpPayTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LkpPayTypeMinAggregateInputType>;
export const LkpPayTypeMinAggregateInputObjectZodSchema = makeSchema();
