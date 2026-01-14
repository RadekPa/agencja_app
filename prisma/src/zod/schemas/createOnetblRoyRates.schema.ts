import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesCreateInputObjectSchema as tblRoyRatesCreateInputObjectSchema } from './objects/tblRoyRatesCreateInput.schema';
import { tblRoyRatesUncheckedCreateInputObjectSchema as tblRoyRatesUncheckedCreateInputObjectSchema } from './objects/tblRoyRatesUncheckedCreateInput.schema';

export const tblRoyRatesCreateOneSchema: z.ZodType<Prisma.tblRoyRatesCreateArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), data: z.union([tblRoyRatesCreateInputObjectSchema, tblRoyRatesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesCreateArgs>;

export const tblRoyRatesCreateOneZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), data: z.union([tblRoyRatesCreateInputObjectSchema, tblRoyRatesUncheckedCreateInputObjectSchema]) }).strict();