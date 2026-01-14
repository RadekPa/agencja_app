import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './objects/tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesCreateInputObjectSchema as tblRoyRatesCreateInputObjectSchema } from './objects/tblRoyRatesCreateInput.schema';
import { tblRoyRatesUncheckedCreateInputObjectSchema as tblRoyRatesUncheckedCreateInputObjectSchema } from './objects/tblRoyRatesUncheckedCreateInput.schema';
import { tblRoyRatesUpdateInputObjectSchema as tblRoyRatesUpdateInputObjectSchema } from './objects/tblRoyRatesUpdateInput.schema';
import { tblRoyRatesUncheckedUpdateInputObjectSchema as tblRoyRatesUncheckedUpdateInputObjectSchema } from './objects/tblRoyRatesUncheckedUpdateInput.schema';

export const tblRoyRatesUpsertOneSchema: z.ZodType<Prisma.tblRoyRatesUpsertArgs> = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema, create: z.union([ tblRoyRatesCreateInputObjectSchema, tblRoyRatesUncheckedCreateInputObjectSchema ]), update: z.union([ tblRoyRatesUpdateInputObjectSchema, tblRoyRatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesUpsertArgs>;

export const tblRoyRatesUpsertOneZodSchema = z.object({ select: tblRoyRatesSelectObjectSchema.optional(), include: tblRoyRatesIncludeObjectSchema.optional(), where: tblRoyRatesWhereUniqueInputObjectSchema, create: z.union([ tblRoyRatesCreateInputObjectSchema, tblRoyRatesUncheckedCreateInputObjectSchema ]), update: z.union([ tblRoyRatesUpdateInputObjectSchema, tblRoyRatesUncheckedUpdateInputObjectSchema ]) }).strict();