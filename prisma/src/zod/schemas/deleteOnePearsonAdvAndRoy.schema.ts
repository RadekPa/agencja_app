import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';

export const PearsonAdvAndRoyDeleteOneSchema: z.ZodType<Prisma.PearsonAdvAndRoyDeleteArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyDeleteArgs>;

export const PearsonAdvAndRoyDeleteOneZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict();