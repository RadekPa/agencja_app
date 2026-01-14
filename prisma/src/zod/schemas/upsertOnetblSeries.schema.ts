import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesSelectObjectSchema as tblSeriesSelectObjectSchema } from './objects/tblSeriesSelect.schema';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './objects/tblSeriesInclude.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './objects/tblSeriesWhereUniqueInput.schema';
import { tblSeriesCreateInputObjectSchema as tblSeriesCreateInputObjectSchema } from './objects/tblSeriesCreateInput.schema';
import { tblSeriesUncheckedCreateInputObjectSchema as tblSeriesUncheckedCreateInputObjectSchema } from './objects/tblSeriesUncheckedCreateInput.schema';
import { tblSeriesUpdateInputObjectSchema as tblSeriesUpdateInputObjectSchema } from './objects/tblSeriesUpdateInput.schema';
import { tblSeriesUncheckedUpdateInputObjectSchema as tblSeriesUncheckedUpdateInputObjectSchema } from './objects/tblSeriesUncheckedUpdateInput.schema';

export const tblSeriesUpsertOneSchema: z.ZodType<Prisma.tblSeriesUpsertArgs> = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), where: tblSeriesWhereUniqueInputObjectSchema, create: z.union([ tblSeriesCreateInputObjectSchema, tblSeriesUncheckedCreateInputObjectSchema ]), update: z.union([ tblSeriesUpdateInputObjectSchema, tblSeriesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblSeriesUpsertArgs>;

export const tblSeriesUpsertOneZodSchema = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), where: tblSeriesWhereUniqueInputObjectSchema, create: z.union([ tblSeriesCreateInputObjectSchema, tblSeriesUncheckedCreateInputObjectSchema ]), update: z.union([ tblSeriesUpdateInputObjectSchema, tblSeriesUncheckedUpdateInputObjectSchema ]) }).strict();