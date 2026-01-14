import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatCreateManyInputObjectSchema as dictCoverFormatCreateManyInputObjectSchema } from './objects/dictCoverFormatCreateManyInput.schema';

export const dictCoverFormatCreateManySchema: z.ZodType<Prisma.dictCoverFormatCreateManyArgs> = z.object({ data: z.union([ dictCoverFormatCreateManyInputObjectSchema, z.array(dictCoverFormatCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatCreateManyArgs>;

export const dictCoverFormatCreateManyZodSchema = z.object({ data: z.union([ dictCoverFormatCreateManyInputObjectSchema, z.array(dictCoverFormatCreateManyInputObjectSchema) ]),  }).strict();