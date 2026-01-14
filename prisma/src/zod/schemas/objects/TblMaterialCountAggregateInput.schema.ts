import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  MatTypeID: z.literal(true).optional(),
  Amount: z.literal(true).optional(),
  Currency: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  RequestDate: z.literal(true).optional(),
  ReceiveDate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblMaterialCountAggregateInputObjectSchema: z.ZodType<Prisma.TblMaterialCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMaterialCountAggregateInputType>;
export const TblMaterialCountAggregateInputObjectZodSchema = makeSchema();
