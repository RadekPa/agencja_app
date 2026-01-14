import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesUpdateManyMutationInputObjectSchema as tblSeriesUpdateManyMutationInputObjectSchema } from './objects/tblSeriesUpdateManyMutationInput.schema';
import { tblSeriesWhereInputObjectSchema as tblSeriesWhereInputObjectSchema } from './objects/tblSeriesWhereInput.schema';

export const tblSeriesUpdateManySchema: z.ZodType<Prisma.tblSeriesUpdateManyArgs> = z.object({ data: tblSeriesUpdateManyMutationInputObjectSchema, where: tblSeriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSeriesUpdateManyArgs>;

export const tblSeriesUpdateManyZodSchema = z.object({ data: tblSeriesUpdateManyMutationInputObjectSchema, where: tblSeriesWhereInputObjectSchema.optional() }).strict();