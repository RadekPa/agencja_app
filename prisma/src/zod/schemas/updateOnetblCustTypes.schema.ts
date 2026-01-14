import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesSelectObjectSchema as tblCustTypesSelectObjectSchema } from './objects/tblCustTypesSelect.schema';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesUpdateInputObjectSchema as tblCustTypesUpdateInputObjectSchema } from './objects/tblCustTypesUpdateInput.schema';
import { tblCustTypesUncheckedUpdateInputObjectSchema as tblCustTypesUncheckedUpdateInputObjectSchema } from './objects/tblCustTypesUncheckedUpdateInput.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';

export const tblCustTypesUpdateOneSchema: z.ZodType<Prisma.tblCustTypesUpdateArgs> = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), data: z.union([tblCustTypesUpdateInputObjectSchema, tblCustTypesUncheckedUpdateInputObjectSchema]), where: tblCustTypesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustTypesUpdateArgs>;

export const tblCustTypesUpdateOneZodSchema = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), data: z.union([tblCustTypesUpdateInputObjectSchema, tblCustTypesUncheckedUpdateInputObjectSchema]), where: tblCustTypesWhereUniqueInputObjectSchema }).strict();