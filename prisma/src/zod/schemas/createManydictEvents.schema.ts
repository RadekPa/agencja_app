import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsCreateManyInputObjectSchema as dictEventsCreateManyInputObjectSchema } from './objects/dictEventsCreateManyInput.schema';

export const dictEventsCreateManySchema: z.ZodType<Prisma.dictEventsCreateManyArgs> = z.object({ data: z.union([ dictEventsCreateManyInputObjectSchema, z.array(dictEventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictEventsCreateManyArgs>;

export const dictEventsCreateManyZodSchema = z.object({ data: z.union([ dictEventsCreateManyInputObjectSchema, z.array(dictEventsCreateManyInputObjectSchema) ]),  }).strict();