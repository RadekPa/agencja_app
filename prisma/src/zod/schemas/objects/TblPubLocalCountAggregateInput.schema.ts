import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubLocalID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  LocalTitle: z.literal(true).optional(),
  PubDate: z.literal(true).optional(),
  LocalISBN: z.literal(true).optional(),
  Printrun: z.literal(true).optional(),
  LocalEdition: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPubLocalCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPubLocalCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubLocalCountAggregateInputType>;
export const TblPubLocalCountAggregateInputObjectZodSchema = makeSchema();
