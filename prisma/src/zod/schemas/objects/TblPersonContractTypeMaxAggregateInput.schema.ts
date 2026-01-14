import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CTypeID: z.literal(true).optional(),
  CTypeDescr: z.literal(true).optional()
}).strict();
export const TblPersonContractTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonContractTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonContractTypeMaxAggregateInputType>;
export const TblPersonContractTypeMaxAggregateInputObjectZodSchema = makeSchema();
