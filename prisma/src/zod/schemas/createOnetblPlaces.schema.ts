import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesSelectObjectSchema as tblPlacesSelectObjectSchema } from './objects/tblPlacesSelect.schema';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './objects/tblPlacesInclude.schema';
import { tblPlacesCreateInputObjectSchema as tblPlacesCreateInputObjectSchema } from './objects/tblPlacesCreateInput.schema';
import { tblPlacesUncheckedCreateInputObjectSchema as tblPlacesUncheckedCreateInputObjectSchema } from './objects/tblPlacesUncheckedCreateInput.schema';

export const tblPlacesCreateOneSchema: z.ZodType<Prisma.tblPlacesCreateArgs> = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), data: z.union([tblPlacesCreateInputObjectSchema, tblPlacesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPlacesCreateArgs>;

export const tblPlacesCreateOneZodSchema = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), data: z.union([tblPlacesCreateInputObjectSchema, tblPlacesUncheckedCreateInputObjectSchema]) }).strict();