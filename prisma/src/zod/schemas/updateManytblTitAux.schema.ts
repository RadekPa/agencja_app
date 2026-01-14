import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxUpdateManyMutationInputObjectSchema as tblTitAuxUpdateManyMutationInputObjectSchema } from './objects/tblTitAuxUpdateManyMutationInput.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './objects/tblTitAuxWhereInput.schema';

export const tblTitAuxUpdateManySchema: z.ZodType<Prisma.tblTitAuxUpdateManyArgs> = z.object({ data: tblTitAuxUpdateManyMutationInputObjectSchema, where: tblTitAuxWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuxUpdateManyArgs>;

export const tblTitAuxUpdateManyZodSchema = z.object({ data: tblTitAuxUpdateManyMutationInputObjectSchema, where: tblTitAuxWhereInputObjectSchema.optional() }).strict();