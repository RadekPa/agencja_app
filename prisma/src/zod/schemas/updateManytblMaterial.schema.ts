import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialUpdateManyMutationInputObjectSchema as tblMaterialUpdateManyMutationInputObjectSchema } from './objects/tblMaterialUpdateManyMutationInput.schema';
import { tblMaterialWhereInputObjectSchema as tblMaterialWhereInputObjectSchema } from './objects/tblMaterialWhereInput.schema';

export const tblMaterialUpdateManySchema: z.ZodType<Prisma.tblMaterialUpdateManyArgs> = z.object({ data: tblMaterialUpdateManyMutationInputObjectSchema, where: tblMaterialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblMaterialUpdateManyArgs>;

export const tblMaterialUpdateManyZodSchema = z.object({ data: tblMaterialUpdateManyMutationInputObjectSchema, where: tblMaterialWhereInputObjectSchema.optional() }).strict();