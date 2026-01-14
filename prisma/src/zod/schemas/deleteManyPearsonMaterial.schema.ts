import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialWhereInputObjectSchema as PearsonMaterialWhereInputObjectSchema } from './objects/PearsonMaterialWhereInput.schema';

export const PearsonMaterialDeleteManySchema: z.ZodType<Prisma.PearsonMaterialDeleteManyArgs> = z.object({ where: PearsonMaterialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialDeleteManyArgs>;

export const PearsonMaterialDeleteManyZodSchema = z.object({ where: PearsonMaterialWhereInputObjectSchema.optional() }).strict();