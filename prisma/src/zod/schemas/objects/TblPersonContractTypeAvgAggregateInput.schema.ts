import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.literal(true).optional()
}).strict();
export const TblPersonContractTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonContractTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonContractTypeAvgAggregateInputType>;
export const TblPersonContractTypeAvgAggregateInputObjectZodSchema = makeSchema();
