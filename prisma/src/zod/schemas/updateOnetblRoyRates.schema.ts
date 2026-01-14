import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesUpdateInputObjectSchema as tblRoyRatesUpdateInputObjectSchema } from './objects/tblRoyRatesUpdateInput.schema';
import { tblRoyRatesUncheckedUpdateInputObjectSchema as tblRoyRatesUncheckedUpdateInputObjectSchema } from './objects/tblRoyRatesUncheckedUpdateInput.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';

export const tblRoyRatesUpdateOneSchema: z.ZodType<Prisma.tblRoyRatesUpdateArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), data: z.union([tblRoyRatesUpdateInputObjectSchema, tblRoyRatesUncheckedUpdateInputObjectSchema]), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateArgs>;

export const tblRoyRatesUpdateOneZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), data: z.union([tblRoyRatesUpdateInputObjectSchema, tblRoyRatesUncheckedUpdateInputObjectSchema]), where: tblRoyRatesWhereUniqueInputObjectSchema }).strict();