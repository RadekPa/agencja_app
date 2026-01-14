import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';

export const tblRoyRatesFindUniqueSchema: z.ZodType<Prisma.tblRoyRatesFindUniqueArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesFindUniqueArgs>;

export const tblRoyRatesFindUniqueZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict();