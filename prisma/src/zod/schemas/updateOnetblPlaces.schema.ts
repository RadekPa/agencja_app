import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesSelectObjectSchema as tblPlacesSelectObjectSchema } from './objects/tblPlacesSelect.schema';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './objects/tblPlacesInclude.schema';
import { tblPlacesUpdateInputObjectSchema as tblPlacesUpdateInputObjectSchema } from './objects/tblPlacesUpdateInput.schema';
import { tblPlacesUncheckedUpdateInputObjectSchema as tblPlacesUncheckedUpdateInputObjectSchema } from './objects/tblPlacesUncheckedUpdateInput.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './objects/tblPlacesWhereUniqueInput.schema';

export const tblPlacesUpdateOneSchema: z.ZodType<Prisma.tblPlacesUpdateArgs> = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), data: z.union([tblPlacesUpdateInputObjectSchema, tblPlacesUncheckedUpdateInputObjectSchema]), where: tblPlacesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPlacesUpdateArgs>;

export const tblPlacesUpdateOneZodSchema = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), data: z.union([tblPlacesUpdateInputObjectSchema, tblPlacesUncheckedUpdateInputObjectSchema]), where: tblPlacesWhereUniqueInputObjectSchema }).strict();