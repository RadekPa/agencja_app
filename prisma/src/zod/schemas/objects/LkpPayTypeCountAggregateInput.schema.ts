import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PayTypeID: z.literal(true).optional(),
  Description: z.literal(true).optional(),
  DescriptionPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LkpPayTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.LkpPayTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LkpPayTypeCountAggregateInputType>;
export const LkpPayTypeCountAggregateInputObjectZodSchema = makeSchema();
