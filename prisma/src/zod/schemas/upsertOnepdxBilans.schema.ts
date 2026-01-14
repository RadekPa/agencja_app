import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';
import { pdxBilansCreateInputObjectSchema as pdxBilansCreateInputObjectSchema } from './objects/pdxBilansCreateInput.schema';
import { pdxBilansUncheckedCreateInputObjectSchema as pdxBilansUncheckedCreateInputObjectSchema } from './objects/pdxBilansUncheckedCreateInput.schema';
import { pdxBilansUpdateInputObjectSchema as pdxBilansUpdateInputObjectSchema } from './objects/pdxBilansUpdateInput.schema';
import { pdxBilansUncheckedUpdateInputObjectSchema as pdxBilansUncheckedUpdateInputObjectSchema } from './objects/pdxBilansUncheckedUpdateInput.schema';

export const pdxBilansUpsertOneSchema: z.ZodType<Prisma.pdxBilansUpsertArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema, create: z.union([ pdxBilansCreateInputObjectSchema, pdxBilansUncheckedCreateInputObjectSchema ]), update: z.union([ pdxBilansUpdateInputObjectSchema, pdxBilansUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.pdxBilansUpsertArgs>;

export const pdxBilansUpsertOneZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema, create: z.union([ pdxBilansCreateInputObjectSchema, pdxBilansUncheckedCreateInputObjectSchema ]), update: z.union([ pdxBilansUpdateInputObjectSchema, pdxBilansUncheckedUpdateInputObjectSchema ]) }).strict();