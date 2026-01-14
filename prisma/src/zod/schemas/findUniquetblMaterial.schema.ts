import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './objects/tblMaterialSelect.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';

export const tblMaterialFindUniqueSchema: z.ZodType<Prisma.tblMaterialFindUniqueArgs> = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblMaterialFindUniqueArgs>;

export const tblMaterialFindUniqueZodSchema = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema }).strict();