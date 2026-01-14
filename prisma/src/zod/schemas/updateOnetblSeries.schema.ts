import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesSelectObjectSchema as tblSeriesSelectObjectSchema } from './objects/tblSeriesSelect.schema';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './objects/tblSeriesInclude.schema';
import { tblSeriesUpdateInputObjectSchema as tblSeriesUpdateInputObjectSchema } from './objects/tblSeriesUpdateInput.schema';
import { tblSeriesUncheckedUpdateInputObjectSchema as tblSeriesUncheckedUpdateInputObjectSchema } from './objects/tblSeriesUncheckedUpdateInput.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './objects/tblSeriesWhereUniqueInput.schema';

export const tblSeriesUpdateOneSchema: z.ZodType<Prisma.tblSeriesUpdateArgs> = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), data: z.union([tblSeriesUpdateInputObjectSchema, tblSeriesUncheckedUpdateInputObjectSchema]), where: tblSeriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSeriesUpdateArgs>;

export const tblSeriesUpdateOneZodSchema = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), data: z.union([tblSeriesUpdateInputObjectSchema, tblSeriesUncheckedUpdateInputObjectSchema]), where: tblSeriesWhereUniqueInputObjectSchema }).strict();