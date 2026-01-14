import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesSelectObjectSchema as tblCustTypesSelectObjectSchema } from './objects/tblCustTypesSelect.schema';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesCreateInputObjectSchema as tblCustTypesCreateInputObjectSchema } from './objects/tblCustTypesCreateInput.schema';
import { tblCustTypesUncheckedCreateInputObjectSchema as tblCustTypesUncheckedCreateInputObjectSchema } from './objects/tblCustTypesUncheckedCreateInput.schema';

export const tblCustTypesCreateOneSchema: z.ZodType<Prisma.tblCustTypesCreateArgs> = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), data: z.union([tblCustTypesCreateInputObjectSchema, tblCustTypesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblCustTypesCreateArgs>;

export const tblCustTypesCreateOneZodSchema = z.object({ select: tblCustTypesSelectObjectSchema.optional(), include: tblCustTypesIncludeObjectSchema.optional(), data: z.union([tblCustTypesCreateInputObjectSchema, tblCustTypesUncheckedCreateInputObjectSchema]) }).strict();