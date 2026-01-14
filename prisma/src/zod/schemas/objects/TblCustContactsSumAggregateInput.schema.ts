import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  DefaultContact: z.literal(true).optional(),
  TypeOfContact: z.literal(true).optional()
}).strict();
export const TblCustContactsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblCustContactsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustContactsSumAggregateInputType>;
export const TblCustContactsSumAggregateInputObjectZodSchema = makeSchema();
