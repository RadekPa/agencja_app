import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyCreateInputObjectSchema as PearsonAdvAndRoyCreateInputObjectSchema } from './objects/PearsonAdvAndRoyCreateInput.schema';
import { PearsonAdvAndRoyUncheckedCreateInputObjectSchema as PearsonAdvAndRoyUncheckedCreateInputObjectSchema } from './objects/PearsonAdvAndRoyUncheckedCreateInput.schema';

export const PearsonAdvAndRoyCreateOneSchema: z.ZodType<Prisma.PearsonAdvAndRoyCreateArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  data: z.union([PearsonAdvAndRoyCreateInputObjectSchema, PearsonAdvAndRoyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyCreateArgs>;

export const PearsonAdvAndRoyCreateOneZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  data: z.union([PearsonAdvAndRoyCreateInputObjectSchema, PearsonAdvAndRoyUncheckedCreateInputObjectSchema]) }).strict();