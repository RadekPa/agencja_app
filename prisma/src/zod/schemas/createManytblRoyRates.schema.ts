import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesCreateManyInputObjectSchema as tblRoyRatesCreateManyInputObjectSchema } from './objects/tblRoyRatesCreateManyInput.schema';

export const tblRoyRatesCreateManySchema: z.ZodType<Prisma.tblRoyRatesCreateManyArgs> = z.object({ data: z.union([ tblRoyRatesCreateManyInputObjectSchema, z.array(tblRoyRatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesCreateManyArgs>;

export const tblRoyRatesCreateManyZodSchema = z.object({ data: z.union([ tblRoyRatesCreateManyInputObjectSchema, z.array(tblRoyRatesCreateManyInputObjectSchema) ]),  }).strict();