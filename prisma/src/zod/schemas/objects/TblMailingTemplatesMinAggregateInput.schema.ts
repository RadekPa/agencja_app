import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.literal(true).optional(),
  TempName: z.literal(true).optional(),
  TempPath: z.literal(true).optional(),
  TempSubject: z.literal(true).optional()
}).strict();
export const TblMailingTemplatesMinAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingTemplatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingTemplatesMinAggregateInputType>;
export const TblMailingTemplatesMinAggregateInputObjectZodSchema = makeSchema();
