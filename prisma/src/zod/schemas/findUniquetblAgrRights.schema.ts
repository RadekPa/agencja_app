import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './objects/tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';

export const tblAgrRightsFindUniqueSchema: z.ZodType<Prisma.tblAgrRightsFindUniqueArgs> = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsFindUniqueArgs>;

export const tblAgrRightsFindUniqueZodSchema = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict();