import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.literal(true).optional()
}).strict();
export const DictCopyTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictCopyTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeSumAggregateInputType>;
export const DictCopyTypeSumAggregateInputObjectZodSchema = makeSchema();
