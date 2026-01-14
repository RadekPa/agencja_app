import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialWhereInputObjectSchema as tblMaterialWhereInputObjectSchema } from './objects/tblMaterialWhereInput.schema';

export const tblMaterialDeleteManySchema: z.ZodType<Prisma.tblMaterialDeleteManyArgs> = z.object({ where: tblMaterialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMaterialDeleteManyArgs>;

export const tblMaterialDeleteManyZodSchema = z.object({ where: tblMaterialWhereInputObjectSchema.optional() }).strict();