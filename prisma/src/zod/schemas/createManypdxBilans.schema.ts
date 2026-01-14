import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansCreateManyInputObjectSchema as pdxBilansCreateManyInputObjectSchema } from './objects/pdxBilansCreateManyInput.schema';

export const pdxBilansCreateManySchema: z.ZodType<Prisma.pdxBilansCreateManyArgs> = z.object({ data: z.union([ pdxBilansCreateManyInputObjectSchema, z.array(pdxBilansCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.pdxBilansCreateManyArgs>;

export const pdxBilansCreateManyZodSchema = z.object({ data: z.union([ pdxBilansCreateManyInputObjectSchema, z.array(pdxBilansCreateManyInputObjectSchema) ]),  }).strict();