import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './objects/tblMaterialSelect.schema';
import { tblMaterialUpdateInputObjectSchema as tblMaterialUpdateInputObjectSchema } from './objects/tblMaterialUpdateInput.schema';
import { tblMaterialUncheckedUpdateInputObjectSchema as tblMaterialUncheckedUpdateInputObjectSchema } from './objects/tblMaterialUncheckedUpdateInput.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';

export const tblMaterialUpdateOneSchema: z.ZodType<Prisma.tblMaterialUpdateArgs> = z.object({ select: tblMaterialSelectObjectSchema.optional(),  data: z.union([tblMaterialUpdateInputObjectSchema, tblMaterialUncheckedUpdateInputObjectSchema]), where: tblMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMaterialUpdateArgs>;

export const tblMaterialUpdateOneZodSchema = z.object({ select: tblMaterialSelectObjectSchema.optional(),  data: z.union([tblMaterialUpdateInputObjectSchema, tblMaterialUncheckedUpdateInputObjectSchema]), where: tblMaterialWhereUniqueInputObjectSchema }).strict();