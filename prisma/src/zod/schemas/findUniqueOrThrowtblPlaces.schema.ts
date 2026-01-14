import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesSelectObjectSchema as tblPlacesSelectObjectSchema } from './objects/tblPlacesSelect.schema';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './objects/tblPlacesInclude.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './objects/tblPlacesWhereUniqueInput.schema';

export const tblPlacesFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPlacesFindUniqueOrThrowArgs> = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), where: tblPlacesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPlacesFindUniqueOrThrowArgs>;

export const tblPlacesFindUniqueOrThrowZodSchema = z.object({ select: tblPlacesSelectObjectSchema.optional(), include: tblPlacesIncludeObjectSchema.optional(), where: tblPlacesWhereUniqueInputObjectSchema }).strict();