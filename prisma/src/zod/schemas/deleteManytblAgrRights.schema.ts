import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './objects/tblAgrRightsWhereInput.schema';

export const tblAgrRightsDeleteManySchema: z.ZodType<Prisma.tblAgrRightsDeleteManyArgs> = z.object({ where: tblAgrRightsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsDeleteManyArgs>;

export const tblAgrRightsDeleteManyZodSchema = z.object({ where: tblAgrRightsWhereInputObjectSchema.optional() }).strict();