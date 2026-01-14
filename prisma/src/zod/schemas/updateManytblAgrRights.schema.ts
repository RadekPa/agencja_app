import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './objects/tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './objects/tblAgrRightsWhereInput.schema';

export const tblAgrRightsUpdateManySchema: z.ZodType<Prisma.tblAgrRightsUpdateManyArgs> = z.object({ data: tblAgrRightsUpdateManyMutationInputObjectSchema, where: tblAgrRightsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyArgs>;

export const tblAgrRightsUpdateManyZodSchema = z.object({ data: tblAgrRightsUpdateManyMutationInputObjectSchema, where: tblAgrRightsWhereInputObjectSchema.optional() }).strict();