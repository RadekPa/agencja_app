import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialUpdateManyMutationInputObjectSchema as PearsonMaterialUpdateManyMutationInputObjectSchema } from './objects/PearsonMaterialUpdateManyMutationInput.schema';
import { PearsonMaterialWhereInputObjectSchema as PearsonMaterialWhereInputObjectSchema } from './objects/PearsonMaterialWhereInput.schema';

export const PearsonMaterialUpdateManySchema: z.ZodType<Prisma.PearsonMaterialUpdateManyArgs> = z.object({ data: PearsonMaterialUpdateManyMutationInputObjectSchema, where: PearsonMaterialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialUpdateManyArgs>;

export const PearsonMaterialUpdateManyZodSchema = z.object({ data: PearsonMaterialUpdateManyMutationInputObjectSchema, where: PearsonMaterialWhereInputObjectSchema.optional() }).strict();