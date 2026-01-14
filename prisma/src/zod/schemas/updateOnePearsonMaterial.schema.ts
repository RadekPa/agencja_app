import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './objects/PearsonMaterialSelect.schema';
import { PearsonMaterialUpdateInputObjectSchema as PearsonMaterialUpdateInputObjectSchema } from './objects/PearsonMaterialUpdateInput.schema';
import { PearsonMaterialUncheckedUpdateInputObjectSchema as PearsonMaterialUncheckedUpdateInputObjectSchema } from './objects/PearsonMaterialUncheckedUpdateInput.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';

export const PearsonMaterialUpdateOneSchema: z.ZodType<Prisma.PearsonMaterialUpdateArgs> = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  data: z.union([PearsonMaterialUpdateInputObjectSchema, PearsonMaterialUncheckedUpdateInputObjectSchema]), where: PearsonMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialUpdateArgs>;

export const PearsonMaterialUpdateOneZodSchema = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  data: z.union([PearsonMaterialUpdateInputObjectSchema, PearsonMaterialUncheckedUpdateInputObjectSchema]), where: PearsonMaterialWhereUniqueInputObjectSchema }).strict();