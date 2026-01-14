import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsCreateManyInputObjectSchema as dictAgrEventsCreateManyInputObjectSchema } from './objects/dictAgrEventsCreateManyInput.schema';

export const dictAgrEventsCreateManySchema: z.ZodType<Prisma.dictAgrEventsCreateManyArgs> = z.object({ data: z.union([ dictAgrEventsCreateManyInputObjectSchema, z.array(dictAgrEventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsCreateManyArgs>;

export const dictAgrEventsCreateManyZodSchema = z.object({ data: z.union([ dictAgrEventsCreateManyInputObjectSchema, z.array(dictAgrEventsCreateManyInputObjectSchema) ]),  }).strict();