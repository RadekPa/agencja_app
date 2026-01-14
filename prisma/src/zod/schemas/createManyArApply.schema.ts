import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyCreateManyInputObjectSchema as ArApplyCreateManyInputObjectSchema } from './objects/ArApplyCreateManyInput.schema';

export const ArApplyCreateManySchema: z.ZodType<Prisma.ArApplyCreateManyArgs> = z.object({ data: z.union([ ArApplyCreateManyInputObjectSchema, z.array(ArApplyCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArApplyCreateManyArgs>;

export const ArApplyCreateManyZodSchema = z.object({ data: z.union([ ArApplyCreateManyInputObjectSchema, z.array(ArApplyCreateManyInputObjectSchema) ]),  }).strict();