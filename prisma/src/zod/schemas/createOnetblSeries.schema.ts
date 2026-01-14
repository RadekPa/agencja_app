import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesSelectObjectSchema as tblSeriesSelectObjectSchema } from './objects/tblSeriesSelect.schema';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './objects/tblSeriesInclude.schema';
import { tblSeriesCreateInputObjectSchema as tblSeriesCreateInputObjectSchema } from './objects/tblSeriesCreateInput.schema';
import { tblSeriesUncheckedCreateInputObjectSchema as tblSeriesUncheckedCreateInputObjectSchema } from './objects/tblSeriesUncheckedCreateInput.schema';

export const tblSeriesCreateOneSchema: z.ZodType<Prisma.tblSeriesCreateArgs> = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), data: z.union([tblSeriesCreateInputObjectSchema, tblSeriesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblSeriesCreateArgs>;

export const tblSeriesCreateOneZodSchema = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), data: z.union([tblSeriesCreateInputObjectSchema, tblSeriesUncheckedCreateInputObjectSchema]) }).strict();