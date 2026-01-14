import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MyNumber: z.literal(true).optional(),
  ContractID: z.literal(true).optional(),
  InvoiceNumber: z.literal(true).optional(),
  InvoiceDate: z.literal(true).optional(),
  Publisher: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBN: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const PearsonMaterialMaxAggregateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialMaxAggregateInputType>;
export const PearsonMaterialMaxAggregateInputObjectZodSchema = makeSchema();
