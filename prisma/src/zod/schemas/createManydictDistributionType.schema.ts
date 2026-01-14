import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeCreateManyInputObjectSchema as dictDistributionTypeCreateManyInputObjectSchema } from './objects/dictDistributionTypeCreateManyInput.schema';

export const dictDistributionTypeCreateManySchema: z.ZodType<Prisma.dictDistributionTypeCreateManyArgs> = z.object({ data: z.union([ dictDistributionTypeCreateManyInputObjectSchema, z.array(dictDistributionTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateManyArgs>;

export const dictDistributionTypeCreateManyZodSchema = z.object({ data: z.union([ dictDistributionTypeCreateManyInputObjectSchema, z.array(dictDistributionTypeCreateManyInputObjectSchema) ]),  }).strict();