import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  LocalTitle: z.literal(true).optional(),
  PubDate: z.literal(true).optional(),
  LocalISBN: z.literal(true).optional(),
  Printrun: z.literal(true).optional(),
  LocalEdition: z.literal(true).optional()
}).strict();
export const TblPubLocalMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPubLocalMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubLocalMaxAggregateInputType>;
export const TblPubLocalMaxAggregateInputObjectZodSchema = makeSchema();
