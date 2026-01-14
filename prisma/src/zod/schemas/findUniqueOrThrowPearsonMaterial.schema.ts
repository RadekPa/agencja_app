import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './objects/PearsonMaterialSelect.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';

export const PearsonMaterialFindUniqueOrThrowSchema: z.ZodType<Prisma.PearsonMaterialFindUniqueOrThrowArgs> = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialFindUniqueOrThrowArgs>;

export const PearsonMaterialFindUniqueOrThrowZodSchema = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema }).strict();