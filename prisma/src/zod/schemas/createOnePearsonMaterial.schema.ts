import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './objects/PearsonMaterialSelect.schema';
import { PearsonMaterialCreateInputObjectSchema as PearsonMaterialCreateInputObjectSchema } from './objects/PearsonMaterialCreateInput.schema';
import { PearsonMaterialUncheckedCreateInputObjectSchema as PearsonMaterialUncheckedCreateInputObjectSchema } from './objects/PearsonMaterialUncheckedCreateInput.schema';

export const PearsonMaterialCreateOneSchema: z.ZodType<Prisma.PearsonMaterialCreateArgs> = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  data: z.union([PearsonMaterialCreateInputObjectSchema, PearsonMaterialUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialCreateArgs>;

export const PearsonMaterialCreateOneZodSchema = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  data: z.union([PearsonMaterialCreateInputObjectSchema, PearsonMaterialUncheckedCreateInputObjectSchema]) }).strict();