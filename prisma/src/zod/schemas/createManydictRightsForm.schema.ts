import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormCreateManyInputObjectSchema as dictRightsFormCreateManyInputObjectSchema } from './objects/dictRightsFormCreateManyInput.schema';

export const dictRightsFormCreateManySchema: z.ZodType<Prisma.dictRightsFormCreateManyArgs> = z.object({ data: z.union([ dictRightsFormCreateManyInputObjectSchema, z.array(dictRightsFormCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictRightsFormCreateManyArgs>;

export const dictRightsFormCreateManyZodSchema = z.object({ data: z.union([ dictRightsFormCreateManyInputObjectSchema, z.array(dictRightsFormCreateManyInputObjectSchema) ]),  }).strict();