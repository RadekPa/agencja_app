import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceSelectObjectSchema as tblAdvanceSelectObjectSchema } from './objects/tblAdvanceSelect.schema';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './objects/tblAdvanceInclude.schema';
import { tblAdvanceCreateInputObjectSchema as tblAdvanceCreateInputObjectSchema } from './objects/tblAdvanceCreateInput.schema';
import { tblAdvanceUncheckedCreateInputObjectSchema as tblAdvanceUncheckedCreateInputObjectSchema } from './objects/tblAdvanceUncheckedCreateInput.schema';

export const tblAdvanceCreateOneSchema: z.ZodType<Prisma.tblAdvanceCreateArgs> = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), data: z.union([tblAdvanceCreateInputObjectSchema, tblAdvanceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblAdvanceCreateArgs>;

export const tblAdvanceCreateOneZodSchema = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), data: z.union([tblAdvanceCreateInputObjectSchema, tblAdvanceUncheckedCreateInputObjectSchema]) }).strict();