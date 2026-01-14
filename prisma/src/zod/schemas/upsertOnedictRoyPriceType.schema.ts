import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeSelectObjectSchema as dictRoyPriceTypeSelectObjectSchema } from './objects/dictRoyPriceTypeSelect.schema';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './objects/dictRoyPriceTypeWhereUniqueInput.schema';
import { dictRoyPriceTypeCreateInputObjectSchema as dictRoyPriceTypeCreateInputObjectSchema } from './objects/dictRoyPriceTypeCreateInput.schema';
import { dictRoyPriceTypeUncheckedCreateInputObjectSchema as dictRoyPriceTypeUncheckedCreateInputObjectSchema } from './objects/dictRoyPriceTypeUncheckedCreateInput.schema';
import { dictRoyPriceTypeUpdateInputObjectSchema as dictRoyPriceTypeUpdateInputObjectSchema } from './objects/dictRoyPriceTypeUpdateInput.schema';
import { dictRoyPriceTypeUncheckedUpdateInputObjectSchema as dictRoyPriceTypeUncheckedUpdateInputObjectSchema } from './objects/dictRoyPriceTypeUncheckedUpdateInput.schema';

export const dictRoyPriceTypeUpsertOneSchema: z.ZodType<Prisma.dictRoyPriceTypeUpsertArgs> = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), where: dictRoyPriceTypeWhereUniqueInputObjectSchema, create: z.union([ dictRoyPriceTypeCreateInputObjectSchema, dictRoyPriceTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictRoyPriceTypeUpdateInputObjectSchema, dictRoyPriceTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpsertArgs>;

export const dictRoyPriceTypeUpsertOneZodSchema = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), where: dictRoyPriceTypeWhereUniqueInputObjectSchema, create: z.union([ dictRoyPriceTypeCreateInputObjectSchema, dictRoyPriceTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictRoyPriceTypeUpdateInputObjectSchema, dictRoyPriceTypeUncheckedUpdateInputObjectSchema ]) }).strict();