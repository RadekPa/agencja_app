import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERCreateManyInputObjectSchema as pdxTRANSFERCreateManyInputObjectSchema } from './objects/pdxTRANSFERCreateManyInput.schema';

export const pdxTRANSFERCreateManySchema: z.ZodType<Prisma.pdxTRANSFERCreateManyArgs> = z.object({ data: z.union([ pdxTRANSFERCreateManyInputObjectSchema, z.array(pdxTRANSFERCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERCreateManyArgs>;

export const pdxTRANSFERCreateManyZodSchema = z.object({ data: z.union([ pdxTRANSFERCreateManyInputObjectSchema, z.array(pdxTRANSFERCreateManyInputObjectSchema) ]),  }).strict();