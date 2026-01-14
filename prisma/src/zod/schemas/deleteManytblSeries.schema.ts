import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesWhereInputObjectSchema as tblSeriesWhereInputObjectSchema } from './objects/tblSeriesWhereInput.schema';

export const tblSeriesDeleteManySchema: z.ZodType<Prisma.tblSeriesDeleteManyArgs> = z.object({ where: tblSeriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSeriesDeleteManyArgs>;

export const tblSeriesDeleteManyZodSchema = z.object({ where: tblSeriesWhereInputObjectSchema.optional() }).strict();