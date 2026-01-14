import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeSelectObjectSchema as dictPriceTypeSelectObjectSchema } from './objects/dictPriceTypeSelect.schema';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './objects/dictPriceTypeInclude.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './objects/dictPriceTypeWhereUniqueInput.schema';

export const dictPriceTypeDeleteOneSchema: z.ZodType<Prisma.dictPriceTypeDeleteArgs> = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), where: dictPriceTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeDeleteArgs>;

export const dictPriceTypeDeleteOneZodSchema = z.object({ select: dictPriceTypeSelectObjectSchema.optional(), include: dictPriceTypeIncludeObjectSchema.optional(), where: dictPriceTypeWhereUniqueInputObjectSchema }).strict();