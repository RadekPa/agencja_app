import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeSelectObjectSchema as dictRoyPriceTypeSelectObjectSchema } from './objects/dictRoyPriceTypeSelect.schema';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './objects/dictRoyPriceTypeWhereUniqueInput.schema';

export const dictRoyPriceTypeFindUniqueSchema: z.ZodType<Prisma.dictRoyPriceTypeFindUniqueArgs> = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), where: dictRoyPriceTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeFindUniqueArgs>;

export const dictRoyPriceTypeFindUniqueZodSchema = z.object({ select: dictRoyPriceTypeSelectObjectSchema.optional(), include: dictRoyPriceTypeIncludeObjectSchema.optional(), where: dictRoyPriceTypeWhereUniqueInputObjectSchema }).strict();