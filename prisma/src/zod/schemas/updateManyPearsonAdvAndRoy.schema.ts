import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoyUpdateManyMutationInputObjectSchema as PearsonAdvAndRoyUpdateManyMutationInputObjectSchema } from './objects/PearsonAdvAndRoyUpdateManyMutationInput.schema';
import { PearsonAdvAndRoyWhereInputObjectSchema as PearsonAdvAndRoyWhereInputObjectSchema } from './objects/PearsonAdvAndRoyWhereInput.schema';

export const PearsonAdvAndRoyUpdateManySchema: z.ZodType<Prisma.PearsonAdvAndRoyUpdateManyArgs> = z.object({ data: PearsonAdvAndRoyUpdateManyMutationInputObjectSchema, where: PearsonAdvAndRoyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyUpdateManyArgs>;

export const PearsonAdvAndRoyUpdateManyZodSchema = z.object({ data: PearsonAdvAndRoyUpdateManyMutationInputObjectSchema, where: PearsonAdvAndRoyWhereInputObjectSchema.optional() }).strict();