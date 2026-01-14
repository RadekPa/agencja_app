import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERWhereInputObjectSchema as pdxTRANSFERWhereInputObjectSchema } from './objects/pdxTRANSFERWhereInput.schema';

export const pdxTRANSFERDeleteManySchema: z.ZodType<Prisma.pdxTRANSFERDeleteManyArgs> = z.object({ where: pdxTRANSFERWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERDeleteManyArgs>;

export const pdxTRANSFERDeleteManyZodSchema = z.object({ where: pdxTRANSFERWhereInputObjectSchema.optional() }).strict();