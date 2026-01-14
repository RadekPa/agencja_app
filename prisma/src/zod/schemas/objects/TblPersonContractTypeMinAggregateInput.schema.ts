import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.literal(true).optional(),
  CTypeDescr: z.literal(true).optional()
}).strict();
export const TblPersonContractTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonContractTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonContractTypeMinAggregateInputType>;
export const TblPersonContractTypeMinAggregateInputObjectZodSchema = makeSchema();
