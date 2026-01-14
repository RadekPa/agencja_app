import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassUpdateManyMutationInputObjectSchema as tblTitSubClassUpdateManyMutationInputObjectSchema } from './objects/tblTitSubClassUpdateManyMutationInput.schema';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './objects/tblTitSubClassWhereInput.schema';

export const tblTitSubClassUpdateManySchema: z.ZodType<Prisma.tblTitSubClassUpdateManyArgs> = z.object({ data: tblTitSubClassUpdateManyMutationInputObjectSchema, where: tblTitSubClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateManyArgs>;

export const tblTitSubClassUpdateManyZodSchema = z.object({ data: tblTitSubClassUpdateManyMutationInputObjectSchema, where: tblTitSubClassWhereInputObjectSchema.optional() }).strict();