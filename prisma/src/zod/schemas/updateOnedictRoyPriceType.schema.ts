import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeSelectObjectSchema as dictRoyPriceTypeSelectObjectSchema } from './objects/dictRoyPriceTypeSelect.schema';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeUpdateInputObjectSchema as dictRoyPriceTypeUpdateInputObjectSchema } from './objects/dictRoyPriceTypeUpdateInput.schema';
import { dictRoyPriceTypeUncheckedUpdateInputObjectSchema as dictRoyPriceTypeUncheckedUpdateInputObjectSchema } from './objects/dictRoyPriceTypeUncheckedUpdateInput.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './objects/dictRoyPriceTypeWhereUniqueInput.schema';

export const dictRoyPriceTypeUpdateOneSchema: z.ZodType<Prisma.dictRoyPriceTypeUpdateArgs> = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), data: z.union([dictRoyPriceTypeUpdateInputObjectSchema, dictRoyPriceTypeUncheckedUpdateInputObjectSchema]), where: dictRoyPriceTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpdateArgs>;

export const dictRoyPriceTypeUpdateOneZodSchema = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), data: z.union([dictRoyPriceTypeUpdateInputObjectSchema, dictRoyPriceTypeUncheckedUpdateInputObjectSchema]), where: dictRoyPriceTypeWhereUniqueInputObjectSchema }).strict();