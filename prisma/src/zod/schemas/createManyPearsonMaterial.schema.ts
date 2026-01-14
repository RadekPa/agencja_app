import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialCreateManyInputObjectSchema as PearsonMaterialCreateManyInputObjectSchema } from './objects/PearsonMaterialCreateManyInput.schema';

export const PearsonMaterialCreateManySchema: z.ZodType<Prisma.PearsonMaterialCreateManyArgs> = z.object({ data: z.union([ PearsonMaterialCreateManyInputObjectSchema, z.array(PearsonMaterialCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialCreateManyArgs>;

export const PearsonMaterialCreateManyZodSchema = z.object({ data: z.union([ PearsonMaterialCreateManyInputObjectSchema, z.array(PearsonMaterialCreateManyInputObjectSchema) ]),  }).strict();