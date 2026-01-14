import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceSelectObjectSchema as tblAdvanceSelectObjectSchema } from './objects/tblAdvanceSelect.schema';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './objects/tblAdvanceInclude.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './objects/tblAdvanceWhereUniqueInput.schema';

export const tblAdvanceDeleteOneSchema: z.ZodType<Prisma.tblAdvanceDeleteArgs> = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), where: tblAdvanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAdvanceDeleteArgs>;

export const tblAdvanceDeleteOneZodSchema = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), where: tblAdvanceWhereUniqueInputObjectSchema }).strict();