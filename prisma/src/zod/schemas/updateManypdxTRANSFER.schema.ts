import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERUpdateManyMutationInputObjectSchema as pdxTRANSFERUpdateManyMutationInputObjectSchema } from './objects/pdxTRANSFERUpdateManyMutationInput.schema';
import { pdxTRANSFERWhereInputObjectSchema as pdxTRANSFERWhereInputObjectSchema } from './objects/pdxTRANSFERWhereInput.schema';

export const pdxTRANSFERUpdateManySchema: z.ZodType<Prisma.pdxTRANSFERUpdateManyArgs> = z.object({ data: pdxTRANSFERUpdateManyMutationInputObjectSchema, where: pdxTRANSFERWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERUpdateManyArgs>;

export const pdxTRANSFERUpdateManyZodSchema = z.object({ data: pdxTRANSFERUpdateManyMutationInputObjectSchema, where: pdxTRANSFERWhereInputObjectSchema.optional() }).strict();