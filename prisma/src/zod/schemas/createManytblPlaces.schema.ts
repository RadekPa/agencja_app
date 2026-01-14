import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesCreateManyInputObjectSchema as tblPlacesCreateManyInputObjectSchema } from './objects/tblPlacesCreateManyInput.schema';

export const tblPlacesCreateManySchema: z.ZodType<Prisma.tblPlacesCreateManyArgs> = z.object({ data: z.union([ tblPlacesCreateManyInputObjectSchema, z.array(tblPlacesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblPlacesCreateManyArgs>;

export const tblPlacesCreateManyZodSchema = z.object({ data: z.union([ tblPlacesCreateManyInputObjectSchema, z.array(tblPlacesCreateManyInputObjectSchema) ]),  }).strict();