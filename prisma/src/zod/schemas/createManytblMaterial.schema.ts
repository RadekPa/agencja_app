import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialCreateManyInputObjectSchema as tblMaterialCreateManyInputObjectSchema } from './objects/tblMaterialCreateManyInput.schema';

export const tblMaterialCreateManySchema: z.ZodType<Prisma.tblMaterialCreateManyArgs> = z.object({ data: z.union([ tblMaterialCreateManyInputObjectSchema, z.array(tblMaterialCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblMaterialCreateManyArgs>;

export const tblMaterialCreateManyZodSchema = z.object({ data: z.union([ tblMaterialCreateManyInputObjectSchema, z.array(tblMaterialCreateManyInputObjectSchema) ]),  }).strict();