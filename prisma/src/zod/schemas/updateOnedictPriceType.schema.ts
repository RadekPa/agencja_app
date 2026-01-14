import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeSelectObjectSchema as dictPriceTypeSelectObjectSchema } from './objects/dictPriceTypeSelect.schema';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './objects/dictPriceTypeInclude.schema';
import { dictPriceTypeUpdateInputObjectSchema as dictPriceTypeUpdateInputObjectSchema } from './objects/dictPriceTypeUpdateInput.schema';
import { dictPriceTypeUncheckedUpdateInputObjectSchema as dictPriceTypeUncheckedUpdateInputObjectSchema } from './objects/dictPriceTypeUncheckedUpdateInput.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './objects/dictPriceTypeWhereUniqueInput.schema';

export const dictPriceTypeUpdateOneSchema: z.ZodType<Prisma.dictPriceTypeUpdateArgs> = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), data: z.union([dictPriceTypeUpdateInputObjectSchema, dictPriceTypeUncheckedUpdateInputObjectSchema]), where: dictPriceTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeUpdateArgs>;

export const dictPriceTypeUpdateOneZodSchema = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), data: z.union([dictPriceTypeUpdateInputObjectSchema, dictPriceTypeUncheckedUpdateInputObjectSchema]), where: dictPriceTypeWhereUniqueInputObjectSchema }).strict();