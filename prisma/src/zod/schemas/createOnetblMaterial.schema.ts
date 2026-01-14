import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialSelectObjectSchema as tblMaterialSelectObjectSchema } from './objects/tblMaterialSelect.schema';
import { tblMaterialCreateInputObjectSchema as tblMaterialCreateInputObjectSchema } from './objects/tblMaterialCreateInput.schema';
import { tblMaterialUncheckedCreateInputObjectSchema as tblMaterialUncheckedCreateInputObjectSchema } from './objects/tblMaterialUncheckedCreateInput.schema';

export const tblMaterialCreateOneSchema: z.ZodType<Prisma.tblMaterialCreateArgs> = z.object({ select: tblMaterialSelectObjectSchema.optional(),  data: z.union([tblMaterialCreateInputObjectSchema, tblMaterialUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblMaterialCreateArgs>;

export const tblMaterialCreateOneZodSchema = z.object({ select: tblMaterialSelectObjectSchema.optional(),  data: z.union([tblMaterialCreateInputObjectSchema, tblMaterialUncheckedCreateInputObjectSchema]) }).strict();