import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFERSelectObjectSchema as pdxTRANSFERSelectObjectSchema } from './objects/pdxTRANSFERSelect.schema';
import { pdxTRANSFERCreateInputObjectSchema as pdxTRANSFERCreateInputObjectSchema } from './objects/pdxTRANSFERCreateInput.schema';
import { pdxTRANSFERUncheckedCreateInputObjectSchema as pdxTRANSFERUncheckedCreateInputObjectSchema } from './objects/pdxTRANSFERUncheckedCreateInput.schema';

export const pdxTRANSFERCreateOneSchema: z.ZodType<Prisma.pdxTRANSFERCreateArgs> = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  data: z.union([pdxTRANSFERCreateInputObjectSchema, pdxTRANSFERUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERCreateArgs>;

export const pdxTRANSFERCreateOneZodSchema = z.object({ select: pdxTRANSFERSelectObjectSchema.optional(),  data: z.union([pdxTRANSFERCreateInputObjectSchema, pdxTRANSFERUncheckedCreateInputObjectSchema]) }).strict();