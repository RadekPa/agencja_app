import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeCreateManyInputObjectSchema as dictSubmSentTypeCreateManyInputObjectSchema } from './objects/dictSubmSentTypeCreateManyInput.schema';

export const dictSubmSentTypeCreateManySchema: z.ZodType<Prisma.dictSubmSentTypeCreateManyArgs> = z.object({ data: z.union([ dictSubmSentTypeCreateManyInputObjectSchema, z.array(dictSubmSentTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateManyArgs>;

export const dictSubmSentTypeCreateManyZodSchema = z.object({ data: z.union([ dictSubmSentTypeCreateManyInputObjectSchema, z.array(dictSubmSentTypeCreateManyInputObjectSchema) ]),  }).strict();