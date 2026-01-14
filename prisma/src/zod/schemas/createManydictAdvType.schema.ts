import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeCreateManyInputObjectSchema as dictAdvTypeCreateManyInputObjectSchema } from './objects/dictAdvTypeCreateManyInput.schema';

export const dictAdvTypeCreateManySchema: z.ZodType<Prisma.dictAdvTypeCreateManyArgs> = z.object({ data: z.union([ dictAdvTypeCreateManyInputObjectSchema, z.array(dictAdvTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeCreateManyArgs>;

export const dictAdvTypeCreateManyZodSchema = z.object({ data: z.union([ dictAdvTypeCreateManyInputObjectSchema, z.array(dictAdvTypeCreateManyInputObjectSchema) ]),  }).strict();