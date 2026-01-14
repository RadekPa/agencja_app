import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERSelectObjectSchema as pdxTRANSFERSelectObjectSchema } from './objects/pdxTRANSFERSelect.schema';
import { pdxTRANSFERUpdateInputObjectSchema as pdxTRANSFERUpdateInputObjectSchema } from './objects/pdxTRANSFERUpdateInput.schema';
import { pdxTRANSFERUncheckedUpdateInputObjectSchema as pdxTRANSFERUncheckedUpdateInputObjectSchema } from './objects/pdxTRANSFERUncheckedUpdateInput.schema';
import { pdxTRANSFERWhereUniqueInputObjectSchema as pdxTRANSFERWhereUniqueInputObjectSchema } from './objects/pdxTRANSFERWhereUniqueInput.schema';

export const pdxTRANSFERUpdateOneSchema: z.ZodType<Prisma.pdxTRANSFERUpdateArgs> = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  data: z.union([pdxTRANSFERUpdateInputObjectSchema, pdxTRANSFERUncheckedUpdateInputObjectSchema]), where: pdxTRANSFERWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERUpdateArgs>;

export const pdxTRANSFERUpdateOneZodSchema = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  data: z.union([pdxTRANSFERUpdateInputObjectSchema, pdxTRANSFERUncheckedUpdateInputObjectSchema]), where: pdxTRANSFERWhereUniqueInputObjectSchema }).strict();