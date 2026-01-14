import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesSelectObjectSchema as tblSeriesSelectObjectSchema } from './objects/tblSeriesSelect.schema';
import { tblSeriesIncludeObjectSchema as tblSeriesIncludeObjectSchema } from './objects/tblSeriesInclude.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './objects/tblSeriesWhereUniqueInput.schema';

export const tblSeriesDeleteOneSchema: z.ZodType<Prisma.tblSeriesDeleteArgs> = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), where: tblSeriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblSeriesDeleteArgs>;

export const tblSeriesDeleteOneZodSchema = z.object({ select: tblSeriesSelectObjectSchema.optional(), include: tblSeriesIncludeObjectSchema.optional(), where: tblSeriesWhereUniqueInputObjectSchema }).strict();