import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.literal(true).optional(),
  CTypeDescr: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPersonContractTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonContractTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonContractTypeCountAggregateInputType>;
export const TblPersonContractTypeCountAggregateInputObjectZodSchema = makeSchema();
