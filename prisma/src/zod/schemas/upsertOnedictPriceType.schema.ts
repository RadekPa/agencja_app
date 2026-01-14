import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeSelectObjectSchema as dictPriceTypeSelectObjectSchema } from './objects/dictPriceTypeSelect.schema';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './objects/dictPriceTypeInclude.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './objects/dictPriceTypeWhereUniqueInput.schema';
import { dictPriceTypeCreateInputObjectSchema as dictPriceTypeCreateInputObjectSchema } from './objects/dictPriceTypeCreateInput.schema';
import { dictPriceTypeUncheckedCreateInputObjectSchema as dictPriceTypeUncheckedCreateInputObjectSchema } from './objects/dictPriceTypeUncheckedCreateInput.schema';
import { dictPriceTypeUpdateInputObjectSchema as dictPriceTypeUpdateInputObjectSchema } from './objects/dictPriceTypeUpdateInput.schema';
import { dictPriceTypeUncheckedUpdateInputObjectSchema as dictPriceTypeUncheckedUpdateInputObjectSchema } from './objects/dictPriceTypeUncheckedUpdateInput.schema';

export const dictPriceTypeUpsertOneSchema: z.ZodType<Prisma.dictPriceTypeUpsertArgs> = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), where: dictPriceTypeWhereUniqueInputObjectSchema, create: z.union([ dictPriceTypeCreateInputObjectSchema, dictPriceTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictPriceTypeUpdateInputObjectSchema, dictPriceTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeUpsertArgs>;

export const dictPriceTypeUpsertOneZodSchema = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), where: dictPriceTypeWhereUniqueInputObjectSchema, create: z.union([ dictPriceTypeCreateInputObjectSchema, dictPriceTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictPriceTypeUpdateInputObjectSchema, dictPriceTypeUncheckedUpdateInputObjectSchema ]) }).strict();