import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './objects/tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';

export const tblAgrRightsFindUniqueOrThrowSchema: z.ZodType<Prisma.tblAgrRightsFindUniqueOrThrowArgs> = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsFindUniqueOrThrowArgs>;

export const tblAgrRightsFindUniqueOrThrowZodSchema = z.object({ select: tblAgrRightsSelectObjectSchema.optional(), include: tblAgrRightsIncludeObjectSchema.optional(), where: tblAgrRightsWhereUniqueInputObjectSchema }).strict();