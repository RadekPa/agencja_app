import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesSelectObjectSchema as tblCustTypesSelectObjectSchema } from './objects/tblCustTypesSelect.schema';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesCreateInputObjectSchema as tblCustTypesCreateInputObjectSchema } from './objects/tblCustTypesCreateInput.schema';
import { tblCustTypesUncheckedCreateInputObjectSchema as tblCustTypesUncheckedCreateInputObjectSchema } from './objects/tblCustTypesUncheckedCreateInput.schema';
import { tblCustTypesUpdateInputObjectSchema as tblCustTypesUpdateInputObjectSchema } from './objects/tblCustTypesUpdateInput.schema';
import { tblCustTypesUncheckedUpdateInputObjectSchema as tblCustTypesUncheckedUpdateInputObjectSchema } from './objects/tblCustTypesUncheckedUpdateInput.schema';

export const tblCustTypesUpsertOneSchema: z.ZodType<Prisma.tblCustTypesUpsertArgs> = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), where: tblCustTypesWhereUniqueInputObjectSchema, create: z.union([ tblCustTypesCreateInputObjectSchema, tblCustTypesUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustTypesUpdateInputObjectSchema, tblCustTypesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCustTypesUpsertArgs>;

export const tblCustTypesUpsertOneZodSchema = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), where: tblCustTypesWhereUniqueInputObjectSchema, create: z.union([ tblCustTypesCreateInputObjectSchema, tblCustTypesUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustTypesUpdateInputObjectSchema, tblCustTypesUncheckedUpdateInputObjectSchema ]) }).strict();