import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceSelectObjectSchema as tblAdvanceSelectObjectSchema } from './objects/tblAdvanceSelect.schema';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './objects/tblAdvanceInclude.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './objects/tblAdvanceWhereUniqueInput.schema';
import { tblAdvanceCreateInputObjectSchema as tblAdvanceCreateInputObjectSchema } from './objects/tblAdvanceCreateInput.schema';
import { tblAdvanceUncheckedCreateInputObjectSchema as tblAdvanceUncheckedCreateInputObjectSchema } from './objects/tblAdvanceUncheckedCreateInput.schema';
import { tblAdvanceUpdateInputObjectSchema as tblAdvanceUpdateInputObjectSchema } from './objects/tblAdvanceUpdateInput.schema';
import { tblAdvanceUncheckedUpdateInputObjectSchema as tblAdvanceUncheckedUpdateInputObjectSchema } from './objects/tblAdvanceUncheckedUpdateInput.schema';

export const tblAdvanceUpsertOneSchema: z.ZodType<Prisma.tblAdvanceUpsertArgs> = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), where: tblAdvanceWhereUniqueInputObjectSchema, create: z.union([ tblAdvanceCreateInputObjectSchema, tblAdvanceUncheckedCreateInputObjectSchema ]), update: z.union([ tblAdvanceUpdateInputObjectSchema, tblAdvanceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblAdvanceUpsertArgs>;

export const tblAdvanceUpsertOneZodSchema = z.object({ select: tblAdvanceSelectObjectSchema.optional(), include: tblAdvanceIncludeObjectSchema.optional(), where: tblAdvanceWhereUniqueInputObjectSchema, create: z.union([ tblAdvanceCreateInputObjectSchema, tblAdvanceUncheckedCreateInputObjectSchema ]), update: z.union([ tblAdvanceUpdateInputObjectSchema, tblAdvanceUncheckedUpdateInputObjectSchema ]) }).strict();