import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';

export const tblRoyRatesDeleteOneSchema: z.ZodType<Prisma.tblRoyRatesDeleteArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesDeleteArgs>;

export const tblRoyRatesDeleteOneZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict();