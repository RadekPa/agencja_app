import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesCreateManyInputObjectSchema as tblSeriesCreateManyInputObjectSchema } from './objects/tblSeriesCreateManyInput.schema';

export const tblSeriesCreateManySchema: z.ZodType<Prisma.tblSeriesCreateManyArgs> = z.object({ data: z.union([ tblSeriesCreateManyInputObjectSchema, z.array(tblSeriesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblSeriesCreateManyArgs>;

export const tblSeriesCreateManyZodSchema = z.object({ data: z.union([ tblSeriesCreateManyInputObjectSchema, z.array(tblSeriesCreateManyInputObjectSchema) ]),  }).strict();