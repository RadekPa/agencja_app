import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERSelectObjectSchema as pdxTRANSFERSelectObjectSchema } from './objects/pdxTRANSFERSelect.schema';
import { pdxTRANSFERWhereUniqueInputObjectSchema as pdxTRANSFERWhereUniqueInputObjectSchema } from './objects/pdxTRANSFERWhereUniqueInput.schema';
import { pdxTRANSFERCreateInputObjectSchema as pdxTRANSFERCreateInputObjectSchema } from './objects/pdxTRANSFERCreateInput.schema';
import { pdxTRANSFERUncheckedCreateInputObjectSchema as pdxTRANSFERUncheckedCreateInputObjectSchema } from './objects/pdxTRANSFERUncheckedCreateInput.schema';
import { pdxTRANSFERUpdateInputObjectSchema as pdxTRANSFERUpdateInputObjectSchema } from './objects/pdxTRANSFERUpdateInput.schema';
import { pdxTRANSFERUncheckedUpdateInputObjectSchema as pdxTRANSFERUncheckedUpdateInputObjectSchema } from './objects/pdxTRANSFERUncheckedUpdateInput.schema';

export const pdxTRANSFERUpsertOneSchema: z.ZodType<Prisma.pdxTRANSFERUpsertArgs> = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  where: pdxTRANSFERWhereUniqueInputObjectSchema, create: z.union([ pdxTRANSFERCreateInputObjectSchema, pdxTRANSFERUncheckedCreateInputObjectSchema ]), update: z.union([ pdxTRANSFERUpdateInputObjectSchema, pdxTRANSFERUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERUpsertArgs>;

export const pdxTRANSFERUpsertOneZodSchema = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  where: pdxTRANSFERWhereUniqueInputObjectSchema, create: z.union([ pdxTRANSFERCreateInputObjectSchema, pdxTRANSFERUncheckedCreateInputObjectSchema ]), update: z.union([ pdxTRANSFERUpdateInputObjectSchema, pdxTRANSFERUncheckedUpdateInputObjectSchema ]) }).strict();