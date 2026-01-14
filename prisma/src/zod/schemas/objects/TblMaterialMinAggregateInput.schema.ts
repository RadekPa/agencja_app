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
  ReceiveDate: z.literal(true).optional()
}).strict();
export const TblMaterialMinAggregateInputObjectSchema: z.ZodType<Prisma.TblMaterialMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMaterialMinAggregateInputType>;
export const TblMaterialMinAggregateInputObjectZodSchema = makeSchema();
