import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERSelectObjectSchema as pdxTRANSFERSelectObjectSchema } from './objects/pdxTRANSFERSelect.schema';
import { pdxTRANSFERWhereUniqueInputObjectSchema as pdxTRANSFERWhereUniqueInputObjectSchema } from './objects/pdxTRANSFERWhereUniqueInput.schema';

export const pdxTRANSFERDeleteOneSchema: z.ZodType<Prisma.pdxTRANSFERDeleteArgs> = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  where: pdxTRANSFERWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERDeleteArgs>;

export const pdxTRANSFERDeleteOneZodSchema = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  where: pdxTRANSFERWhereUniqueInputObjectSchema }).strict();