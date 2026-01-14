import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesCreateManyInputObjectSchema as dictAgrTemplatesCreateManyInputObjectSchema } from './objects/dictAgrTemplatesCreateManyInput.schema';

export const dictAgrTemplatesCreateManySchema: z.ZodType<Prisma.dictAgrTemplatesCreateManyArgs> = z.object({ data: z.union([ dictAgrTemplatesCreateManyInputObjectSchema, z.array(dictAgrTemplatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesCreateManyArgs>;

export const dictAgrTemplatesCreateManyZodSchema = z.object({ data: z.union([ dictAgrTemplatesCreateManyInputObjectSchema, z.array(dictAgrTemplatesCreateManyInputObjectSchema) ]),  }).strict();