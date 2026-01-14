import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeSelectObjectSchema as dictRoyPriceTypeSelectObjectSchema } from './objects/dictRoyPriceTypeSelect.schema';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeCreateInputObjectSchema as dictRoyPriceTypeCreateInputObjectSchema } from './objects/dictRoyPriceTypeCreateInput.schema';
import { dictRoyPriceTypeUncheckedCreateInputObjectSchema as dictRoyPriceTypeUncheckedCreateInputObjectSchema } from './objects/dictRoyPriceTypeUncheckedCreateInput.schema';

export const dictRoyPriceTypeCreateOneSchema: z.ZodType<Prisma.dictRoyPriceTypeCreateArgs> = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), data: z.union([dictRoyPriceTypeCreateInputObjectSchema, dictRoyPriceTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateArgs>;

export const dictRoyPriceTypeCreateOneZodSchema = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), data: z.union([dictRoyPriceTypeCreateInputObjectSchema, dictRoyPriceTypeUncheckedCreateInputObjectSchema]) }).strict();