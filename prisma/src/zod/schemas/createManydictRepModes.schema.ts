import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesCreateManyInputObjectSchema as dictRepModesCreateManyInputObjectSchema } from './objects/dictRepModesCreateManyInput.schema';

export const dictRepModesCreateManySchema: z.ZodType<Prisma.dictRepModesCreateManyArgs> = z.object({ data: z.union([ dictRepModesCreateManyInputObjectSchema, z.array(dictRepModesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictRepModesCreateManyArgs>;

export const dictRepModesCreateManyZodSchema = z.object({ data: z.union([ dictRepModesCreateManyInputObjectSchema, z.array(dictRepModesCreateManyInputObjectSchema) ]),  }).strict();