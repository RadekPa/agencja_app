import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesSelectObjectSchema as tblPlacesSelectObjectSchema } from './objects/tblPlacesSelect.schema';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './objects/tblPlacesInclude.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './objects/tblPlacesWhereUniqueInput.schema';
import { tblPlacesCreateInputObjectSchema as tblPlacesCreateInputObjectSchema } from './objects/tblPlacesCreateInput.schema';
import { tblPlacesUncheckedCreateInputObjectSchema as tblPlacesUncheckedCreateInputObjectSchema } from './objects/tblPlacesUncheckedCreateInput.schema';
import { tblPlacesUpdateInputObjectSchema as tblPlacesUpdateInputObjectSchema } from './objects/tblPlacesUpdateInput.schema';
import { tblPlacesUncheckedUpdateInputObjectSchema as tblPlacesUncheckedUpdateInputObjectSchema } from './objects/tblPlacesUncheckedUpdateInput.schema';

export const tblPlacesUpsertOneSchema: z.ZodType<Prisma.tblPlacesUpsertArgs> = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), where: tblPlacesWhereUniqueInputObjectSchema, create: z.union([ tblPlacesCreateInputObjectSchema, tblPlacesUncheckedCreateInputObjectSchema ]), update: z.union([ tblPlacesUpdateInputObjectSchema, tblPlacesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPlacesUpsertArgs>;

export const tblPlacesUpsertOneZodSchema = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), where: tblPlacesWhereUniqueInputObjectSchema, create: z.union([ tblPlacesCreateInputObjectSchema, tblPlacesUncheckedCreateInputObjectSchema ]), update: z.union([ tblPlacesUpdateInputObjectSchema, tblPlacesUncheckedUpdateInputObjectSchema ]) }).strict();