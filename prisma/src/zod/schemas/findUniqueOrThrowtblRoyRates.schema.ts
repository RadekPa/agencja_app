import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';

export const tblRoyRatesFindUniqueOrThrowSchema: z.ZodType<Prisma.tblRoyRatesFindUniqueOrThrowArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesFindUniqueOrThrowArgs>;

export const tblRoyRatesFindUniqueOrThrowZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict();