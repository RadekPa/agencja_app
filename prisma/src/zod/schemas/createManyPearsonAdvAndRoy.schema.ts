import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoyCreateManyInputObjectSchema as PearsonAdvAndRoyCreateManyInputObjectSchema } from './objects/PearsonAdvAndRoyCreateManyInput.schema';

export const PearsonAdvAndRoyCreateManySchema: z.ZodType<Prisma.PearsonAdvAndRoyCreateManyArgs> = z.object({ data: z.union([ PearsonAdvAndRoyCreateManyInputObjectSchema, z.array(PearsonAdvAndRoyCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyCreateManyArgs>;

export const PearsonAdvAndRoyCreateManyZodSchema = z.object({ data: z.union([ PearsonAdvAndRoyCreateManyInputObjectSchema, z.array(PearsonAdvAndRoyCreateManyInputObjectSchema) ]),  }).strict();