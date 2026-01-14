import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';

export const PearsonAdvAndRoyFindUniqueSchema: z.ZodType<Prisma.PearsonAdvAndRoyFindUniqueArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyFindUniqueArgs>;

export const PearsonAdvAndRoyFindUniqueZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict();