import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalCreateManyInputObjectSchema as HelionLocalCreateManyInputObjectSchema } from './objects/HelionLocalCreateManyInput.schema';

export const HelionLocalCreateManySchema: z.ZodType<Prisma.HelionLocalCreateManyArgs> = z.object({ data: z.union([ HelionLocalCreateManyInputObjectSchema, z.array(HelionLocalCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.HelionLocalCreateManyArgs>;

export const HelionLocalCreateManyZodSchema = z.object({ data: z.union([ HelionLocalCreateManyInputObjectSchema, z.array(HelionLocalCreateManyInputObjectSchema) ]),  }).strict();