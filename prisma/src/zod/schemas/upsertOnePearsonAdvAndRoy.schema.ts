import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './objects/PearsonAdvAndRoySelect.schema';
import { PearsonAdvAndRoyWhereUniqueInputObjectSchema as PearsonAdvAndRoyWhereUniqueInputObjectSchema } from './objects/PearsonAdvAndRoyWhereUniqueInput.schema';
import { PearsonAdvAndRoyCreateInputObjectSchema as PearsonAdvAndRoyCreateInputObjectSchema } from './objects/PearsonAdvAndRoyCreateInput.schema';
import { PearsonAdvAndRoyUncheckedCreateInputObjectSchema as PearsonAdvAndRoyUncheckedCreateInputObjectSchema } from './objects/PearsonAdvAndRoyUncheckedCreateInput.schema';
import { PearsonAdvAndRoyUpdateInputObjectSchema as PearsonAdvAndRoyUpdateInputObjectSchema } from './objects/PearsonAdvAndRoyUpdateInput.schema';
import { PearsonAdvAndRoyUncheckedUpdateInputObjectSchema as PearsonAdvAndRoyUncheckedUpdateInputObjectSchema } from './objects/PearsonAdvAndRoyUncheckedUpdateInput.schema';

export const PearsonAdvAndRoyUpsertOneSchema: z.ZodType<Prisma.PearsonAdvAndRoyUpsertArgs> = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema, create: z.union([ PearsonAdvAndRoyCreateInputObjectSchema, PearsonAdvAndRoyUncheckedCreateInputObjectSchema ]), update: z.union([ PearsonAdvAndRoyUpdateInputObjectSchema, PearsonAdvAndRoyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PearsonAdvAndRoyUpsertArgs>;

export const PearsonAdvAndRoyUpsertOneZodSchema = z.object({ select: PearsonAdvAndRoySelectObjectSchema.optional(),  where: PearsonAdvAndRoyWhereUniqueInputObjectSchema, create: z.union([ PearsonAdvAndRoyCreateInputObjectSchema, PearsonAdvAndRoyUncheckedCreateInputObjectSchema ]), update: z.union([ PearsonAdvAndRoyUpdateInputObjectSchema, PearsonAdvAndRoyUncheckedUpdateInputObjectSchema ]) }).strict();