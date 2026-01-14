import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatCreateManyInputObjectSchema as ArVatCreateManyInputObjectSchema } from './objects/ArVatCreateManyInput.schema';

export const ArVatCreateManySchema: z.ZodType<Prisma.ArVatCreateManyArgs> = z.object({ data: z.union([ ArVatCreateManyInputObjectSchema, z.array(ArVatCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArVatCreateManyArgs>;

export const ArVatCreateManyZodSchema = z.object({ data: z.union([ ArVatCreateManyInputObjectSchema, z.array(ArVatCreateManyInputObjectSchema) ]),  }).strict();