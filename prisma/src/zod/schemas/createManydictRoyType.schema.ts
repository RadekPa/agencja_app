import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeCreateManyInputObjectSchema as dictRoyTypeCreateManyInputObjectSchema } from './objects/dictRoyTypeCreateManyInput.schema';

export const dictRoyTypeCreateManySchema: z.ZodType<Prisma.dictRoyTypeCreateManyArgs> = z.object({ data: z.union([ dictRoyTypeCreateManyInputObjectSchema, z.array(dictRoyTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeCreateManyArgs>;

export const dictRoyTypeCreateManyZodSchema = z.object({ data: z.union([ dictRoyTypeCreateManyInputObjectSchema, z.array(dictRoyTypeCreateManyInputObjectSchema) ]),  }).strict();