import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  Printrun: z.literal(true).optional(),
  LocalEdition: z.literal(true).optional()
}).strict();
export const TblPubLocalSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPubLocalSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubLocalSumAggregateInputType>;
export const TblPubLocalSumAggregateInputObjectZodSchema = makeSchema();
