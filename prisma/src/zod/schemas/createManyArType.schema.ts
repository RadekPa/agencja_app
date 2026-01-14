import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeCreateManyInputObjectSchema as ArTypeCreateManyInputObjectSchema } from './objects/ArTypeCreateManyInput.schema';

export const ArTypeCreateManySchema: z.ZodType<Prisma.ArTypeCreateManyArgs> = z.object({ data: z.union([ ArTypeCreateManyInputObjectSchema, z.array(ArTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArTypeCreateManyArgs>;

export const ArTypeCreateManyZodSchema = z.object({ data: z.union([ ArTypeCreateManyInputObjectSchema, z.array(ArTypeCreateManyInputObjectSchema) ]),  }).strict();