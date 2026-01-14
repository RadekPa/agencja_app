import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './objects/PearsonMaterialSelect.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';

export const PearsonMaterialFindUniqueSchema: z.ZodType<Prisma.PearsonMaterialFindUniqueArgs> = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialFindUniqueArgs>;

export const PearsonMaterialFindUniqueZodSchema = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema }).strict();