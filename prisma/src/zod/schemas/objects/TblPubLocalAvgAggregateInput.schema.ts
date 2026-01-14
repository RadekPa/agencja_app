import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  Printrun: z.literal(true).optional(),
  LocalEdition: z.literal(true).optional()
}).strict();
export const TblPubLocalAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPubLocalAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubLocalAvgAggregateInputType>;
export const TblPubLocalAvgAggregateInputObjectZodSchema = makeSchema();
