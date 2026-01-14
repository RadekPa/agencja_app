import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoyWhereInputObjectSchema as PearsonAdvAndRoyWhereInputObjectSchema } from './objects/PearsonAdvAndRoyWhereInput.schema';

export const PearsonAdvAndRoyDeleteManySchema: z.ZodType<Prisma.PearsonAdvAndRoyDeleteManyArgs> = z.object({ where: PearsonAdvAndRoyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyDeleteManyArgs>;

export const PearsonAdvAndRoyDeleteManyZodSchema = z.object({ where: PearsonAdvAndRoyWhereInputObjectSchema.optional() }).strict();