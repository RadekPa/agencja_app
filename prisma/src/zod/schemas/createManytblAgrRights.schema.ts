import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsCreateManyInputObjectSchema as tblAgrRightsCreateManyInputObjectSchema } from './objects/tblAgrRightsCreateManyInput.schema';

export const tblAgrRightsCreateManySchema: z.ZodType<Prisma.tblAgrRightsCreateManyArgs> = z.object({ data: z.union([ tblAgrRightsCreateManyInputObjectSchema, z.array(tblAgrRightsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyArgs>;

export const tblAgrRightsCreateManyZodSchema = z.object({ data: z.union([ tblAgrRightsCreateManyInputObjectSchema, z.array(tblAgrRightsCreateManyInputObjectSchema) ]),  }).strict();