import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeSelectObjectSchema as dictPriceTypeSelectObjectSchema } from './objects/dictPriceTypeSelect.schema';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './objects/dictPriceTypeInclude.schema';
import { dictPriceTypeCreateInputObjectSchema as dictPriceTypeCreateInputObjectSchema } from './objects/dictPriceTypeCreateInput.schema';
import { dictPriceTypeUncheckedCreateInputObjectSchema as dictPriceTypeUncheckedCreateInputObjectSchema } from './objects/dictPriceTypeUncheckedCreateInput.schema';

export const dictPriceTypeCreateOneSchema: z.ZodType<Prisma.dictPriceTypeCreateArgs> = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), data: z.union([dictPriceTypeCreateInputObjectSchema, dictPriceTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeCreateArgs>;

export const dictPriceTypeCreateOneZodSchema = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), data: z.union([dictPriceTypeCreateInputObjectSchema, dictPriceTypeUncheckedCreateInputObjectSchema]) }).strict();