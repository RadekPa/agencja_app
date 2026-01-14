import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialSelectObjectSchema as PearsonMaterialSelectObjectSchema } from './objects/PearsonMaterialSelect.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';
import { PearsonMaterialCreateInputObjectSchema as PearsonMaterialCreateInputObjectSchema } from './objects/PearsonMaterialCreateInput.schema';
import { PearsonMaterialUncheckedCreateInputObjectSchema as PearsonMaterialUncheckedCreateInputObjectSchema } from './objects/PearsonMaterialUncheckedCreateInput.schema';
import { PearsonMaterialUpdateInputObjectSchema as PearsonMaterialUpdateInputObjectSchema } from './objects/PearsonMaterialUpdateInput.schema';
import { PearsonMaterialUncheckedUpdateInputObjectSchema as PearsonMaterialUncheckedUpdateInputObjectSchema } from './objects/PearsonMaterialUncheckedUpdateInput.schema';

export const PearsonMaterialUpsertOneSchema: z.ZodType<Prisma.PearsonMaterialUpsertArgs> = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema, create: z.union([ PearsonMaterialCreateInputObjectSchema, PearsonMaterialUncheckedCreateInputObjectSchema ]), update: z.union([ PearsonMaterialUpdateInputObjectSchema, PearsonMaterialUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialUpsertArgs>;

export const PearsonMaterialUpsertOneZodSchema = z.object({ select: PearsonMaterialSelectObjectSchema.optional(),  where: PearsonMaterialWhereUniqueInputObjectSchema, create: z.union([ PearsonMaterialCreateInputObjectSchema, PearsonMaterialUncheckedCreateInputObjectSchema ]), update: z.union([ PearsonMaterialUpdateInputObjectSchema, PearsonMaterialUncheckedUpdateInputObjectSchema ]) }).strict();