import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.literal(true).optional(),
  FullName: z.literal(true).optional(),
  FirstName: z.literal(true).optional(),
  MiddleName: z.literal(true).optional(),
  LastName: z.literal(true).optional(),
  Suffix: z.literal(true).optional(),
  PenName: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblAuthorsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblAuthorsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAuthorsCountAggregateInputType>;
export const TblAuthorsCountAggregateInputObjectZodSchema = makeSchema();
