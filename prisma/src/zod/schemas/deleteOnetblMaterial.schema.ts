import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './objects/tblMaterialSelect.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';

export const tblMaterialDeleteOneSchema: z.ZodType<Prisma.tblMaterialDeleteArgs> = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMaterialDeleteArgs>;

export const tblMaterialDeleteOneZodSchema = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema }).strict();