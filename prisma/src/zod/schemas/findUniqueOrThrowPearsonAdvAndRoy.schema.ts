import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';

export const PearsonAdvAndRoyFindUniqueOrThrowSchema: z.ZodType<Prisma.PearsonAdvAndRoyFindUniqueOrThrowArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyFindUniqueOrThrowArgs>;

export const PearsonAdvAndRoyFindUniqueOrThrowZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema }).strict();