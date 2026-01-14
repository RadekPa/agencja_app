import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansUpdateInputObjectSchema as pdxBilansUpdateInputObjectSchema } from './objects/pdxBilansUpdateInput.schema';
import { pdxBilansUncheckedUpdateInputObjectSchema as pdxBilansUncheckedUpdateInputObjectSchema } from './objects/pdxBilansUncheckedUpdateInput.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';

export const pdxBilansUpdateOneSchema: z.ZodType<Prisma.pdxBilansUpdateArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  data: z.union([pdxBilansUpdateInputObjectSchema, pdxBilansUncheckedUpdateInputObjectSchema]), where: pdxBilansWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxBilansUpdateArgs>;

export const pdxBilansUpdateOneZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  data: z.union([pdxBilansUpdateInputObjectSchema, pdxBilansUncheckedUpdateInputObjectSchema]), where: pdxBilansWhereUniqueInputObjectSchema }).strict();