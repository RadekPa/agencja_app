import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyUpdateInputObjectSchema as PearsonAdvAndRoyUpdateInputObjectSchema } from './objects/PearsonAdvAndRoyUpdateInput.schema';
import { PearsonAdvAndRoyUncheckedUpdateInputObjectSchema as PearsonAdvAndRoyUncheckedUpdateInputObjectSchema } from './objects/PearsonAdvAndRoyUncheckedUpdateInput.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';

export const PearsonAdvAndRoyUpdateOneSchema: z.ZodType<Prisma.PearsonAdvAndRoyUpdateArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  data: z.union([PearsonAdvAndRoyUpdateInputObjectSchema, PearsonAdvAndRoyUncheckedUpdateInputObjectSchema]), where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyUpdateArgs>;

export const PearsonAdvAndRoyUpdateOneZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  data: z.union([PearsonAdvAndRoyUpdateInputObjectSchema, PearsonAdvAndRoyUncheckedUpdateInputObjectSchema]), where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict();