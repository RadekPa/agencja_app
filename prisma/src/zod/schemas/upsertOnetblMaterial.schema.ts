import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './objects/tblMaterialSelect.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';
import { tblMaterialCreateInputObjectSchema as tblMaterialCreateInputObjectSchema } from './objects/tblMaterialCreateInput.schema';
import { tblMaterialUncheckedCreateInputObjectSchema as tblMaterialUncheckedCreateInputObjectSchema } from './objects/tblMaterialUncheckedCreateInput.schema';
import { tblMaterialUpdateInputObjectSchema as tblMaterialUpdateInputObjectSchema } from './objects/tblMaterialUpdateInput.schema';
import { tblMaterialUncheckedUpdateInputObjectSchema as tblMaterialUncheckedUpdateInputObjectSchema } from './objects/tblMaterialUncheckedUpdateInput.schema';

export const tblMaterialUpsertOneSchema: z.ZodType<Prisma.tblMaterialUpsertArgs> = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema, create: z.union([ tblMaterialCreateInputObjectSchema, tblMaterialUncheckedCreateInputObjectSchema ]), update: z.union([ tblMaterialUpdateInputObjectSchema, tblMaterialUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblMaterialUpsertArgs>;

export const tblMaterialUpsertOneZodSchema = z.object({ select: tblMaterialSelectObjectSchema.optional(),  where: tblMaterialWhereUniqueInputObjectSchema, create: z.union([ tblMaterialCreateInputObjectSchema, tblMaterialUncheckedCreateInputObjectSchema ]), update: z.union([ tblMaterialUpdateInputObjectSchema, tblMaterialUncheckedUpdateInputObjectSchema ]) }).strict();